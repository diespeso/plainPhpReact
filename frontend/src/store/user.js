import { createSlice } from "@reduxjs/toolkit";

import { fetchUserById } from './userThunks';

const initialState = {
    id: -1,
    name: '',
    email: '',
    password: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserById.fulfilled, (state, action) => {
                return action.payload;
            })
    }
});

// export const { userReceived } = userSlice.actions;

export default userSlice.reducer;