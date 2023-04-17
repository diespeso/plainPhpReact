import { createSlice } from '@reduxjs/toolkit';

import { postNewComment } from './newCommentThunks';

const initialState = {
    content: '',
};

const newCommentSlice = createSlice({
    name: 'newComment',
    initialState,
    reducers: {
        setNewComment: (state, action) => {
            state.content = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postNewComment.fulfilled, (state, action) => {
                
            })
    }
});

export default newCommentSlice.reducer;
export const { setNewComment } = newCommentSlice.actions;