import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = ({ isLoginUser, redirectPath = '/', children }) => {
	if (isLoginUser) {
		return <Navigate to={redirectPath} replace />;
	}

	return children ? children : <Outlet />;
};
