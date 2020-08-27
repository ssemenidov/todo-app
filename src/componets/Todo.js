import React from "react";
import db from "../firebase";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
function Todo(props) {
  const deleteTodo = (event) => {
    db.collection("todos").doc(props.todo.id).delete();
  };
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary={props.todo.title} />
        <IconButton color="primary" component="span" onClick={deleteTodo}>
          <DeleteForeverIcon />
        </IconButton>
      </ListItem>
    </List>
  );
}

export default Todo;
