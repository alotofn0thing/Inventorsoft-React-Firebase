import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Login } from '../../store/action/AuthAction';

const userDetail = {
	userEmail: '',
	password: '',
};

export const UseLogin = () => {
	const dispatch = useDispatch();
	const [userData, setUserData] = useState(userDetail);
	const [loginLoading, setLoginLoading] = useState(false);

	const setValue = e => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const loginHandler = () => {
		if (!userData.userEmail || !userData.password) {
			alert('Enter correct email and password');
			return;
		}
		dispatch(Login(userData, setLoginLoading));
	};

	return {
		userData,
		setValue,
		loginHandler,
		loginLoading,
	};
};
