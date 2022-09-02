import React, { Component } from 'react';
import './Snake.css';

class Cell extends Component {
    render() {
        let type;
        if (this.props.value == 0) type="SnakeEmptyCell";
        if (this.props.value == 1) type="SnakeCell";
        if (this.props.value == 2) type="SnakeAppleCell";
        return (
            <div className={type}>
            </div>
        );
    }
}

export default Cell;
