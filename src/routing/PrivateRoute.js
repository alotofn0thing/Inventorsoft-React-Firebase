import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({
	isLoginUser,
	redirectPath = '/login',
	children,
}) => {
	if (!isLoginUser) {
		return <Navigate to={redirectPath} replace />;
	}

	return children ? children : <Outlet />;
};
