export default (state = {}, action) => {
  switch (action.type) {
    case "FOLDER_DATA":
      return action.payload;
    default:
      return state;
  }
};
