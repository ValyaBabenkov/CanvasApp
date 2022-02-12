import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
import {projectsApi} from './projects/project.api'

export default configureStore({ 
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(projectsApi.middleware)
})