import React from 'react'
import onLogout from './logout'
import auth from './auth'

const Help = () =>{
    if(localStorage.getItem('token')){
        return (
            <div class="main-content">
                    <header>
                        <h1>Help</h1> 
                        <button onClick={onLogout} id="logoutbtn">Logout</button>
                        <a href="/search">Weather</a>
                        <a href="/about">About</a>
                        <a href="/help">Help</a>
                    </header>
                    <p>This message is for your help</p>
            </div>
        );
    }
    else{
        return(
            <div>
                {auth()}
            </div>
        )
    }
}

export default Help