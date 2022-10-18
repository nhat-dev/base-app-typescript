import {createAsyncThunk} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  name: String;
  isLoading: Boolean;
  isAuthenticated: Boolean;
}

const initialState: AuthState = {
  name: '',
  isLoading: false,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.name = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(login.rejected, state => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });
  },
});

export const {logout} = authSlice.actions;

interface LoginRequest {
  userName: String;
  password: String;
}

export default authSlice.reducer;

export const login = createAsyncThunk(
  'user/login',
  async (data: LoginRequest, {rejectWithValue}) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(jsonData);
    }
    return jsonData;
  },
);
