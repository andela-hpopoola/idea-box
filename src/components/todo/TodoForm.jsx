import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoForm extends Component {
  state = {
    todo: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { todo } = this.state;
    todo && this.props.submitTodo(this.state.todo);
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <input
          onChange={this.handleChange}
          type="text"
          name="todo"
          value={this.state.todo}
          placeholder="...todo"
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  submitTodo: PropTypes.func.isRequired
};

export default TodoForm;
