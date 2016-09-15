import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Root from './RouteHandlers/Root'
import React from 'react'
import CounterPage from './RouteHandlers/CounterPage'
import FiltersPage from './RouteHandlers/FiltersPage'
import ArticlesPage from './RouteHandlers/ArticlesPage'
import ArticlePage from './RouteHandlers/ArticlePage'
import IndexArticlePage from './RouteHandlers/IndexArticlePage'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'
import NotFoundPage from './RouteHandlers/NotFoundPage'
import NewArticlePage from './RouteHandlers/NewArticlePage'
import ArticleNotFound from './RouteHandlers/ArticleNotFound'
import store from './store'

export default (
    <Router history = {browserHistory}>
        <Route path = "/" component = {Root} >
            <IndexRedirect to = "articles" />
            <Route path = "counter" component = {CounterPage} />
            <Route path = "filters" component = {FiltersPage} />
            <Route path = "articles" component = {ArticlesPage} >
                <IndexRoute component = {IndexArticlePage} />
                <Route path = "new" component = {NewArticlePage}
                       onEnter = {(nextState, replace) => {
                            if (!store.getSate().user) replace('/articles')
                       }}
                />
                <Route path = "not_found" component = {ArticleNotFound} />
                <Route path = ":id" component = {ArticlePage} />
            </Route>
            <Redirect from = "/comments" to = "/comments/1" />
            <Route path = "comments" component = {CommentsRoot}>
                <Route path = ":page" component = {CommentsPage} />
            </Route>
            <Route path = "*" component = {NotFoundPage} />
            {/*<Route path = "/articles/:id" component = {ArticlePage} />*/}
        </Route>
    </Router>
)