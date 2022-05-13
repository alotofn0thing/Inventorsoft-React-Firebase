import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, Box } from '@mui/material';

import {
	InputDataAction,
	setUpdatedData,
} from '../../store/action/InputDataAction';
import { RoundLoader } from '../RoundLoader/RoundLoader';

export const AddForm = ({
	inputTask,
	setInputTask,
	isUpdate,
	setIsUpdate,
	placeholder,
	updatedData,
}) => {
	const dispatch = useDispatch();
	const [submitLoading, setSubmitLoading] = useState(false);
	const [updatedLoading, setUpdatedLoading] = useState(false);

	const onSubmitHandler = () => {
		if (!inputTask) {
			alert('Please add some task in input field');
			return;
		}
		let taskDetail;

		taskDetail = {
			task: inputTask,
			completed: false,
			important: false,
		};

		dispatch(InputDataAction(taskDetail, setInputTask, setSubmitLoading));
	};
	const UpdateHandler = () => {
		let taskDetail = {
			task: inputTask,
			completed: updatedData.completed,
			important: updatedData.important,
		};
		dispatch(
			setUpdatedData(
				updatedData.docId,
				taskDetail,
				setInputTask,
				setIsUpdate,
				setUpdatedLoading
			)
		);
	};

	return (
		<>
			<Box
				sx={{
					width: '100%',
					backgroundColor: '#EAEAEA',
					p: 2,
					pb: 0,
					borderRadius: '5px',
					boxSizing: 'border-box',
				}}
			>
				<Input
					placeholder={placeholder || 'Add a task'}
					value={inputTask}
					onChange={e => setInputTask(e.target.value)}
					sx={{ backgroundColor: 'white', width: '100%', p: 1, pb: 0 }}
				/>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Box sx={{ mt: 2, px: 1 }}>
						{isUpdate ? (
							updatedLoading ? (
								<Button variant='text' sx={{ textTransform: 'none' }}>
									<RoundLoader customStyle={{ padding: '2px 8px' }} />
								</Button>
							) : (
								<Button
									variant='text'
									sx={{ textTransform: 'none' }}
									onClick={UpdateHandler}
								>
									Update
								</Button>
							)
						) : submitLoading ? (
							<Button variant='text' sx={{ textTransform: 'none' }}>
								<RoundLoader customStyle={{ padding: '2px 8px' }} />
							</Button>
						) : (
							<Button
								variant='text'
								onClick={onSubmitHandler}
								sx={{ textTransform: 'none' }}
							>
								Add
							</Button>
						)}
					</Box>
				</Box>
			</Box>
		</>
	);
};
