import { LOAD_ARTICLE_BY_ID, DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants'
import $ from 'jquery'
import { browserHistory } from 'react-router'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticleById(id) {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_ARTICLE_BY_ID + START,
            payload: { id }
        })

        $.get(`/api/article/${id}`)
            .done(response => dispatch({
                type: LOAD_ARTICLE_BY_ID + SUCCESS,
                payload: { id },
                response
            }))
            .fail(error => {
                dispatch({
                    type: LOAD_ARTICLE_BY_ID + FAIL,
                    payload: { id },
                    error
                })
                browserHistory.replace(`/articles/not_found?id=${id}`)
            })
    }
}

export function loadArticlesWithThunk() {
    return (dispatch, getState) => {
        dispatch({
            type: LOAD_ALL_ARTICLES + START
        })

        $.get('/api/article')
            .done(response => dispatch({
                type: LOAD_ALL_ARTICLES + SUCCESS,
                response
            }))
            .fail(error => dispatch({
                type: LOAD_ALL_ARTICLES + FAIL,
                error
            }))
    }
}