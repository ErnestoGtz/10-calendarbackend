const {response} = require('express');


const newUser = (req,res = response) =>{
    
    const {name,email,password} = req.body;
    
    if(name.length < 5){
        return res.status(400).json({
            ok:true,
            msg:'El nombre debe de ser de 5 letras',
        });
    }
    
    res.json({
        ok:true,
        msg:'registo',
        name,
        email,
        password
    });
}

const login = (req,res = response)=>{
    
    const {email,password} = req.body;
    
    res.json({
            ok:true,
            msg:'login',
            email,password
        });
    
}

const renew = (req,res = response)=>{
    res.json({
        ok:true,
        msg:'renew'
    });
}

module.exports = {
    newUser,
    login,
    renew
}