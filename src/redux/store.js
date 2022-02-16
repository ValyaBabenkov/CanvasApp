import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import reducers from './reducers';

import {projectsApi} from './projects/api';
import {subProjectApi} from './subProject/api';

export default configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(projectsApi.middleware, subProjectApi.middleware),
});
