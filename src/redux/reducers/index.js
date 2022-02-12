import { combineReducers } from '@reduxjs/toolkit'
import {projectsApi} from '../projects/project.api'

export default combineReducers({
     [projectsApi.reducerPath] : projectsApi.reducer,
})