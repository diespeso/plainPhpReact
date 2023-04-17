import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:80/testProject/controllers';

export const postNewComment = createAsyncThunk(
    'comment/postNew',
    async (comment) => {
        const response = await fetch(`${API_URL}/post_comment.php`, {
            method: 'POST',
            body: JSON.stringify({
                content: comment,
                user_id: 2,
                post_id: 4,
                parent_id: null,
            }),
        });
        
        return response.json();
    }
);
