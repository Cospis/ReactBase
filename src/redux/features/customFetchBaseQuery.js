import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { logout, setCredentials } from '../features/auth/authSlice';

import { BASE_URL } from './url';
const baseUrl = BASE_URL;
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    // get token from useAuth reducer
    const data = getState().userAuth.token;
    if (data) {
      headers.set('Authorization', `Bearer ${data}`);
      headers.set('X-Requested-With', `XMLHttpRequestuser`);
    }
    return headers;
  }
});

const customFetchBase = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  return result;
};

export default customFetchBase;
