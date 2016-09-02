export default store => next => action => {
    console.log('before action', store.getState())
    console.log('dispatching', action)

    let commentId = Object.assign({}, action, { id: 'id' + (new Date()).getTime() })
    next(commentId)

    console.log(commentId)
    console.log('after action', store.getState())
}