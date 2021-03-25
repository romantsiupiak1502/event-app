import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import auth from './auth/auth';

const reducer = combineReducers({
  auth,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
