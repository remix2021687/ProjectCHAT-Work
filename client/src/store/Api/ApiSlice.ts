import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import type { RootState } from "@store/store";

export type RegisterRequest = {
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	password: string;
	password_confirm: string;
};

export type LoginRequest = {
	email: string;
	password: string;
};

type LoginResponse = {
	access: string;
	refresh: string;
};

export type VerifyRequest = {
	email: string;
	email_verification_code: number;
};

export const api = createApi({
	reducerPath: "API",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://127.0.0.1:8000/api/",
	}),
	tagTypes: ["User", "Post"] as const,

	endpoints: (build) => ({
		RegistersUser: build.mutation<void, RegisterRequest>({
			query: (body) => ({
				url: "users/register/",
				method: "POST",
				body,
			}),
			invalidatesTags: ["User"],
		}),

		LoginUser: build.mutation<LoginResponse, LoginRequest>({
			query: (body) => ({
				url: "users/login/",
				method: "POST",
				body,
			}),
			invalidatesTags: ["User"],
		}),

		VerifyUser: build.mutation<void, VerifyRequest>({
			query: (body) => ({
				url: "users/verify-email/",
				method: "POST",
				body,
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const {
	useRegistersUserMutation,
	useLoginUserMutation,
	useVerifyUserMutation,
} = api;
