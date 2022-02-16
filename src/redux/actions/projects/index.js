import api from '../../../lib/functions/api';
import store from '../../store';

export const fetchAllProjects = async () => {
  store.dispatch({type: 'GET_PROJECTS_REQ'});
  try {
    const response = await api.projects.all();
    console.log(response);
    const payload = response.data.data;
    store.dispatch({type: 'GET_PROJECTS_RES', payload: payload});
    return payload;
  } catch (error) {
    store.dispatch({type: 'GET_PROJECTS_ERR'});
  }
};
