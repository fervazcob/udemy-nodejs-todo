const descripcion = {
    alias: "d",
    demand: true,
  },
  completada = {
    alias: "c",
    default: true,
  };
const argv = require("yargs")
  .command("crear", "Crea una nueva tarea", {
    descripcion,
  })
  .command("actualizar", "Actualiza una tarea", {
    descripcion,
    completada,
  })
  .command("borrar", "Elimina una tarea de la base de datos", {
    ...descripcion,
  })
  .help().argv;

module.exports = argv;
