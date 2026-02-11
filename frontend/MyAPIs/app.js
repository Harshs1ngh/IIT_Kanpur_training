const express = require('express')
const EmpModel =  require("./models/empModel")
const errHandler =  require('./middlewares/errorHandler')
const authorize = require('./middlewares/authorize');
const auth = require('./middlewares/auth')
const cors =  require('cors')
const jwt = require("jsonwebtoken");
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
     origin:"http://localhost:5173",
     methods:["GET" , "POST" , "PATCH" ,"DELETE" , "PUT"],
     credentials: true   // REQUIRED for cookies
  }
))

// Login
app.post('/api/login',async (req,res)=>{
  const {mail , pwd} = req.body   

        const user = await EmpModel.findOne({EmpEmail:mail})         
        
        if(!user || !(pwd === user.EmpPassword))
        { 
          return res.status(404).json({
                  success:false,
                  statusCode:404,
                  message : "Invalid User ID or Password... ",
                  data:user
                  })
        } 

         // console.log("JWT SECRET:", process.env.JWT_SECRET);
         // JWT token
          const token = jwt.sign(
            { id: user._id, role: user.role },
                  process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
        
          res.cookie("token", token, {
            httpOnly: true,
            secure: false,  // https - true
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 365
          });
        
        if(user && (pwd === user.EmpPassword))
          {
            
            return res.status(200).json({
                  success:true,
                  statusCode:200,
                  message : "User Login successfully...",
                  data:user
                  }) 
          }         
})

app.get("/api/me", auth, async (req, res) => {
  const user = await EmpModel.findById(req.user.id)    

  res.status(200).json({
    success: true,
    message: "User fetched successfully",
    data: user
  });
});

app.post("/api/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false   // true in production
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully"
  });
});


const userRoutes =  require('./routes/userRoutes')
app.use('/api/user', auth, authorize("user"),userRoutes)

const adminRoutes =  require('./routes/adminRoutes');

app.use('/api/admin', auth, authorize("admin") ,adminRoutes)


// Error Handler Middleware
app.use(errHandler)

module.exports = app