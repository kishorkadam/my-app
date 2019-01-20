import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        value: this.props.counter.value
    };

    handleIncrement() {
        this.setState({ value: this.state.value + 1 });
    }

    handleDecrement() {
        this.setState({ value: this.state.value - 1 });
    }

    getBadgeClasses() {
        let classes = 'badge jumbo m-5 badge-'
        classes += this.state.value % 2 === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        return this.state.value === 0 ? 'Zero' : this.state.value;
    }

    render() {
        return (
            <div>
                {this.props.children}

                <span className={this.getBadgeClasses()} >{this.formatCount()}</span >
                <button id='btnAdd' onClick={() => this.handleIncrement(this.state.value)} className='btn btn-secondary btn-sm m-3'>Increment</button>
                <button id='btnDecrement' onClick={() => this.handleDecrement(this.state.value)} className='btn btn-secondary btn-sm m-3'>Decrement</button>
                <button id='btnDelete' onClick={() => this.props.onDelete(this.props.counter)} className='btn btn-danger btn-sm m-3'>Delete</button>

            </div >
        );
    }
}
