import ReactDOM from "react-dom/client";
import App from "./App";
import MyProvider from "./context/Context";
import store from "./store/Store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {Provider} from "react-redux";
import './index.css'
import {ErrorBoundary} from "react-error-boundary";
import Fallback from "./errorBoundaries/ErrorBoundary";
import {Suspense} from "react";
import {MoonLoader} from "react-spinners";

const root = ReactDOM.createRoot(document.getElementById("root"));
const persistor = persistStore(store);
root.render (<Provider store={store}>
    <PersistGate persistor={persistor}>
        <MyProvider>
            <ErrorBoundary FallbackComponent={Fallback}
                onReset={
                    () => {}
            }>
                <Suspense fallback={
                    <div>
                    <p className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-gray-600 font-extrabold text-5xl">Loading.....</p>
                    <MoonLoader color="#ffff" size={70}/>
                    </div>
                }>
                    <App/>
                </Suspense>
            </ErrorBoundary>
        </MyProvider>
    </PersistGate>
</Provider>);
