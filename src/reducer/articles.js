import { DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'
import { Record, List } from 'immutable'

const ArticleModel = new Record({
    id: null,
    user: null,
    text: '',
    title: '',
    comments: []
})

const immutableArticle = new List(normalizedArticles.map(article => new ArticleModel(article)))

export default (articles = normalizedArticles, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)
    }

    return articles
}