const { PrismaClient} = require('@prisma/client');
const cors=require('@fastify/cors')
const prisma = new PrismaClient();
const fastify =require('fastify')({ logger: true });
const bodyParser=require('body-parser');
const PORT=4000;
const employeeDirectory=require('./employeesDb');

fastify.register(cors,{
    origin:true
})

// server listening PORT
fastify.listen(PORT,()=>{
    console.log('server is listening on PORT '+PORT);
})

// POST method for adding an employee to user table 
fastify.post('/addEmployees',employeeDirectory.addEmployees);

//GET method for getting allEmployees from user table
fastify.get('/allEmployees',employeeDirectory.allEmployees);

// GET method for getting an employee via its id from user table
fastify.get('/idEmployees/:id',employeeDirectory.idEmployees);

// PUT method for updating employee details from user table
fastify.put('/idEmployees/:id',employeeDirectory.updateEmployees);

// DELETE method for deleting an employee via its id from user table
fastify.delete('/idEmployees/:id',employeeDirectory.deleteEmployees);