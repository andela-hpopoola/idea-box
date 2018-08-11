import React from "react";
import PropTypes from "prop-types";

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
    >
      <span onClick={() => props.toggleCompletedTodo(props.todo.id)}>
        {props.todo.task}
      </span>{" "}
      {props.todo.completed && (
        <span onClick={() => props.deleteTodo(props.todo.id)}>X Delete</span>
      )}
    </div>
  );
};

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  toggleCompletedTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired
  })
};

export default Todo;
