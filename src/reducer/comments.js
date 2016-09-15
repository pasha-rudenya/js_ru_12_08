import { LOAD_COMMENTS_FOR_PAGE, ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import { normalizedComments } from '../fixtures'
import { Record, List, OrderedMap, Map } from 'immutable'
import { arrayToMap } from '../utils'


const CommentModel = new Record({
    id: null,
    user: null,
    text: ''
})

const defaultState = new Map({
    entities: new OrderedMap({})
})

export default (state = defaultState, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
//            return comments.push({...payload.comment, id: action.randomId})
            return state.update('entities', entities => entities.set(action.randomId, new CommentModel(payload.comment)))

        case LOAD_COMMENTS + SUCCESS:
            return state.update('entities', entities => entities.merge(arrayToMap(response, CommentModel)))

        case LOAD_COMMENTS_FOR_PAGE + START:
            return state.setIn(['pagination', payload.page], new List([]))

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return state
                .update('entities', entities => entities.merge(arrayToMap(response.records, CommentModel)))
                .setIn(['pagination', payload.page], new List(response.records.map(record => record.id)))
                .set('total', response.total)

    }

    return state
}