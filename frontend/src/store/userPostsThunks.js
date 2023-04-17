import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = 'http://localhost:80/testProject/controllers'; //TODO: env var

export const fetchPostsByUserId = createAsyncThunk(
    'posts/fetchByUserId',
    async (userId) => {
        const response = await fetch(`${API_URL}/get_posts.php?user_id=${userId}`);
        return response.json();
    }
)