import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
    id: number;
    email: string;
    password: string;
    name: string;
    surname: string;
    cell: string;
};
interface AuthState {
    user: User | null;
}
const initialState: AuthState = {
    user: null,
};

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
     login: (state, action: PayloadAction<Partial<User>>) => {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        },
        
        updateProfile(state, action: PayloadAction<Partial<User>>) {
            if (state.user)
 {
    state.user = { ...state.user, ...action.payload };
 
 }        }
    }
});

export const {login, logout, updateProfile} = authSlice.actions;
export default authSlice.reducer; 