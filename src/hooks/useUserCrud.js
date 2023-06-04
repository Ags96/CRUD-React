import { useState } from "react"
import axios from "axios"
import { URL_API } from "../../url"



const useUserCrud = () => {

    const [users, setUsers] = useState()

//console.log(URL_API.url)
const url = URL_API.url

    //GET
    const getAllUsers = () =>{
        axios.get(url)
        .then(res => setUsers(res.data))
        .catch(err =>console.log(err))
    }

    //POST
    const createNewUser = (data) =>{
        axios.post(url, data)
        .then(res => getAllUsers())
        .catch(err =>console.log(err))
    }

    //DELETE
    const deleteUserById = id =>{
        const urlDelete = `${url}/${id}`
        axios.delete(urlDelete)
        .then(res => getAllUsers())
        .catch(err =>console.log(err))
        
    }

    //PUT
    const updateUserById = (id, data) => {
        const urlUpdate = `${url}/${id}`
        axios.put(urlUpdate, data)
        .then(res => getAllUsers())
        .catch(err => console.log(err))
    }

    return { users, getAllUsers, createNewUser, deleteUserById, updateUserById}
}

export default useUserCrud