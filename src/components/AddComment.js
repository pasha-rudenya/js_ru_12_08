import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comments'
import { connect } from 'react-redux'

class AddComment extends Component {
    render() {
        return (
            <form onSubmit= { this.handleSubmit.bind(this) }>
                <label>Author: <input type="text" name="author" ref="author" /></label>
                <label>Text: <input type="text" name="text" ref="text" /></label>
                <button type="submit">Comment</button>
            </form>
        )
    }

    handleSubmit(ev) {
        if (ev) ev.preventDefault()

        this.props.addComment({
            id: '',
            user: this.refs.author.value,
            text: this.refs.text.value
        })
    }
}

export default connect(null, { addComment })(AddComment)