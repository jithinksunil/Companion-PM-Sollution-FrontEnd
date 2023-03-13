import ReactDOM from 'react-dom/client';
import App from './App';
import MyProvider from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyProvider>
        <App />
    </MyProvider>
);
