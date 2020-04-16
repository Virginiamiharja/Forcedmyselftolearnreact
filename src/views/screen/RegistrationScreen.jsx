import React from 'react'
import {Redirect} from 'react-router-dom'

class RegistrationScreen extends React.Component {
    state = {
        users : [
            {username : "virginia", password : "12345"},
            {username : "kendall", password : "12345"},
            {username : "kylie", password : "12345"},
        ],
        username : "",
        password : "",
        rptPassword : "",
        logUsername : "",
        logPassword : "",
        currUsername : "",
        isLoggedIn : false,
    }

    renderUser = () => {
        const {users} = this.state
        return users.map ((value, index) => {
            return (
                <>
                <tr>
                    <td> {index + 1} </td>
                    <td> {value.username} </td>
                    <td> {value.password} </td>
                    <td> 
                        <input className="btn btn-danger" type="button" value="Delete"/>
                    </td>
                </tr>
                </>
            )
        })
    }

    // Cara dapetin value pake function
    valueHandler = (event, field) => {
        this.setState({[field] : event.target.value})
    }

    registrationHandler = () => {
        const {username, password, rptPassword, users} = this.state
        let newUser = {
            username,
            password,
        }
        if (password != rptPassword) {
            alert("Password tidak sama")
        } else (
            this.setState({
                users : [...users, newUser],
                username : "",
                password : "",
                rptPassword : "",
            })
        )
    }

    loginHandler = () => {
        const {logUsername, logPassword, users} = this.state
        users.forEach(user => {
            if (user.username == logUsername && user.password == logPassword) {
                this.setState({
                    isLoggedIn : true,
                    logUsername : "",
                    logPassword : "",
                    currUsername : user.username
                })
            }
        })
    }
    
    render() {
        const {username, password, rptPassword, isLoggedIn, currUsername, logUsername, logPassword} = this.state

        if (!isLoggedIn) {
            return (
                <>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="mt-5"> Registration Form </h4>
                    <form action="" className="form-group col-4 mt-3 mb-3">
                        {/* Dapetin value tanpa function */}
                        <input className="form-control mb-3" value={username} onChange={(e) => {this.setState({username: e.target.value})}} type="text" placeholder="Username"/>
                        <input className="form-control mb-3" value={password} onChange={(e) => {this.valueHandler(e, "password")}} type="text" placeholder="Password"/>
                        <input className="form-control mb-3" value={rptPassword} onChange={(e) => {this.valueHandler(e, "rptPassword")}} type="text" placeholder="Repeat password"/>
                        <input className="btn btn-primary" onClick={() => this.registrationHandler()} type="button" value="Sign Up"/>
                    </form>
                </div>
    
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="mt-5"> User Table </h4>
                    <table className="table col-6">
                        <thead>
                            <tr>
                                <td> No </td>
                                <td> Username </td>
                                <td> Password </td>
                                <td> Action </td>
                            </tr>
                        </thead>
                        <tbody> {this.renderUser()} </tbody>
                    </table>
                </div>
    
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {isLoggedIn ? <h4 className="mt-5"> Welcome ! {currUsername.toUpperCase()} </h4> : null}
                    <form action="" className="form-group col-4 mt-3 mb-3">
                        <input className="form-control mb-3" value={logUsername} onChange={(e) => {this.setState({logUsername : e.target.value})}} type="text" placeholder="Username"/>
                        <input className="form-control mb-3" value={logPassword} onChange={(e) => {this.valueHandler(e, 'logPassword')}} type="text" placeholder="Password"/>
                        <input className="btn btn-primary" onClick={() => {this.loginHandler()}} type="button" value="Sign In"/>
                    </form>
                </div>
                </>
            )
        } else {
            return(
                <Redirect to ={`hallo/${currUsername}`}/>
            )
        }
    }
}

export default RegistrationScreen