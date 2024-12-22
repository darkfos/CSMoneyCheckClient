import { createSlice } from "@reduxjs/toolkit";


try {
    
    var access_token = document.cookie.split(" ")[0].split("=")[1].split(";")[0];
    var refresh_token = document.cookie.split(" ")[1].split("=")[1].split(";")[0];

} catch {
    access_token = false;
    refresh_token = false;
}


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        "Access-Token": access_token,
        "Refresh-Token": refresh_token,
        "Modal": false
    },
    reducers: {

        setAccessToken(state, action) {
            state["Access-Token"] = action.payload;
        },

        setRefreshToken(state, action) {
            state["Refresh-Token"] = action.payload;
        },

        setModal(state, action) {
            state.Modal = action.payload;
        },

    }
});


export const getAccessToken = (state) => state.auth.accessToken;
export const getRefreshToken = (state) => state.auth.refreshToken;
export const getModal = (state) => state.auth.Modal;

export default authSlice.reducer;
export const {setAccessToken, setRefreshToken, setModal} = authSlice.actions;
