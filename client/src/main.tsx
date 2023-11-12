import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import { store } from "./redux/app/store.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* // <PersistGate persistor={persistor} loading={null}> */}

    <App />

    {/* </PersistGate> */}
  </Provider>
);
