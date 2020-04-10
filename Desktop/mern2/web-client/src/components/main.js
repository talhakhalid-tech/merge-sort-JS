import React from 'react'
import '../styles/style.css'

const Main = () => {
   return ( 
    <div>
        <div className="main-content">
                <header className="header">
                <h1>Weather App</h1> 
                </header>
                <div className='reg'>
                    <h2>Welcome</h2>
                    <a href="/register">
                        <button  className="signupbtn">Sign Up</button>
                    </a>
                    <a href="/login">
                        <button className="loginbtn">Login</button>
                    </a>
                </div>
        </div>
        
        <footer className="footer">
            <p>Created by: Talha Khalid</p>
        </footer>
    </div>
   );
}
export default Main