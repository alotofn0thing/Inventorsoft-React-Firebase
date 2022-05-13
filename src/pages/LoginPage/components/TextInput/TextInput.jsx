import { Box, TextField } from '@mui/material';

export const TextInput = ({ label, type, value, change, name }) => {
	return (
		<Box
			component='form'
			sx={{
				'& > :not(style)': { m: 1, width: '30ch' },
			}}
			noValidate
			autoComplete='off'
		>
			<TextField
				onChange={change}
				name={name}
				type={type}
				value={value}
				label={label || 'User Email'}
				variant='outlined'
				required
			/>
		</Box>
	);
};
