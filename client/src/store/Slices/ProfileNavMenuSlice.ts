import { createSlice } from "@reduxjs/toolkit";

type ProfileNavMenuType = {
	category: string;
};

const initialState: ProfileNavMenuType = {
	category: "Videos",
};

export const ProfileNavMenuSlice = createSlice({
	name: "Profile Nav Menu",
	initialState,
	reducers: {
		NavMenuState: (state, action) => {
			state.category = action.payload;
		},
	},
});

export const { NavMenuState } = ProfileNavMenuSlice.actions;

export default ProfileNavMenuSlice.reducer;
