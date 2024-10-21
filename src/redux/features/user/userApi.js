import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import customFetchBase from '../customFetchBaseQuery';
import {BASE_URL} from '../url';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  endpoints: builder => ({
    getLoggedInUser: builder.query({
      query: () => {
        return {
          url: 'users/profile',
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useGetLoggedInUserQuery} = userApi;
