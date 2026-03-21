import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type EmailVerify = {
	email: string;
};

const initialState: EmailVerify = {
	email: "",
};

export const EmailVerifySlice = createSlice({
	name: "Email Verification",
	initialState,
	reducers: {
		addEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
	},
});

export const { addEmail } = EmailVerifySlice.actions;

export default EmailVerifySlice.reducer;
