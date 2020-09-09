const {response} = require('express');
const Evento = require('../models/Evento');

//Obtener eventos
const getEvents = async(req,res = response)=>{
    
    const eventos = await Evento.find().populate('user','name');
   
    return res.json({
        ok:true,
        eventos
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
const updateEvent = async(req,res)=>{

    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById(eventoId);
        if(!evento){
            return res.status(404).json({
                ok:false,
                msg:'Evento no existe por ese id'
            });
        }

        if(evento.user.toString() !== uid ){
            return res.status(401).json({
                ok:false,
                msg:'No tiene privilegio de editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user:uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId,nuevoEvento,{new:true});

        res.json({
            ok:true,
            evento:eventoActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        });
    }

}

//Eliminar evento
const deleteEvent = async(req,res) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById(eventoId);
        if(!evento){
            return res.status(404).json({
                ok:false,
                msg:'Evento no existe por ese id'
            });
        }

        if(evento.user.toString() !== uid ){
            return res.status(401).json({
                ok:false,
                msg:'No tiene privilegio de eliminar este evento'
            });
        }

        const eventoEliminado = await Evento.findByIdAndDelete(eventoId);

        return res.json({
            ok:true,
            eventoEliminado
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        });
    }

    
}

module.exports = {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
}