import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/root.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'root',
    storage: storageSession,
  };

// setting redux persist
const store = configureStore({
    reducer: rootReducer
});

export default store;

