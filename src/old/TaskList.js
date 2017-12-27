import React, { Component } from 'react';
import AddTaskButton from './AddTaskButton';

class TaskList extends Component {
    addTask() {
        console.log('oto');
    }
    render() {
        return (
            <div classID="TaskList">
                <AddTaskButton clickHandler={this.addTask}> </AddTaskButton>
            </div>
        );
    }
}

export default TaskList;