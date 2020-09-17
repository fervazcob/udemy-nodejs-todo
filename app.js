const argv = require("./configs/yargs");

const { crear, listar, actualizar, borrar } = require("./todo/todo");

let cmd = argv._[0];

switch (cmd) {
  case "crear":
    crear(argv.descripcion);
    break;
  case "listar":
    listar();
    break;
  case "actualizar":
    actualizar(argv.descripcion, argv.completada);
    break;
  case "borrar":
    borrar(argv.descripcion);
    break;
  default:
    // console.log("No se reconoce el comando");
    break;
}
