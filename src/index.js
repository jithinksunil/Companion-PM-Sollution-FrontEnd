import ReactDOM from 'react-dom/client';
import App from './App';
import MyProvider from './context/Context';
import store from './store/Store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <MyProvider>
        <App />
    </MyProvider>
    </Provider>
);
