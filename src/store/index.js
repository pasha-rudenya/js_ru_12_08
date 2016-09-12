import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
//import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const enhancer = compose(
    applyMiddleware(thunk, api, randomId, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store