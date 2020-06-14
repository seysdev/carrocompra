import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import allReducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);
export { store, persistor };

// export default store;
