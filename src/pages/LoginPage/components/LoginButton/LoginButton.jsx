import Button from '@mui/material/Button';
import { RoundLoader } from '../../../../component/RoundLoader/RoundLoader';

export const LoginButton = ({ text, customStyle, onPress, loginLoading }) => {
	return (
		<>
			{loginLoading ? (
				<Button variant='contained' sx={{ width: '180px' }} style={customStyle}>
					<RoundLoader />
				</Button>
			) : (
				<Button
					onClick={onPress}
					variant='contained'
					sx={{ width: '180px' }}
					style={customStyle}
				>
					{text || 'Login'}
				</Button>
			)}
		</>
	);
};
