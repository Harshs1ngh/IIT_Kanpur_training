const EmpModel =  require("../models/empModel")
const createUser = async (req , res , next)=>
{
    try
    {
        const user = await EmpModel.create({
        EmpName:      req.body.unm,
        EmpPassword : req.body.pwd,
        EmpEmail:     req.body.mail,
        EmpDOB :      req.body.dob
        })

        return res.status(201).json({
            success:true,
            statusCode : 201, 
            message:"User created successfully...",
            data:user
        })
    }
    catch(error)
    {
        next(error);        
    }     
}

const getUsers = async (req, res ,next)=>{

    try{
    const users = await EmpModel.find()
    return res.status(200).json({
        success:true,
        statusCode:200,
        message : "User fetched successfully...",
        data:users
    })
    }
    catch(error)
    {
        next(error);        
    }
}


const getUserById = async(req, res, next )=>{

    try{

        const user = await EmpModel.findById(req.params.id)         
        
        if(user)
        {
           return res.status(200).json({
            success:true,
            statusCode:200,
            message : "User fetched successfully...",
            data:user
            })
        }
        else
        {
            return res.status(404).json({
            success:true,
            statusCode:404,
            message : "User Not found ",
            data:user
            })
        }
    }
    catch(error)
    {
        next(error);        
    }
}

const updateUser = async (req, res ,next)=>{

    try{
        const user = await EmpModel.findByIdAndUpdate(req.params.id,
        {           
            EmpPassword : req.body.pwd,
            EmpEmail:     req.body.mail,           

        },
        {
            new:true , 
            runValidators:true
        })
        
        if(!user)
        {
            return res.status(404).json({
            success:false,
            statusCode:404,
            message : "User not found",
            data:user})

        }

        return res.status(200).json({
        success:true,
        statusCode:200,
        message : "User updated successfully...",
        data:user
    })
    }
    catch(error)
    {
        next(error);        
    }
}
const deleteuser = async (req, res ,next)=>
{
    try{
        const user = await EmpModel.findByIdAndDelete(req.params.id)       
        
        if(!user)
        {
            return res.status(404).json({
            success:false,
            statusCode:404,
            message : "User not found",
            data:user})

        }

        return res.status(200).json({
        success:true,
        statusCode:200,
        message : "User deleted successfully...",
        data:user
    })
    }
    catch(error)
    {
        next(error);        
    }
}
module.exports = {                 
                createUser,
                getUsers,
                getUserById,
                updateUser,
                deleteuser
             }