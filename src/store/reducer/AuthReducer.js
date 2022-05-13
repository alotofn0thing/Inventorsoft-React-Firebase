const initialState = {
	isLoginUser: false,
	user: {},
};

export const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN': {
			return {
				...state,
				isLoginUser: true,
				user: action.payload,
			};
		}
		case 'LOGOUT': {
			return {
				...state,
				isLoginUser: false,
				user: {},
			};
		}

		default:
			return state;
	}
};
