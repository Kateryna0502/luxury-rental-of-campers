import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = (
  getDefaultMiddleware,
) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  });
import campersReduser from "./campers/slice.js";

const rootReducer = combineReducers({
  campers: campersReduser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor =
  persistStore(store);