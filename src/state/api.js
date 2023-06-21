import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://fx-backend-sever.onrender.com" }),
    reducerPath: "adminApi",
    tagTypes: ["User"],
    endpoints: (build) => ({
        getUser: build.query({
         query: (id) => `general/user/${id}`,
         providesTags: ["User"]
        })
    })
})

export const { useGetUserQuery } = api;