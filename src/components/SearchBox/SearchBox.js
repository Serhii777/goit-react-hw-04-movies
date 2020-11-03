import React, { Component } from "react";
import './SearchBox.css'

export default class SearchBox extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="searchbox-form">
        <input
          text="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="searchbox-input"
        />
        <button type="submit" className="searchbox-button">Search</button>
      </form>
    );
  }
}
