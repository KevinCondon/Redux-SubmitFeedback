import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { SnackbarProvider } from 'material-ui-snackbar-redux'
import { snackbarReducer } from 'material-ui-snackbar-redux'


const feelingReducer = (state = [], action) => {
    if (action.type === 'SET_FEELING') {
        state = action.payload
        console.log('feelingReducer');
        
    }
    return state
}
const contentReducer = (state = [], action) => {
    if (action.type === 'SET_CONTENT') {
        state = action.payload

    }
    return state
}
const supportReducer = (state = [], action) => {
    if (action.type === 'SET_SUPPORT') {
        state = action.payload
    }
    return state
}
const commentReducer = (state = [], action) => {
    if (action.type === 'SET_COMMENT') {
        state = action.payload

    }
    return state
}



const appReducer = combineReducers({
        feelingReducer,
        contentReducer,
        supportReducer,
        commentReducer,
        snackbar: snackbarReducer
    })

    //USED TO CLEAR STATE
const rootReducer = (state, action) => {
    if (action.type === 'RESET_APP') {
        state = undefined       
    }

    return appReducer(state, action)
}


const storeInstance = createStore(rootReducer);

ReactDOM.render(<Provider store={storeInstance}>    <SnackbarProvider SnackbarProps={{ autoHideDuration: 3500 }}> <App /> </SnackbarProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
