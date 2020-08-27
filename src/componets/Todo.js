import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary={props.todo} />
      </ListItem>
    </List>
  );
}

export default Todo;
