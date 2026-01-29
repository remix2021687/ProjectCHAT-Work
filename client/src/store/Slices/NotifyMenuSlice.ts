import { createSlice } from "@reduxjs/toolkit";

interface NotifyMenuState {
    isOpen: boolean;
}

const initialState: NotifyMenuState = {
    isOpen: false,
};

export const NotifyMenuSlice = createSlice({
    name: "NotifyMenu",
    initialState,
    reducers: {
        Open: (state) => {
            state.isOpen = true;
        },
        Close: (state) => {
            state.isOpen = false;
        },
    }
})

export const { Open, Close } = NotifyMenuSlice.actions;

export default NotifyMenuSlice.reducer;