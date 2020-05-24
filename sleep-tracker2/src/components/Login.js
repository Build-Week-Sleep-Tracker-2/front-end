import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import "./Login.scss";

class Login extends React.Component{
    state={
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/login", this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            this.props.history.push("/protected")
        })
        .catch(err => console.log("Err is:", err.response))
    }

    render(){
        return (
            <div className="form-wrapper">
                <h2>Please login to use SleepTracker</h2>
                <form>
                    <input
                        id="input"
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        placeholder="User Name"
                        onChange={this.handleChanges}
                        required
                    />
                    <input
                        id="input"
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        placeholder="Password"
                        onChange={this.handleChanges}
                        required
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;