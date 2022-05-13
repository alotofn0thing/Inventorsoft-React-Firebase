import { Stack, LinearProgress } from '@mui/material';

export const LinesLoader = () => {
	return (
		<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
			<LinearProgress color='secondary' />
			<LinearProgress color='success' />
			<LinearProgress color='inherit' />
		</Stack>
	);
};
