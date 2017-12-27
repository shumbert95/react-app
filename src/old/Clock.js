import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    render() {
        return(
            <div>
                <p className="App-clock">
                    This time is {this.state.time}.
                </p>
            </div>
        );
    }
}

export default Clock;