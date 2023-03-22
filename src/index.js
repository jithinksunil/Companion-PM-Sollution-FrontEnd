import ReactDOM from 'react-dom/client';
import App from './App';
import MyProvider from './context/Context';
import store from './store/Store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store)
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <MyProvider>
                <App />
            </MyProvider>
        </PersistGate>
    </Provider>
);
