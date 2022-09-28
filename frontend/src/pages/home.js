import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const HomePage=()=>{
    return(
        <div className='container col-8 mt-5'>
            <div>
            <h1 className='col-12  bg-info display-1'>Employees Registration Management System</h1>
            </div>
            <div className='row'>
              <div className='col-6 bg-light pt-5'>
            <Card.Body>
            <Card.Title>Employees Registration</Card.Title> 
            <Card.Text>
                 Click the button below and you will be directed<br/>
                 to form page where you can register yourself by<br/>
                 filling all the empty fields with your correct info<br/>
            </Card.Text>
            <Link to='/form'>
            <Button variant='info'>REGISTER HERE</Button>
            </Link>
            </Card.Body>      
            </div>
            <div className='col-6 bg-light pt-5'>
            <Card.Body>
            <Card.Title>All Employees</Card.Title> 
            <Card.Text>
                 Click the button below and you will be directed<br/>
                 to users page where you can see all the<br/>
                 registered employees listed within a table<br/>
            </Card.Text>
            <Link to='/users'>
                <Button variant='info'>ALL EMPLOYEES</Button>
            </Link>
            </Card.Body>      
            </div>
            </div>
            </div>
  
        
    )
}

export default HomePage;