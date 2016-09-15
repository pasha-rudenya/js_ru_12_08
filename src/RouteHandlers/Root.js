import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Link } from 'react-router'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <ul>
                        <li><Link to="/articles" activeStyle = {{color: 'red'}} activeClassName = "active">articles</Link></li>
                        <li><Link to="/filters" activeStyle = {{color: 'red'}} activeClassName = "active">filters</Link></li>
                        <li><Link to="/counter" activeStyle = {{color: 'red'}} activeClassName = "active">counter</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Root