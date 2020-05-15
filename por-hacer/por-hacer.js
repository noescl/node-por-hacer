const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer) //Convierte Obj->json
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
        console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    console.log(porHacer);
    listadoPorHacer.push(porHacer);
    guardaDB();
    return porHacer;
}

const getListado = () => {
    cargarDB()
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    /*    
        let index = listadoPorHacer.findIndex(tarea => {
            tarea.descripcion == descripcion;
        })
    */
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);

    if (nuevoListado.length == listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardaDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}