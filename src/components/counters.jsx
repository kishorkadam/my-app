import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    state = {
        Counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }

    handleDelete = counter => {
        const counters = this.state.Counters.filter(c => c.id !== counter.id);
        // this.setState(counters);
    }

    render() {
        return (
            <div>
                <button className="primary">    </button>
                {this.state.Counters.map(counter => (
                    <Counter
                        key={counter.id}
                        value={counter.value}
                        selected={true}
                        onDelete={this.handleDelete(counter)}
                        counter={counter}>
                        <h4>Counter Number #{counter.id}</h4>
                    </Counter>
                ))}
            </div>
        );
    }
}
export default Counters;    
