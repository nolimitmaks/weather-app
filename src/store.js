// import { createStore } from 'redux'
// import rootReducer from './reducers'


// export default createStore(
//     rootReducer, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );



import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import rootReducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

export default createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())