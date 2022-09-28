import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import{Redirect} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RegistrationForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      name:'',
      data:''
    }
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.handleChangeName=this.handleChangeName.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChangeEmail(event){
    this.setState({email:event.target.value});
  }

  handleChangeName(event){
    this.setState({name:event.target.value});
  }

  
  async handleSubmit(event){
    event.preventDefault();
  await axios.post('http://localhost:4000/addEmployees',this.state).then(res=>{
    console.log(res.data);
    this.setState({data:res.data});
  }).catch(error=>{
    console.log(error)
  })
  }

  render(){
    if(this.state.data!==''){
      alert(this.state.data);
      return <Redirect to='/'/>
    }
    return(
      <div className='container mt-5 col-4 bg-info'>
      <h1>Employees Registration Form</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
        <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={this.state.email} name="email" onChange={this.handleChangeEmail} />
        <Form.Label>Name:</Form.Label>
          <Form.Control type="text" value={this.state.name} name="name" onChange={this.handleChangeName}/>
        <Button className='mt-3' type="submit">SUBMIT</Button>
        </Form.Group>
      </Form>
      </div>
      
    )
  }

}

export default RegistrationForm;