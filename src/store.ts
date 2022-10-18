import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import counterReducer from './slice/counter.slice';
import authReducer from './slice/auth.slice';
import {postApi} from './services/post.service';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: gDM => gDM().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
