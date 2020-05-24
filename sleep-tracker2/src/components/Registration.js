import React, {useState, useEffect } from 'react'
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const Registration = (props) => {
    const [user] = useState();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        axios
        .get(`""`)
        .then(res => console.log("user", res))
        .catch(err => console.log("Err is:", err))
    })

    const HandleSubmit = e => {
        e.preventDefault();
        const updatedUser = ({
            name: name || user.name,
            age: age || user.age,
            username: userName || user.userName,
            password: password || user.password
        })
        axiosWithAuth()
            .put("", updatedUser)
            .then((res) => {
                axios.get("")
                .then(((res) => {
                    props.setUser(res.data)
                    props.history.push("")
                }))
            })
            .catch(err => console.log("Err is:", err))
    }

    return (
        <div>
            <h1>New User Info</h1>
            <form onSubmit={HandleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) => (setName(e.target.value))}
                    required
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={(e) => (setAge(e.target.value))}
                    required
                />
                <input
                    type="username"
                    name="username"
                    placeholder="User Name"
                    onChange={(e) => (setUserName(e.target.value))}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => (setPassword(e.target.value))}
                    required
                />
            </form>
            <button onClick={() => props.history.push(``)}
            >
                Register
            </button>
        </div>
    )
}


export default Registration;