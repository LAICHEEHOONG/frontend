import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';

const ReduxStore = () => {
    const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

    const store = createStore(
        appReducers,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};

export default ReduxStore;



