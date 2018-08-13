import React, { Component } from "react";
import todos from "./../db/todos";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TodoList from "./todo/TodoList";
import TodoForm from "./todo/TodoForm";
import Alert from "./common/Alert";
import Button from "./common/Button";
import Header from "./common/Header";
import "./App.css";
import AppContent from "./common/AppContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos, error: "", completed: 0 };
  }

  clearMessage = () => this.setState({ error: "" });

  addTodo = task => {
    this.clearMessage();
    const { todos } = this.state;
    const taskExists = todos.some(todo => todo.task === task);
    if (taskExists) {
      this.setState({ error: "Task Exists" });
      return false;
    } else {
      this.setState({
        todos: [
          ...this.state.todos,
          { task, completed: false, id: Date.now().toString() }
        ]
      });
    }
    return true;
  };

  toggleCompletedTodo = id => {
    let todos = this.state.todos.slice();
    let completed = this.state.completed;
    todos = todos.map(todo => {
      if (todo.id === id) {
        completed = todo.completed ? completed - 1 : completed + 1;
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos, completed: completed });
  };

  handleDeleteTodo = id => {
    // return a shallow copy of the array
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  clearCompletedTodos = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <Alert message={this.state.error} />
        <AppContent>
          <TodoList
            toggleCompletedTodo={this.toggleCompletedTodo}
            deleteTodo={this.handleDeleteTodo}
            todos={this.state.todos}
          />
          <TodoForm value={this.state.todo} submitTodo={this.addTodo} />

          {!!this.state.completed && (
            <Button
              name="Clear Completed"
              className="btn-outline-primary btn-footer"
              onClick={this.clearCompletedTodos}
            />
          )}
        </AppContent>
      </div>
    );
  }
}

export default App;
