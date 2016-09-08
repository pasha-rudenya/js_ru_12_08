import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS} from '../constants'
import { normalizedComments } from '../fixtures'
import { Record, List, Map, OrderedMap } from 'immutable'
import { arrayToMap } from '../utils'

export const CommentModel = new Record({
    id: null,
    user: null,
    text: ''
})

const defaultState = new Map({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

const immutableComments = new List(normalizedComments.map(comment => new CommentModel(comment)))

export default (state = defaultState, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            console.log(payload)
            return state.updateIn(['entities'], entities => entities.merge({

            }))

        case LOAD_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            return state
                .update('entities', entities => entities.merge(arrayToMap(response, CommentModel)))
                .set('loading', false)
                .set('loaded', true)
}

    return state
}