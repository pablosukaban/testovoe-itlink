import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ItemType } from "@/data";

type ResponseType = {
  data: ItemType[];
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/product",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<ResponseType, string>({
      query: () => "/",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
