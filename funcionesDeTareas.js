const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./tareas.json','utf-8'))


const moduloTareas = {
     leerJSON : () => JSON.parse(fs.readFileSync('./tareas.json', 'utf-8')),

    listar : () => {
        
      tareas.forEach((tareas, i) => {
        console.log(`${i+1} - ${tareas.titulo} - estado : ${tareas.estado}`)
      });
    },
    escribirJSON : tareas => {
       let tareasStringif = JSON.stringify(tareas,null,2);
       fs.writeFileSync('./tareas.json',tareasStringif, 'utf-8')
    },
    guardarTarea: tarea => {
       
        tareas.push(tarea)
        moduloTareas.escribirJSON(tarea)
    },
    filtrarPorEstado: estado => {
       let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado);
       tareas.forEach((tareas, i) => {
        console.log(`${i+1} - ${tareas.titulo} - estado : ${tareas.estado}`)
      });
        moduloTareas.listar(tareasFiltradas)
    }
}

module.exports = moduloTareas;