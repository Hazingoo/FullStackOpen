import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}


const remove = async (person) => {
    const baseUrl2 = baseUrl + `/${person.name}`;
    const request = await axios.delete(baseUrl2)
    const good = await getAll();
return good;
}

const change = (person, newNumber) => {
    const baseUrl2 = baseUrl + `/${person.name}`;
    const res = axios.patch(baseUrl2, {"number": newNumber} )
    console.log("in the changing repsonse function")
    return res.then(response => {
       return response.data;
    });
}

export default {
    getAll,
    create,
    remove,
    change
}