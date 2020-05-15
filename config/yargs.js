const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea po hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una Tarea', {
        descripcion
    })

.help()
    .argv;

module.exports = {
    argv
}