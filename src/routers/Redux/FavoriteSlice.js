import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    data: [],
    loading: false,
    error : ''
}

export const fetchFavorites = createAsyncThunk(
    'fetchFavorites',
    async () => {
        const response = await axios.get('http://contabo.foxcode.site:8085/api/v1/articles?page=0&size=10')
        return response.data
    }
)

const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {},
    extraReducers:(build) => {
        build
        .addCase(fetchFavorites.pending, (state,action) =>{
            state.loading = true;
            state.error = '';
        })
        .addCase(fetchFavorites.fulfilled, (state,action) =>{
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(fetchFavorites.rejected, (state,action) =>{
            state.loading = false;
            state.error = 'da khong the lay du lieu thanh cong'
        })
    }
})

export default FavoriteSlice.reducer

