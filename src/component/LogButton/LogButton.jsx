import Button from '@mui/material/Button';
import { RoundLoader } from '../RoundLoader/RoundLoader';

export const LogButton = ({
	buttonIcon,
	label,
	customStyle,
	onPress,
	isLoading,
}) => {
	return (
		<>
			<Button
				sx={customStyle}
				variant='outline'
				startIcon={isLoading ? <RoundLoader /> : buttonIcon}
				onClick={isLoading ? null : onPress}
			>
				{label || 'Login'}
			</Button>
		</>
	);
};
