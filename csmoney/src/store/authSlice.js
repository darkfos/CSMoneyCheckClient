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
        "Refresh-Token": refresh_token
    },
    reducers: {

        setAccessToken(state, accessToken) {
            state["Access-Token"] = accessToken;
        },

        setRefreshToken(state, refreshToken) {
            state["Refresh-Token"] = refreshToken;
        },

        getAccessToken(state) {
            return state["Access-Token"];
        },

        getRefreshToken(state) {
            return state["Refresh-Token"];
        }
    }
});


export default authSlice.reducer;
export const {setAccessToken, setRefreshToken, getAccessToken, getRefreshToken} = authSlice.actions;
