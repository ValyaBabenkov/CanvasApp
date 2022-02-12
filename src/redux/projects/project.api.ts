import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProject } from './project.types'
import * as con from '../../constants'

//TODO переписать на авторизацию
export const projectsApi = createApi({
    reducerPath: 'projectList',
baseQuery: fetchBaseQuery({ baseUrl: con.API_URL,
        prepareHeaders: (headers, { getState }) => {
            if (con.TOKEN_SBERBUILD) {
              headers.set('authorization', `Bearer ${con.TOKEN_SBERBUILD}`)
            }
            return headers
          }}),
    endpoints: (builder) => ({
      getProjectsByName: builder.query<IProject[], string>({
        query: () => `profile/projects`,
      }),
    }),
  })

  export const { useGetProjectsByNameQuery } = projectsApi