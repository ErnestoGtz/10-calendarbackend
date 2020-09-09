const {response} = require('express');
const Evento = require('../models/Evento');

//Obtener eventos
const getEvents = (req,res = response)=>{
    return res.json({
        ok:true,
        msg:'getEvents'
    });
}

//Crear un evento
const addEvent = async(req,res = response)=> {

    //verificar que tenga el evento
    const evento = new Evento(req.body);

    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();

        res.json({
            ok:true,
            evento:eventoGuardado
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }
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