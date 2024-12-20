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

        getAccessToken(state) {
            return state["Access-Token"];
        },

        getRefreshToken(state) {
            return state["Refresh-Token"];
        },

        getModal(state) {
            return state.Modal;
        }
    }
});


export default authSlice.reducer;
export const {setAccessToken, setRefreshToken, getAccessToken, getRefreshToken, setModal, getModal} = authSlice.actions;
