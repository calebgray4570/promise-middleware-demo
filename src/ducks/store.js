import {createStore, applyMiddleware} from 'redux'
import Reducer from './reducer'

// This is the only thing we need from our redux-promise-middleware package
import Middleware from 'redux-promise-middleware'


// If we don't use middleware, we can use this first export
// export default createStore(Reducer)

// If we are using middleware, we need to use the following export.
export default createStore(Reducer, applyMiddleware(Middleware()));