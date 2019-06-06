import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore ,Store} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import {IState} from './store/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
const store : Store<IState> = createStore(reducer,devToolsEnhancer(window as any));

ReactDOM.render(<Provider store={store}><App age={0} history={[]}/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
