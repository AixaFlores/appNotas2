const process = require('process');
const tareas = require('./funcionesDeTareas');


switch (process.argv[2]) {
    case "listar":
        tareas.listar();
        break;
    case "crear":
        let tarea = {
            titulo: process.argv[3],
            estado: "pendiente"
        }
        tareas.guardarTarea(tarea);
        break;
    case "filtrar":
        tareas.filtrarPorEstado(process.argv[3])
        break;
    case undefined:
        console.log("Atencion, tenes que pasar una accion");
        break;
    default:
        console.log("No entiendo lo que queres hacer");
        break;
}