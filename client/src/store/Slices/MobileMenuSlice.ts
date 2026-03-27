import { createSlice } from "@reduxjs/toolkit";

interface MobileMenuState {
	isOpen: boolean;
}

const initialState: MobileMenuState = {
	isOpen: false,
};

export const MobileMenuSlice = createSlice({
	name: "MobileMenu",
	initialState,
	reducers: {
		Open: (state) => {
			state.isOpen = true;
		},
		Close: (state) => {
			state.isOpen = false;
		},
	},
});

export const { Open, Close } = MobileMenuSlice.actions;

export default MobileMenuSlice.reducer;
