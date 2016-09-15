import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentRoot extends Component {
    static propTypes = {

        //From redux connect:

    };

    render() {
        return (
            <div>
                <h1>Comments pagination</h1>
                {this.props.children}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentRoot