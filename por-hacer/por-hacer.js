const fs = require('fs');
const { resolve } = require('path');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('Error al grabar', err);
    })
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    }catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}
const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if (index >= 0 ){
        if (completado === "false") {
            listadoPorHacer[index].completado = false;
            guardarDB();
            return true;
        }
        if (completado === "true"){
            listadoPorHacer[index].completado = true;
            guardarDB();
            return true;
        }
    } else return false;
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion);

    if ( listadoPorHacer.length === nuevoListado.length) return false;
    else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}
const filtrar = (estado) => {
    cargarDB();
    let booleano = /true/.test(estado);
    let completados = listadoPorHacer.filter(filtro => {
        filtro.completado === booleano;
    });
    return completados;
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    filtrar
}