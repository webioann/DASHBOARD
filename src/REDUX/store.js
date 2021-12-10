import {createStore,combineReducers,applyMiddleware} from "redux";
import genderReducer from './Reducers/genderReducer.js'
import pageSizeReducer from './Reducers/pageSizeReducer.js'
import paginatReducer from './Reducers/paginatReducer.js'
import natioReducer from './Reducers/natioReducer.js'
import showMenuReducer from './Reducers/showMenuReducer.js'
import controlReducer from './Reducers/controlReducer.js'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    gender: genderReducer,
    pageSize: pageSizeReducer,
    paginator: paginatReducer,
    natio: natioReducer,
    showMenu: showMenuReducer,
    control: controlReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk,logger));

export default store;
