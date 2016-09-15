import React, { Component, PropTypes } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import './articleList.css'
import { Link } from 'react-router'


class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired,
        loading: PropTypes.bool,
    }

    static contextTypes = {
        user: PropTypes.string,
        router: PropTypes.object
    }

    render() {
        const { articles, loading } = this.props
        if (loading) return <h1>Loading...</h1>

        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id} style = {{color: this.context.router.isActive(`/articles/${articleObject.id}`) ? 'red' : 'black'}}>
                <Link to = {`/articles/${articleObject.id}`}>{articleObject.title}</Link>
            </li>)
        return (
            <div>
                {this.context.user}
                <CSSTransition component="ul" transitionName="article" transitionLeaveTimeout ={1000} transitionEnterTimeout = {500}>
                    {articleItems}
                </CSSTransition>
            </div>
        )
    }
}

export default ArticleList