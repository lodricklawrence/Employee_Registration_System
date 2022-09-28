const { PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const employeeController={
     // addEmployee in user table using ORM(prisma)
    addEmployees:async (req,res)=>{
        const users=await prisma.user.findMany({
            where:{
                email:req.body.email
            }
        })
        if(users==false){
            if(req.body.name && req.body.email){
                try{
                    const newUser = await prisma.user.create({
                        data: {
                          email: req.body.email,
                          name: req.body.name,
                        },
                     });
            
                    //  res.send({newUser});
                    res.send('Registration is successfull')
            
                }catch(e){
                    console.log(e);
                }
            
            }else{
                res.send('you cannot register with empty fields');
            }
        }
        else {
          res.send('email ready in use');  
        }
    },

    // get allemployees from user table using ORM(prisma)
    allEmployees:async (req,res)=>{
        try{
            const allUser=await prisma.user.findMany();
            res.send(allUser);
        }catch(e){
            console.log(e);
        }
    
    },

// get employee from user table via id param using ORM(prisma)
    idEmployees:async (req,res)=>{
        const empId=Number(req.params.id);
        const fetchId=await prisma.user.findUnique({
            where:{
                id:empId
            }
        })
        if(fetchId){
            try{
                const userId=await prisma.user.findUnique({
                   where:{
                    id:empId
                   } 
                })
                res.send(userId);
    
            }catch(e){
                console.log(e);
            }
            
        }else{
            res.send('Unidentified Id entered');
        }
    },

// update employee from user table via id params using ORM(prisma)
    updateEmployees:async (req,res)=>{
        const employeeId=Number(req.params.id);
        const fetch=await prisma.user.findUnique({
            where:{
                id:employeeId
            }
        })
        if(fetch){
            if(req.body.email && req.body.name){
            try{
                const updateEmp=await prisma.user.update({
                    where:{
                        id:employeeId
                    },
    
                    data:{
                        email:req.body.email,
                        name:req.body.name
                    }
                })
    
                
                res.send('data updated successfully');
            }catch(e){
                console.log(e)
            }
        }else{
            res.send('empty fields must be filled for update');
        }
    }else{
        res.send('Unidentified Id for Update');
    }
},

// delete employee from user table via id param using ORM(prisma)
    deleteEmployees:async (req,res)=>{
        const idEmployee=Number(req.params.id);
        const fetchUser=await prisma.user.findUnique({
            where:{
                id:idEmployee
            } 
        })
    
        if(fetchUser){
            try {
                const deleteEmp=await prisma.user.delete({
                    where:{
                        id:idEmployee
                    }
                })
                // res.send({deleteEmp});
                res.send('data deleted successfully');
            } catch (e) {
                console.log(e)
            }
        }else{
            res.send('Unidentified id to delete');
        }
    }
}

module.exports=employeeController;