import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Switch}from "react-router-dom";



//pages
import HomePage from "./pages/home"
import RegistrationForm from './pages/form';
import SeeEmployees from './pages/users';
import Edit from './pages/edit';
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route exact path='/form' component={RegistrationForm} />
       <Route exact path='/users' component={SeeEmployees} />
       <Route exact path='/edit/:id' component={Edit} />
     </Switch>
     
     </BrowserRouter>


    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
