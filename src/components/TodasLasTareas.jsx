import { useState, useEffect } from "react";
import Tareas from "./Tareas";


export default function TodasLasTareas() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
 
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  function handleInputChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    const oldTodos = [...todos];
    oldTodos.unshift(newTodo);

    setTodos(oldTodos);
    setTitle("");
  }

  function handleDelete(id) {
    const tempTodos = todos.filter((item) => item.id !== id);

    setTodos([...tempTodos]);
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos([...temp]);
  }

  function handleCheckboxChange(id, status) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.completed = status;

    console.log("Hola");
    setTodos([...temp]);
  }

  return (
    <div className="todoContainer">
      <h1>Bienvenidos!</h1>
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input onChange={handleInputChange} value={title} className="todoInput"/>
        <input value="Nueva tarea" type={"submit"} className="buttonCreate" />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Tareas
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onComplete={handleCheckboxChange}
          />
        ))}
      </div>
    </div>
  );
}