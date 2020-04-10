import React from 'react'
import '../styles/style.css'
import axios from 'axios'
import history from '../history'

class Login extends React.Component{

    state={email: "",password: ""}

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPassChange = (event) => {
        this.setState({password: event.target.value})
    }

    onFormSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await axios.post('https://auth-weather-server.herokuapp.com/users/login',this.state)
            console.log(response)
            if(response.status === 200){
                localStorage.setItem('token',response.data.token)
                history.push('./search')
            }
        } catch(error) {
            alert(error.response.data)
        }
    }

    render(){
        return(
            <div>
                <div className="main-content">
                    <header className="header">
                    <h1>Login</h1> 
                    </header>
                    <form onSubmit={this.onFormSubmit}>
                        <div>
                            <label htmlFor='email'>Email Address </label>
                            <br/>
                            <input id="email" type="email" onChange={this.onEmailChange} value={this.state.email} placeholder="Email"/>
                            <br/>
                            <label htmlFor='pass'>Password </label>
                            <br/>
                            <input id="pass" type="password" onChange={this.onPassChange} value={this.state.password} placeholder="Password"/>
                            <br/>
                            <button className='btn' id="regbtn">Submit</button>
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

export default Login