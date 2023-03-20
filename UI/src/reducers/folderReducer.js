export default (state = {}, action) => {
  switch (action.type) {
    case "FOLDER_SELECTION":
      return action.payload;
    default:
      return state;
  }
};
