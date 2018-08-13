import React from "react";
import PropTypes from "prop-types";

const Todo = props => {
  const completed = props.todo.completed;
  return (
    <div className={completed ? "item item-completed" : "item"}>
      <div
        onClick={() => props.toggleCompletedTodo(props.todo.id)}
        className="pretty p-thick"
      >
        <input type="checkbox" />
        <div className="state">
          <label>&nbsp; {props.todo.task} &nbsp;</label>
        </div>
      </div>
      {completed && (
        <div
          onClick={() => props.deleteTodo(props.todo.id)}
          className="delete-item pull-right"
        >
          x
        </div>
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
