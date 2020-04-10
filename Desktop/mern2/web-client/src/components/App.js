import React from 'react';
import {Router,Route,Switch} from 'react-router-dom'
import history from '../history'
import Login from './login'
import Main from './main'
import Register from './register'
import About from './about'
import Search from './search'
import Help from './help'
import Error from './Error'

function App() {
  return (
    <div>
            <Router history={history}>
                    <div>
                        <Switch>
                            <Route path='/' exact component={Main}/>
                            <Route path='/login' exact component={Login}/>
                            <Route path='/register' exact component={Register}/>
                            <Route path='/about' exact component={About}/>
                            <Route path='/search' exact component={Search}/>
                            <Route path='/help' exact component={Help}/>
                            <Route path='/*' exact component={Error}/>
                        </Switch>
                    </div>
                </Router>
    </div>
  );
}

export default App;