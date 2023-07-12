import ReactDOM from "react-dom/client";
import App from "./App";
import MyProvider from "./context/Context";
import store from "./store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./errorBoundaries/ErrorBoundary";
import { Suspense } from "react";
import './index.css'
import Processing from "./pages/common/Processing";

const root = ReactDOM.createRoot(document.getElementById("root"));
const persistor = persistStore(store);
root.render(<Provider store={store}>
    <PersistGate persistor={persistor}>
        <MyProvider>
            <ErrorBoundary FallbackComponent={Fallback} onReset={() => { }}>
                <Suspense fallback={<Processing />}>
                    <App />
                </Suspense>
            </ErrorBoundary>
        </MyProvider>
    </PersistGate>
</Provider>);
