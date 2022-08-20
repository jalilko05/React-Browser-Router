import React from "react";
import Navbar from "./Navbar"
import Home from "./Home";
import About from "./About";
import Rooms from "./Rooms";
import Contact from "./Contact";
import { Redirect, Route, Switch } from "react-router-dom";
import Page from "./404/404";
import { Link } from "react-router-dom";


const App =()=>{
  return(
      <div>
        
        <Switch>
         <Route exact path={'/'} component={Navbar} />
         <Route exact path={'/about'} component={Navbar} />
         <Route exact path={'/rooms'} component={Navbar} />
         <Route exact path={'/contact'} component={Navbar} />
        </Switch>
        
         <Switch>
           
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/rooms'} component={Rooms} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/login'}>
          <h1>LOG IN</h1>
          <Link to={'/back'}>return to the homepage</Link>
        </Route>
        <Route exact path={'/back'}>
          <Redirect to={'/'}/>
        </Route>
        <Route path={'*'}>
             <Page/>
        </Route>

         </Switch>
        
      </div>
  )
}

export default App