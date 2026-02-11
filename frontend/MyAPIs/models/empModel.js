const mongoose =  require('mongoose')

const EmpSchema = new  mongoose.Schema({
  
  EmpName:      {type:String , required:true},
  EmpEmail:     {type:String , required:true},
  EmpPassword : {type:String , required:true},
  EmpDOB :      {type:Date ,   required : true},
  EmpReg :      {type:Date ,   required : true , default:Date.now},
  isActive :    {type:Boolean ,required:true , default:true},
  role :        {type:String , enum:['user' , 'admin'] , default:'user' }

})

const EmpModel = mongoose.model("EmployeeDetails",EmpSchema)
module.exports = EmpModel