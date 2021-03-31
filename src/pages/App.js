import React from "react";
import './style.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Tools from './Tools';
import Projects from './Projects';
import Contacts from './Contacts';
import SignIn from './SignIn';
import SignUp from './SignUp';



function App () {

  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/tools" exact component={Tools} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </div>

      
    </Router>

    
  );
}



export default App;
