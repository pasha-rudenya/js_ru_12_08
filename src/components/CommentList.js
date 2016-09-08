import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentCount from './CommentCount'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'
import { loadComments } from '../AC/comments'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }


    componentDidMount() {
        const { loaded, loading, loadComments, article, savedComments } = this.props
        if (!loaded && !loading) loadComments(article.id)
   }
/*
    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    componentWillReceiveProps() {
        console.log('---', 'updating')
    }
*/

    render() {
        const { article, isOpen, toggleOpen, savedComments, loading } = this.props
        console.log(savedComments)

        if(loading) return <h1>Loading...</h1>

        if (!savedComments || !savedComments.size) return <div>No comments yet <NewCommentForm articleId = {article.id}/></div>
        const toggleButton = <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments.
            <CommentCount count = {savedComments.size}/>
        </a>

        if (!isOpen) return <div>{toggleButton}</div>

        const commentItems = savedComments.map(commentId => <li key = {commentId}><Comment commentId = {commentId} /></li>)

        return (
            <div>
                {toggleButton}
                <ul>{commentItems}</ul>
                <NewCommentForm articleId = {article.id} />
            </div>
        )
    }
}

export default connect((state) => {
    const { comments } = state

    const savedComments = comments.get('entities')
    const loading = comments.get('loading')
    const loaded = comments.get('loaded')

    return { loading, loaded, savedComments }
}, {
    loadComments: loadComments
})(toggleOpen(CommentList))