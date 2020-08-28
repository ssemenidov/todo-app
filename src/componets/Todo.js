import React from "react";
import db from "../firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  IconButton,
  Modal,
} from "@material-ui/core";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 3),
  },
}));
function Todo(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState(props.todo.title);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const deleteTodo = () => {
    db.collection("todos").doc(props.todo.id).delete();
  };
  const updateTodo = () => {
    handleClose();
    db.collection("todos").doc(props.todo.id).update({
      title: input,
    });
  };
  const updateCheck = () => {
    db.collection("todos").doc(props.todo.id).update({
      check: !props.todo.check,
    });
  };
  return (
    <>
      <Modal open={open}>
        <div style={modalStyle} className={classes.paper}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton color="primary" component="span" onClick={updateTodo}>
            <DoneIcon />
          </IconButton>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemIcon>
            <Checkbox checked={props.todo.check} onClick={updateCheck} />
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
