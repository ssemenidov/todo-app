import React from "react";
import db from "../firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  IconButton,
  Modal,
} from "@material-ui/core";
function Todo(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteTodo = (event) => {
    db.collection("todos").doc(props.todo.id).delete();
  };
  return (
    <>
      <Modal open={open}>
        <div>
          <h1>modal</h1>
          <IconButton color="primary" component="span" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText primary={props.todo.title} />
          <IconButton color="primary" component="span" onClick={handleOpen}>
            <EditIcon />
          </IconButton>
          <IconButton color="primary" component="span" onClick={deleteTodo}>
            <DeleteForeverIcon />
          </IconButton>
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
