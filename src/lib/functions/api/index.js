import {
  PROJECTS_URL,
  SUB_PROJECT_URL,
  TOKEN_SBERBUILD
} from '../../../constants/api';
import axios from 'axios';
import req from './req';
import url from './url';

axios.defaults.withCredentials = true;
export const authHeader = () => {
  //const token = store.getState().auth.token;
  return {headers: {Authorization: `Bearer ${TOKEN_SBERBUILD}`}};
};

export default {
  projects: {
    all: req(() => axios.get(PROJECTS_URL, authHeader())),
  },
  subProject: {
    get: req(id => axios.get(url(SUB_PROJECT_URL, {id}), authHeader())),
  }
};
