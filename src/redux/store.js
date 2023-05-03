import { configureStore } from "@reduxjs/toolkit";
import FavoriteSlice from "../routers/Redux/FavoriteSlice";

export default configureStore({
    reducer: {
        favorite: FavoriteSlice
    }
})