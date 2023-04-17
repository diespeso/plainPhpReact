import { createSlice } from "@reduxjs/toolkit";

import { fetchPostsByUserId } from "./userPostsThunks";

const initialState = [];

const userPostsSlice = createSlice({
    name: 'userPosts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsByUserId.fulfilled, (state, action) => {
                state.push(...action.payload)
            })
    }
})

export default userPostsSlice.reducer;