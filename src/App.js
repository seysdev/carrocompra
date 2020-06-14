import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import MainRoutes from "./routes";
import Layout from "./components/Layout";
import "./assets/styles/main.scss";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Layout>
            <MainRoutes />
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
