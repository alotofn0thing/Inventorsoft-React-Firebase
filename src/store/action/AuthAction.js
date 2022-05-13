import { auth } from '../../config/Firebase';

export const Login = (userData, setLoginLoading) => async dispatch => {
	try {
		setLoginLoading(true);
		const userCredential = await auth.signInWithEmailAndPassword(
			userData.userEmail,
			userData.password
		);
		let userDetail = userCredential.user;
		if (userDetail) {
			dispatch({
				type: 'LOGIN',
				payload: userDetail,
			});
		}
	} catch (error) {
		console.error(error.massage);
	}
};
export const Logout = setLogoutLoading => async dispatch => {
	try {
		setLogoutLoading(true);

		dispatch({
			type: 'LOGOUT',
		});
	} catch (error) {
		console.error(error.massage);
	}
};

export const GetCurrentUser = setLoader => async dispatch => {
	try {
		setLoader(true);

		auth.onAuthStateChanged(user => {
			if (user) {
				dispatch({
					type: 'LOGIN',
					payload: user,
				});
			}
		});
	} catch (error) {
		console.error(error.message);
	} finally {
		setLoader(false);
	}
};
