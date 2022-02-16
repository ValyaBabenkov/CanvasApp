const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DETAILS_PROJECT_SCENE_SET_RESULT':
      return action.payload;
    case 'DETAILS_PROJECT_SCENE_RESET':
      return initialState;
    default:
      return state;
  }
};
