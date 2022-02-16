import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISubProject, ITep, ISlider, IShortStatusResponse} from './types'
import * as con from '../../constants/api'

//TODO переписать на авторизацию
export const subProjectApi = createApi({
    reducerPath: 'subProjectList',
     baseQuery: fetchBaseQuery({ baseUrl: con.API_URL,
        prepareHeaders: (headers, { getState }) => {
            if (con.TOKEN_SBERBUILD) {
              headers.set('authorization', `Bearer ${con.TOKEN_SBERBUILD}`)
            }
            return headers
          },
          credentials: "include"}),
    endpoints: (builder) => ({
      getSubProjectById: builder.query<ISubProject[], number>({
        query: (id:number) => `/sub-projects/${id}`,
        transformResponse: (response:any, meta, arg) => {
          if (response.data.length) {
            return response.data.map((it:ISubProject)=> ({
              id: it.id,
              label: it.title,
              image: {src:""},
            }))
          } else {
            return response.data
          }
        }
      }),
      getSubProjectTep: builder.query<ITep[], number>({
        query: (id:number) => `/sub-projects/${id}/teps`,
        transformResponse: (response:any, meta, arg) => {
          if (response.data.length) {
            return response.data.filter((it:ITep)=>it.isActive).map((it:ITep)=> ({
              id: it.id,
              title: it.title,
              unit:it.unit,
              unitId:it.unitId,
              value: it.value,
            }))
          } else {
            return response.data
          }
        }
      }),
      getSubProjectSlider: builder.query<ISlider[], number>({
        query: (id:number) => `/sub-projects/${id}/sliders`,
        transformResponse: (response:any, meta, arg) => {
          if (response.data.length) {
            return response.data.map((it:ISlider)=> ({
              id: it.id,
              date: it.date,
              isActive: it.isActive,
              image: it.imageUrl,
              title: it.title
            }))
          } else {
            []
          }
        }
      }),
      getSubProjectShortStatus: builder.query<IShortStatusResponse, number>({
        query: (id:number) => `/sub-projects/${id}/short-statuses/last`,
        transformResponse: (response:any, meta, arg) => {
          if (response.data) {
            return response.data
            
          } else {
            return {}
          }
        //  return response?.data || {}
        }
      }),
    }),
  })

  export const { useGetSubProjectByIdQuery, useGetSubProjectTepQuery, useGetSubProjectSliderQuery, useGetSubProjectShortStatusQuery } = subProjectApi