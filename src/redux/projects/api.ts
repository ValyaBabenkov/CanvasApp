import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IProject} from './types';
import * as con from '../../constants/api';

//TODO переписать на авторизацию
export const projectsApi = createApi({
  reducerPath: 'projectList',
  baseQuery: fetchBaseQuery({
    baseUrl: con.API_URL,
    prepareHeaders: (headers, {getState}) => {
      if (con.TOKEN_SBERBUILD) {
        headers.set('authorization', `Bearer ${con.TOKEN_SBERBUILD}`);
      }
      return headers;
    },
    credentials: 'include',
  }),
  // credentials: "include"}),
  endpoints: builder => ({
    getProjectsByName: builder.query<IProject[], string>({
      query: () => `profile/projects`,
      transformResponse: (response: any, meta, arg) => response.data,
    }),
    // updateUser: builder.query({
    //   query: (user: Record<string, string>) => ({
    //     url: `users`,
    //     method: 'PUT',
    //     body: user
    //   }),
    // }),
  }),
});

export const {useGetProjectsByNameQuery} = projectsApi;
