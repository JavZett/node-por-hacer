const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .command('filtrar', 'Muestra en conosola la tareas filtradas', {
        completado
    })
    .help()
    .argv

module.exports = {
    argv
}