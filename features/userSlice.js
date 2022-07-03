import { createSlice } from '@reduxjs/toolkit'

const initialState = { authToken: null, loggedIn: false }

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.authToken = action.payload.authToken
            state.loggedIn = action.payload.loggedIn
        },
        setUserLogOutState: (state) => {
            state.authToken = null
            state.loggedIn = false
        },

    }
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions
export const selectAuthToken = (state) => state.user.authToken
export const selectLoggedIN = (state) => state.user.loggedIn
export default userSlice.reducer