import React, { Component, PropTypes } from 'react'
import ArticleListContainer from '../components/ArticleListContainer'

class ArticlesPage extends Component {
    static propTypes = {

    };

    state = {
        user: ''
    }

    handleChange = ev => {
        this.setState({
            user: ev.target.value
        })
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.user
        }
    }

    render() {
        return (
            <div>
                <input value = {this.state.user} onChange = {this.handleChange} />
                <div className = "left-bar">
                    <ArticleListContainer />
                </div>
                <div className = "right-bar">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ArticlesPage