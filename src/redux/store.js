import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from './features/auth/authSlice';
import { authApi } from './features/auth/authApi';
import { userApi } from './features/user/userApi';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  userAuth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  whitelist: ['userAuth'],
  blacklist: [[authApi.reducerPath], [userApi.reducerPath]]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(authApi.middleware, userApi.middleware)
});

setupListeners(store.dispatch);
