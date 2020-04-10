import React from 'react'
import '../styles/style.css'
import axios from 'axios'
import history from '../history'


class Register extends React.Component{

    state = {name: "",email: "",password: "",age: 18}

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPassChange = (event) => {
        this.setState({password: event.target.value})
    }

    onAgeChange = (event) => {
        this.setState({age: event.target.value})
    }

    onFormSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await axios.post('https://auth-weather-server.herokuapp.com/users/register',this.state)
            if(response.status === 201){
                history.push('/login')
            }
        } catch(error){
            alert(error.response.data)
        }
    }

    render(){
        return(
            <div>
                <div className="main-content">
                    <header className="header">
                    <h1>Register</h1> 
                    </header>
                    <form onSubmit={this.onFormSubmit}>
                        <div>
                            <label htmlFor='uname'>Username </label>
                            <br/>
                            <input id='uname' type="text" onChange={this.onNameChange} value={this.state.name} placeholder="Username"/>
                            <br/>
                            <label htmlFor='email'>Email Address </label>
                            <br/>
                            <input id="email" type="email" onChange={this.onEmailChange} value={this.state.email} placeholder="Email"/>
                            <br/>
                            <label htmlFor='pass'>Password </label>
                            <br/>
                            <input id="pass" type="password" onChange={this.onPassChange} value={this.state.password} placeholder="Password"/>
                            <br/>
                            <label htmlFor='age'>Age </label>
                            <br/>
                            <input id="age" type="number" onChange={this.onAgeChange} value={this.state.age} placeholder="Age"/>
                            <br/>
                            <button className="btn" id="regbtn">Submit</button>
                        </div>
                    </form>
                </div>
                <footer className="footer">
                    <p>Created by: Talha Khalid</p>
                </footer>
            </div>
        );
    }
}

export default Register