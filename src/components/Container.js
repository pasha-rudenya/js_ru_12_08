import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import JqueryComponent from './JqueryComponent'
import Counter from './Counter'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import Filters from './Filters'

class Container extends Component {
    render() {
        return (
            <div>
                <Counter />
                <Filters />
                <ArticleList articles = {this.props.articles} />
                <JqueryComponent items = {this.props.articles} ref={this.getJQ}/>
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
//        console.log('---', findDOMNode(ref))
    }
}

export default connect((state) => {
    const { articles, filters } = state
    const selected = filters.get('selected')
    const dates = filters.get('dates')

    const filteredArticles = articles.valueSeq()
        .filter(article => !selected.length || selected.includes(article.id))
        .filter(article => {
            const publisingDate = Date.parse(article.date)
            return (!dates.from || dates.from < publisingDate) && (!dates.to || dates.to > publisingDate)
        })
    return { articles: filteredArticles }
})(Container)