import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';
import { AsyncStorage } from 'react-native';

import reducers from './reducers/index';


// const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

// const logger = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            logger
        ),
    );
    return createStore(reducers, initialState, enhancer)
}

const store = configureStore({});

// let alarmStore = applyMiddleware(logger)(createStore);
// const store = autoRehydrate()(alarmStore)(reducers);
// persistStore(store, {storage: AsyncStorage});

// const initialState = {
//     isAlarmEditable: false,
//     alarm: {
//     }
// };
//
// const store = createStore(
//     reducers,
//     initialState
// );

// if (isDebuggingInChrome) {
//     window.store = store
// }


module.exports = store;