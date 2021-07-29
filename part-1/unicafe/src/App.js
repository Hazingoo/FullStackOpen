import React, { useState } from 'react'


const Button = ({goodButtonHandler,neutralButtonHandler, badButtonHandler}) => {
 return( <div>
        <button onClick={goodButtonHandler}>good</button>
        <button onClick={neutralButtonHandler}>neutral</button>
        <button onClick={badButtonHandler}>bad</button>
      </div>
 )
}

const StatisticLine = ({text, value}) => {
  return (
      <tr>
          <td>{text}</td>
          <td>{value}</td>
      </tr>
  );
};
const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if(!(good || neutral || bad)){
    return (
      <p1>
        No feedback given
      </p1>
    )
  }
  return (
    <table>
        <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='All' value={total} />
          <StatisticLine text='Average' value={(good - bad) / total} />
          <StatisticLine text='Positive' value={`${(good / total) * 100} %`} />
        </tbody>
  </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodButtonHandler = (event) => {
    event.preventDefault();
    setGood(good + 1)
  }
  const neutralButtonHandler = (event) => {
    event.preventDefault();
    setNeutral(neutral + 1)
  }

  const badButtonHandler = (event) => {
    event.preventDefault();
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button goodButtonHandler = {goodButtonHandler} neutralButtonHandler = {neutralButtonHandler} 
          badButtonHandler = {badButtonHandler}/>
      <h1>statistics</h1>
    <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App
