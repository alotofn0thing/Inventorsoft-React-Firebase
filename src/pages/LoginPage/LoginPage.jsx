import './LoginStyle.scss';
import Box from '@mui/material/Box';
import { TextInput } from './components/TextInput/TextInput';
import { LoginButton } from './components/LoginButton/LoginButton';
import { UseLogin } from './UseLogin';

export const LoginPage = () => {
	const { userData, setValue, loginHandler, loginLoading } = UseLogin();
	return (
		<div className='main'>
			<div className='singIn'>
				<Box component='h3' sx={{ mb: 2 }}>
					Login
				</Box>
				<TextInput
					value={userData.userEmail}
					change={e => setValue(e)}
					name='userEmail'
					type={'email'}
				/>
				<TextInput
					value={userData.password}
					change={e => setValue(e)}
					name='password'
					label={'Password'}
					type={'password'}
				/>
				<Box sx={{ textAlign: 'center' }}>
					<LoginButton
						customStyle={{ margin: '20px' }}
						onPress={loginHandler}
						loginLoading={loginLoading}
					/>
				</Box>
			</div>
		</div>
	);
};
