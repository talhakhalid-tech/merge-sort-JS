import React from 'react'
import axios from 'axios'
import onLogout from './logout'
import auth from './auth'

class Search extends React.Component{

    state = {term : " ",location: "",forecast:""}

    onSearchSubmit = async (event) =>{
        event.preventDefault()
        const response = await axios.get('https://auth-weather-server.herokuapp.com/weather?address='+this.state.term)
        this.setState({location: response.data.location})
        this.setState({forecast: response.data.forecast})
    }

    renderData=() => {
        return(
            <div>
                <p style={{color:"#777777"}}>{this.state.location}</p>
                <p style={{color:"#777777"}}>{this.state.forecast}</p>
            </div>
        )
    } 

    onValueChange = (event) =>{
        this.setState({term: event.target.value})
    }

    render(){
        if(localStorage.getItem('token')){
            return ( 
            <div class="main-content">
                        <header>
                            <h1>Weather</h1> 
                            <button onClick={onLogout} id="logoutbtn">Logout</button>
                            <a href="/search">Weather</a>
                            <a href="/about">About</a>
                            <a href="/help">Help</a>
                        </header>
                        <p>Use this site to get weather</p>
                        <form onSubmit={this.onSearchSubmit}>
                            <input className="inp" onChange = {this.onValueChange} value={this.state.term} type="text" placeholder="Location"/>
                            <button className="btn">Search</button>
                        </form>
                        {this.renderData()}
                </div>
                )
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


export default Search