import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface ShoppingItem {
    id: number;
    name: string;
    quantity: number;
    notes?: string;
    category?: string;
    image?: string | null;
    dateAdded: string;
};


interface ListsState {
    items: [],
}

const initialState: ListsState = {
    items: [],
};

const listsSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ShoppingItem>) => {
            state.items.push(action.payload);
        },
        updateItem: (state, action: PayloadAction<ShoppingItem>) => {
            const index = state.items.findIndex(i => i.id === action.payload.id);
            if (index >= 0) state.items[index] = action.payload;
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
    },
});


export const { addItem, updateItem, deleteItem } = listsSlice.actions;
export default listsSlice.reducer; 