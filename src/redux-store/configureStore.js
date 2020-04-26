import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'


const loggerMiddleware = createLogger()

let  configureStore =  createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )

export default configureStore;