import { SetAuthToken } from "@/config/api";
import { UserType } from "@/types/UserType";
import { createSlice } from "@reduxjs/toolkit";

const initiaslState: UserType = {
	id: 0,
	full_name: "",
	username: "",
	photo_profile: "",
	bio: ""
};

export const AuthSlice = createSlice({
	name: "auth",
	initialState: initiaslState,
	reducers: {
		AUTH_LOGIN: (_, action) => {
			const payload = action.payload;
			SetAuthToken(payload);
			console.log(payload);
			localStorage.setItem("token",payload);
		},
		AUTH_CHECK: (state, action) => {
			state.id= action.payload.id
			state.bio= action.payload.bio
			state.full_name= action.payload.full_name
			state.username= action.payload.username
			state.photo_profile= action.payload.photo_profile
		},
		AUTH_ERROR: () => {
			localStorage.removeItem("token");
		},
		AUTH_LOGOUT: () => {
			localStorage.removeItem("token");
		},
	},
});

export const { AUTH_LOGIN, AUTH_CHECK, AUTH_ERROR, AUTH_LOGOUT } = AuthSlice.actions;
export default AuthSlice.reducer