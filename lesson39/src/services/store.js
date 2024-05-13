import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProductsApi } from './products.js'

export const store = configureStore({
    reducer: {
        [ProductsApi.reducerPath]: ProductsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductsApi.middleware),
})


setupListeners(store.dispatch)