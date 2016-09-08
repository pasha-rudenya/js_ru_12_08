import { ADD_COMMENT, LOAD_COMMENTS } from '../constants'


export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            comment, articleId
        },
        generateRandomId: true
    }
}

export function loadComments(articleId) {
    return {
        type: LOAD_COMMENTS,
        payload: { articleId },
        callAPI: `/api/comment/?article=${articleId}`
    }
}