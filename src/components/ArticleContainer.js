import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Article from './Article'
import { loadArticleById } from '../AC/articles'

class ArticleContainer extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    };

    componentDidMount() {
        const { article, articleId, loadArticleById } = this.props
        if (!article || !article.loaded) loadArticleById(articleId)
    }

    render() {
        return <Article article = {this.props.article} isOpen = {true} />
    }
}

export default connect((state, props) => ({
    article: state.articles.getIn(['entities', props.articleId])
}), { loadArticleById })(ArticleContainer)