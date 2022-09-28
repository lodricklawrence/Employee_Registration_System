import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React,{Component} from 'react';
import{withRouter,Redirect} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            email:'',
            name:'',
            data:''
        }
        this.handleEdit=this.handleEdit.bind(this);
        this.handleEdit();
        this.handleChangeEmail=this.handleChangeEmail.bind(this);
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleEdit(){
        let {id}=this.props.match.params;
        axios.get(`http://localhost:4000/idEmployees/${id}`).then(res=>{

            this.setState({id:res.data.id});
            this.setState({email:res.data.email});
            this.setState({name:res.data.name});
        })
    }

    handleChangeEmail(e){
        this.setState({email:e.target.value})
    }

    handleChangeName(e){
        this.setState({name:e.target.value})
    }

    async handleSubmit(e){
        let empId=this.state.id;
        e.preventDefault();
        await axios.put(`http://localhost:4000/idEmployees/${empId}`,this.state).then(res=>{
            this.setState({data:res.data});
        })
    }

    render(){
        if(this.state.data){
            alert(this.state.data)
            return <Redirect to='/users'/>
        }
        return(
            <div className='container-fluid mt-5 col-4 bg-info'>
            <h1>Editing Form</h1>
            <form onSubmit={this.handleSubmit}>
                <Form.Label>email:</Form.Label>
                  <Form.Control type='email' value={this.state.email} onChange={this.handleChangeEmail}/>
                  <Form.Label>name:</Form.Label>
                 <Form.Control type='text' value={this.state.name} onChange={this.handleChangeName}/>
                <Button className='mt-3' type='submit'>UPDATE</Button>
            </form>
        </div>
        )
    }
}

export default withRouter(Edit);