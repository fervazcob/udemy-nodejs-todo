const fs = require("fs").promises;
const colors = require("colors/safe");

let todoList;

const guardarDB = () => {
  let data = JSON.stringify(todoList);
  fs.writeFile("db/data.json", data, (err) => {
    if (err) {
      console.log(colors.red(`No se pudo guardar la información: ${err}`));
      return;
    }
    console.log(colors.green(`Se guardo exitosamente la tarea`));
  });
};

const getTodos = () => {
  try {
    todoList = require("../db/data.json");
  } catch (error) {
    todoList = [];
  }
};

const crear = (descripcion) => {
  const todo = {
    descripcion,
    completado: false,
  };

  getTodos();

  todoList.push(todo);

  console.log(colors.green(`La tarea "${descripcion}" se creó con exito`));

  guardarDB();
};

const listar = () => {
  getTodos();

  todoList.forEach((el) => {
    console.log(
      `Tarea: ${colors.green(el.descripcion)} - Status: ${colors.yellow(
        el.completado
      )}`
    );
  });
};

const actualizar = (descripcion, completado = true) => {
  getTodos();

  let index = todoList.findIndex((todo) => todo.descripcion === descripcion);

  if (index >= 0) {
    todoList[index].completado = completado;
    guardarDB();
    console.log(colors.green("Se actualizó exitosamente"));
  } else {
    console.log(colors.red("No se pudo actualizar"));
  }
};

const borrar = (descripcion) => {
  getTodos();

  let index = todoList.findIndex((todo) => todo.descripcion === descripcion);

  if (index >= 0) {
    let elBorrado = todoList.splice(index, 1);
    guardarDB();
    console.log(
      colors.green(`La tarea "${elBorrado[0].descripcion}" fue eliminada`)
    );
  } else {
    console.log(colors.red("No se encontró la tarea a eliminar"));
  }
};

module.exports = {
  crear,
  listar,
  actualizar,
  borrar,
};
