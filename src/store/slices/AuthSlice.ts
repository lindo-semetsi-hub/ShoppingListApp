import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
    id: number;
    email: string;
    name: string;
    surname: string;
    cell: string;
    createdAt: string;
};

type AuthState = {
    user: User | null;
    token: string | null;
    loading: boolean;
    error?: string | null;
};

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null
};

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        startLoading(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<{ user: User; token?: string }>) {
            state.user = action.payload.user;
            state.token = action.payload.token ?? null;
            state.loading = false;
            state.error = null;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },
        updateProfile(state, action: PayloadAction<Partial<User>>) {
            if (state.user)
 {
    state.user = { ...state.user, ...action.payload };
 
 }        }
    }
});

export const {startLoading, loginSuccess, logout, setError, updateProfile} = authSlice.actions;
export default authSlice.reducer;