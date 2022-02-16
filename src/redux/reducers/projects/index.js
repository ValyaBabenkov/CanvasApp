const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS_RES':
      return action.payload;
    case 'GET_PROJECTS_RESET':
      return initialState;
    default:
      return state;
  }
};
