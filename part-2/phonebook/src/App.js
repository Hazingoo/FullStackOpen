import React, { useEffect, useState } from "react";
import helper from "./services/helper"
import Notification from './components/Notification'



const App = () => {
  const [persons, setPersons] = useState([]);
const [newName, setNewName] = useState("");
const [newNumber, setNewNumber] = useState("");
const [newSearch, setNewSearch] = useState("");
const [errorMessage, setErrorMessage] = useState(null)


  const hook = () => {

    helper.getAll().then((initialPerson)=>{
      setPersons(initialPerson);
    });
  };
  useEffect(hook, []);

  const buttonHandler = (person) =>{
    console.log(person);
    const result = window.confirm("Do you wish to delete");
    if (result){
      helper.remove(person).then(goodPersons => {
        console.log(goodPersons);
        setPersons(goodPersons);
      })

    }

  }
  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleNewSearch = (event) => {
    setNewSearch(event.target.value)
  };
  const addName = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`))
        helper.change(persons.find(person => person.name === newName), newNumber).then(() => {
          helper.getAll().then((initialPerson)=>{
            setPersons(initialPerson);
          }).catch(error => {
            setErrorMessage(
              `'${error.message}'`
            )
            }
          )

        });

      }
     else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      helper.create(newPerson).then(() =>{
        setPersons(persons.concat(newPerson))
      })
      
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <h2>add a new</h2>
      <form onSubmit={addName}>
      <Notification message={errorMessage} />
        <div>
          filter shown with
          <input value={newSearch} onChange={handleNewSearch} />
        </div>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.slice().filter(item => {
        return item.name.slice(0,newSearch.length).toLowerCase() === newSearch.toLowerCase()
      }).map((person) => {
        return (
          <div>
            <p1>
              {" "}
              {person.name} {person.number}
              <button onClick= {() => buttonHandler(person)}> remove</button>
            </p1>
          </div>
        );
      })}
    </div>
  );
};

export default App;
