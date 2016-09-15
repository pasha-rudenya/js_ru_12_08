import React, { Component, PropTypes } from 'react'

class ArticleNotFound extends Component {
    static propTypes = {

    };

    render() {
        const { id } = this.props.location.query
        return (
            <div>
                <h1>Sorry, article with id: {id} not found</h1>
            </div>
        )
    }
}

export default ArticleNotFound