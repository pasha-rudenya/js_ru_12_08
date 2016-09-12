import React, { Component, PropTypes } from 'react'
import ArticleContainer from '../components/ArticleContainer'

class ArticlePage extends Component {
    static propTypes = {

    };

    render() {
        const { id } = this.props.params
        return (
            <div>
                <ArticleContainer articleId = {id} />
            </div>
        )
    }
}

export default ArticlePage