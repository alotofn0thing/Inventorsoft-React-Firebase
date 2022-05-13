import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useSelector } from 'react-redux';

export const Routing = () => {
	const isLoginUser = useSelector(store => store.AuthReducer.isLoginUser);
	return (
		<Routes>
			<Route element={<PrivateRoute isLoginUser={isLoginUser} />}>
				<Route path='/' element={<HomePage />} />
			</Route>

			<Route
				path='/login'
				element={
					<PublicRoute isLoginUser={isLoginUser}>
						<LoginPage />
					</PublicRoute>
				}
			/>
		</Routes>
	);
};
