import { combineReducers } from '@reduxjs/toolkit'
import {projectsApi} from '../projects/api'
import {subProjectApi} from '../subProject/api'

export default combineReducers({
     [projectsApi.reducerPath] : projectsApi.reducer,
     [subProjectApi.reducerPath] : subProjectApi.reducer,
})
