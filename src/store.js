import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import form, { INITIAL_STATE } from './formbuilder/reducers/form';

const defaultInitialState = {
    ...INITIAL_STATE
};

const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState) {
    let state = Object.assign(defaultInitialState, initialState);

    return finalCreateStore(form, state);
}

