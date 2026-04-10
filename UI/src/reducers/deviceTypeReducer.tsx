export default (state = {}, action) => {
	switch (action.type) {
		case "DEVICE_TYPE":
			return action.payload;
		default:
			return state;
	}
};
