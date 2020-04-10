import React from 'react'
import '../styles/style.css'
import image from '../styles/me.jpg'
import onLogout from './logout'
import auth from './auth'

class About extends React.Component{

    render(){
        if(localStorage.getItem('token')){
            return (  
                <div>        
                        <div className="main-content">
                            <header>
                                <h1>About</h1> 
                                <button onClick={onLogout} id="logoutbtn">Logout</button>
                                <a href="/search">Weather</a>
                                <a href="/about">About</a>
                                <a href="/help">Help</a>
                            </header>
                            <p style={{color: "grey"}}>This site was created by M.Talha Khalid. It uses Data from mapbox.com and darksky.net!</p><br/>
                            <img alt="me" className="portrait" src={image}/>
                        </div>
                        <footer className="footer">
                            <p>Created by: Talha Khalid</p>
                        </footer>
                    </div>
                );
        }
        else{
            return(
                <div>
                    {auth()}
                </div>
            );
        }
  }
}

export default About