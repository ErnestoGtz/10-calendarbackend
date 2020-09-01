const {response} = require('express');


const newUser = (req,res = response) =>{
    
    res.json({
        ok:true,
        msg:'registo',
        user:req.body
    })
}

const login = (req,res)=>{
        res.json({
            ok:true,
            msg:'login'
        });
    
}

const renew = (req,res)=>{
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