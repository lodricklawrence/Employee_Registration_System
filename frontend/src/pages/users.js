import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import{Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


class SeeEmployees extends React.Component{
  constructor(props){
    super(props);
    this.state={list:[],
                id:'',
                email:'',
                name:'',
                data:''
            

            }
    this.handleClick=this.handleClick.bind(this);
    this.handleClick();
    this.handleDelete=this.handleDelete.bind(this);
  }

 async handleClick(){
   await axios.get('http://localhost:4000/allEmployees')
   .then(res=>{
    let all=res.data;
    this.setState({list:all});
   })
   .catch(e=>{
    console.log(e);
   })

  }
 


 async handleDelete(id){
    await axios.delete(`http://localhost:4000/idEmployees/${id}`).then(res=>{
    let newList=this.state.list.filter(item=>item.id !==id);
    this.setState({list:newList});
    this.setState({data:res.data});
    }).catch(e=>{
        console.log(e);
    })
   
  }



  render(){

    let users=this.state.list.map((item)=>{ 
        return(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td><Button variant='danger' onClick={()=>this.handleDelete(item.id)}>DELETE</Button></td>
                <td><Link to={`/edit/${item.id}`}>
                <Button variant='primary' type='button'>EDIT</Button>
                </Link>
                </td>
            </tr>
            
        )
   
    })

    return(
        
    <div>
        <div className='container col-8 bg-info mt-5'>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Sno</th>
                <th>Email</th>
                <th>Name</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {users}
        </tbody>
        </Table>
        </div>

        <div>
           <h3> {this.state.data}</h3>
        </div>
    </div>

    )
  }
}

export default SeeEmployees;