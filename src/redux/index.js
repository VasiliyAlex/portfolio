import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from './portfolio/portfolioSlice'



const store = configureStore({
    reducer: {
        portfolio: portfolioSlice
    }
})

export default store