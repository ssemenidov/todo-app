import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import Todo from "./componets/Todo";
import db from "./firebase";
function App() {
  const [todos, setTodos] = useState([{}]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos").onSnapshot((snaphot) => {
      console.log(snaphot.docs.map((doc) => doc.data()));
      setTodos(snaphot.docs.map((doc) => doc.data()));
    });
  }, []);
  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      title: input,
      checked: false,
    });
    setInput("");
  };
  return (
    <div className="App">
      <h1>Todos</h1>
      <form action="">
        <TextField
          id="standard-basic"
          type="text"
          label="Write a Todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />{" "}
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add ToDo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo.title} />
        ))}
      </ul>
    </div>
  );
}

export default App;
