const initialState = {
    projects: false,
    subProjects: true

}
export default (state = initialState, action) => {
    switch (action.type) {
        //PROJECTS
        case 'GET_PROJECTS_REQ':
            return {...state, projects: true};
        case 'GET_PROJECTS_RES':
        case 'GET_PROJECTS_ERR':
            return {...state, projects: false};
        //SUB-PROJECTS
        case 'GET_SUB_PROJECT_REQ':
            return {...state, subProjects: true};
        case 'GET_SUB_PROJECT_RES':
        case 'GET_SUB_PROJECT_ERR':
            return {...state, subProjects: false};
        default:
            return state;
        }
    }
