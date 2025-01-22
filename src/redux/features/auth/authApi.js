import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../../features/url';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: builder => ({
    loginUser: builder.mutation({
      query: ({email, password}) => {
        return {
          url: 'auth/signin',
          method: 'POST',
          body: {
            email,
            password,
          },
        };
      },
    }),

    forgotPasswordOtp: builder.mutation({
      query: ({email}) => ({
        url: 'auth/forgot-password',
        method: 'POST',
        body: {email},
      }),
    }),
    resetPassword: builder.mutation({
      query: ({password, confirmpassword}) => ({
        url: 'auth/reset-password',
        method: 'POST',
        body: {password, confirmpassword},
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useResetPasswordMutation,
  useForgotPasswordOtpMutation,
} = authApi;
