const userDefault = (req,res)=>{
    const r = `<hr color='aqua' size=10>
                <h1 align='center'> User Default Page </h1>
                <hr color='aqua' size=10>
            `
    res.send(r)
}

const userHome=(req,res)=>{
    const r = `<hr color='aqua' size=10>
                <h1 align='center'> User Home Page </h1>
                <hr color='aqua' size=10>
            `
    res.send(r)
}

const formHandler = (req,res)=>{
    console.log(req.body);    
    const { unm , pwd , mail } = req.body; 
    console.log("Name :"+ unm);
    console.log("Password :"+ pwd);
    console.log("Email :"+ mail);
       
    const r = `<hr color='aqua' size=10>
                <h1 align='center'> User Form Handler Page </h1>
                <hr color='aqua' size=10>
            `
    res.send(r)
}

module.exports = { userDefault , userHome , formHandler }