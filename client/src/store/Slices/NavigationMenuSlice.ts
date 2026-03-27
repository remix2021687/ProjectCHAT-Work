import { createSlice } from "@reduxjs/toolkit";

type NavigationMenuState = {
	category: string;
};

const initialState: NavigationMenuState = {
	category: "Feed",
};

export const NavigationMenuSlice = createSlice({
	name: "Navigation Menu",
	initialState,
	reducers: {
		Category: (state, action) => {
			state.category = action.payload;
		},
	},
});

export const { Category } = NavigationMenuSlice.actions;

export default NavigationMenuSlice.reducer;
