import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { RoundLoader } from '../RoundLoader/RoundLoader';

export const DeleteDialog = ({
	title,
	text,
	deleteHandler,
	taskDeleteLoading,
	deleteOpen,
	handleDeleteOpen,
	handleDeleteClose,
}) => {
	return (
		<span>
			<IconButton aria-label='delete' color='error' onClick={handleDeleteOpen}>
				<DeleteIcon sx={{ fontSize: 20 }} />
			</IconButton>

			<Dialog
				open={deleteOpen}
				keepMounted
				onClose={handleDeleteClose}
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle>{title || 'Are you sure?'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-slide-description'>
						{text || 'Do you want to delete it?'}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleDeleteClose}>Cancel</Button>
					{taskDeleteLoading ? (
						<Button>
							<RoundLoader color='red' />
						</Button>
					) : (
						<Button onClick={deleteHandler} sx={{ color: 'red' }}>
							Delete
						</Button>
					)}
				</DialogActions>
			</Dialog>
		</span>
	);
};
