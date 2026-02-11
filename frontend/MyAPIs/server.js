require("./config/env")
const app = require('./app')
const connectDB = require('./config/db')

const HOST = process.env.HOST
const PORT = process.env.PORT

connectDB()

app.listen(PORT , HOST , (err)=>{

    if(err)
        console.log(err);
    else
        console.log(`Server running at http://${HOST}:${PORT}` );      
        

})




