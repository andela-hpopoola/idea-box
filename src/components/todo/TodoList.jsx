import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="item-list">
      {props.todos.map(todo => (
        <Todo
          deleteTodo={props.deleteTodo}
          toggleCompletedTodo={props.toggleCompletedTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  toggleCompletedTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    complete: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired
  })
};

export default TodoList;
