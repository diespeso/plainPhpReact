import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = 'http://localhost:80/testProject/controllers';

/*
const fetchUserById = createAsyncThunk(
    'users/fetchById',
    async (id) => {
        //TODO: dont ignore id
        const response = await fetch('http://localhost:80/testProject/controllers/get_user.php?id=1');

        return response;
    }
); */

export const fetchUserById = createAsyncThunk(
    'users/fetchById',
    async (id) => {
        //TODO: dont ignore id
        const response = await fetch(`${API_URL}/get_user.php?id=${id}`);
        return response.json();
    }
);
