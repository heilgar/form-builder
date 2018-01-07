import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

import FormBuilder from './formbuilder';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore({ });

render(
    <Provider store={store}>
        <FormBuilder/>
    </Provider>,
    document.getElementById('root')
);
