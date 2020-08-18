const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
const { filtrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('Crear por hacer');
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer'.red);
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('==========================='.green);
        }
        break;
    case 'filtrar':
        let nuevoArray = filtrar(argv.completado);
        nuevoArray.map(tarea => console.log(`${tarea.descripcion}: ` + colors.yellow(tarea.completado)));
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer'.red);
        let actulizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actulizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando desconocido');
}