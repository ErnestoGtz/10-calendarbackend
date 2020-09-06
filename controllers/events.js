const {response} = require('express');

//Obtener eventos
const getEvents = (req,res = response)=>{
    return res.json({
        ok:true,
        msg:'getEvents'
    });
}

//Crear un evento
const addEvent = (req,res)=> {

    //verificar que tenga el evento
    console.log(req.body);

    return res.json({
        ok:true,
        msg:'addEvent'
    });
}

//Actualizar evento
const updateEvent = (req,res)=>{
    return res.json({
        ok:true,
        msg:'updateEvent'
    });
}

//Eliminar evento
const deleteEvent = (req,res) => {
    return res.json({
        ok:true,
        msg:'deleteEvent'
    });
}

module.exports = {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
}