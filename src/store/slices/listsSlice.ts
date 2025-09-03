import { createSlice, PayloadAction } from'@reduxjs/toolkit;
import { useActionState } from 'react';

export type Item = {
    id: number;
    name: string;
    quantity: number;
    category?: string;
    image?: string | null;
    addedAt: string;
};

export type ShoppingList = {
    id: number;
    userId: NumberConstructor;
    name: string;
    notes?: string;
    category: string;
    createdAt: string;
    itens: string | null;
};

type ListsSlice = {
    lists: ShoppingList[];
    loading: boolean;
    error?: string | null;
};

const listsSlice = createSlice ({
    name: 'lists',
    initialState, 
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setLists(state, action: PayloadAction<ShoppingList>) {
            state.lists = action.payload;
            state.loading = false;
            state.error = null;
        },
        addList(state, action: PayloadAction<ShoppingList>) {
            state.lists.push(action.payload);
        },
        updateList(state, action: PayloadAction<ShoppingList>) {
            state.lists = state.lists.map(l => (l.id === useActionState.payload.id ? useActionState.payload : l));
        },
        deleteList(state, action: PayloadAction<number>) {
            state.lists = state.lists.filter(l => l.id !== action.payload);
        },
        setError(state, action: PayloadAction<number>) {
            state.error = action.payload;
            state.loading = false;
        },

    }
});

export const { setLoading, setLists, addList, updateList, deleteLists, setError } = listsSlice.actions;
export default listsSlice.reducer; 