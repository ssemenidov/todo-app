import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import "./App.css";
import Todo from "./componets/Todo";
import db from "./firebase";
import firebase from "firebase";
function App() {
  const [todos, setTodos] = useState([{}]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snaphot) => {
        setTodos(
          snaphot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
        );
      });
  }, []);
  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      title: input,
      checked: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
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
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
