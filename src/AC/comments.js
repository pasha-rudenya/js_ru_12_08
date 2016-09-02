import { ADD_COMMENT } from '../constants'

export function addComment(item) {
    return {
        type: ADD_COMMENT,
        payload: { item }
    }
}