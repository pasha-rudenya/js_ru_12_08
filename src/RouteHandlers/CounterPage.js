import React, { Component, PropTypes } from 'react'
import Counter from '../components/Counter'

class CounterPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Counter Page</h2>
                <Counter />
            </div>
        )
    }
}

export default CounterPage