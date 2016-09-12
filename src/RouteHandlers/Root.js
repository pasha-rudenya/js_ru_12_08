import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Link } from 'react-router'

class Root extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', this.props)
        return (
            <Provider store = {store}>
                <div>
                    <ul>
                        <li><Link to="/articles">articles</Link></li>
                        <li><Link to="/filters">filters</Link></li>
                        <li><Link to="/counter">counter</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Root