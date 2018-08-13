import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoForm extends Component {
  state = {
    todo: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { todo } = this.state;
    const success = todo && this.props.submitTodo(this.state.todo);
    console.log("success :", success);
  };

  handleKeyPress = event => {
    if (event.key == "Enter") {
      event.preventDefault();
      this.handleSubmit(event);
    }
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <div className="input-group my-3">
          <input
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            type="text"
            name="todo"
            value={this.props.value || this.state.todo}
            className="form-control form-control-sm"
            placeholder="New Item..."
            aria-label="New Item"
          />
          <div className="input-group-append">
            <button
              className="btn btn-success btn-sm"
              type="button"
              onClick={this.handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

TodoForm.propTypes = {
  submitTodo: PropTypes.func.isRequired
};

export default TodoForm;
