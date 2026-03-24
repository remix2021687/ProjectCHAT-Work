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
		Feed: (state) => {
			state.category = "Feed";
		},

		Trending: (state) => {
			state.category = "Trending";
		},

		Subscriptions: (state) => {
			state.category = "Subscriptions";
		},
	},
});

export const { Feed, Trending, Subscriptions } = NavigationMenuSlice.actions;

export default NavigationMenuSlice.reducer;
