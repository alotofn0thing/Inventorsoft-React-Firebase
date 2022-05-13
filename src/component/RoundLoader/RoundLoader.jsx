import { Box, CircularProgress } from '@mui/material';

export const RoundLoader = ({ size, color, customStyle }) => {
	return (
		<Box sx={{ color: { color }, display: 'flex' }} style={customStyle}>
			<CircularProgress
				color='inherit'
				style={{ position: 'absloute', end: '0px' }}
				size={size || '20px'}
			/>
		</Box>
	);
};
