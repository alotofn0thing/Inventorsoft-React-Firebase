import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { LogButton } from '../LogButton/LogButton';
import { Logout } from '../../store/action/AuthAction';

export const Navigation = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	const doLogout = () => {
		dispatch(Logout(setIsLoading));
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed' style={{ zIndex: '1500' }}>
				<Toolbar>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						To Do
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							justifyContent: 'center',
							flexWrap: 'wrap',
						}}
					></Box>
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<LogButton
							isLoading={isLoading}
							customStyle={{ textTransform: 'capitalize', ml: 2 }}
							onPress={doLogout}
							buttonIcon={<LockOutlinedIcon />}
							label='Logout'
						/>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
