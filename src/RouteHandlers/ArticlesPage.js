import React, { Component, PropTypes } from 'react'
import ArticleListContainer from '../components/ArticleListContainer'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
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