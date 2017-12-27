import React, { Component } from 'react';

class AddTaskButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.clickHandler();
    }
    render() {
        return (
          <button onClick={this.handleClick}>Add Task</button>
        );
    }
}

export default AddTaskButton;