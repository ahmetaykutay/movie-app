import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

/* eslint-disable no-underscore-dangle */
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const enhancerList = [applyMiddleware(...middlewares)]

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension())
}

const composedEnhancer = compose(...enhancerList)

const store = createStore(rootReducer, composedEnhancer)

sagaMiddleware.run(rootSaga)

export { default as actions } from './actions'
export default store
