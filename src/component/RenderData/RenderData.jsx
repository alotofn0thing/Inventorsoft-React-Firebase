import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import {
	FetchData,
	CompTask,
	UnCompTask,
} from '../../store/action/InputDataAction';
import { LinesLoader } from '../LinesLoader/LinesLoader';
import { DeleteDialog } from '../DeleteDialog/DeleteDialog';
import { RoundLoader } from '../RoundLoader/RoundLoader';

import { Box, Grid, Button, Checkbox, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './RenderData.scss';

export const RenderData = ({
	deleteHandler,
	deleteOpen,
	handleDeleteOpen,
	handleDeleteClose,
	setClickedItem,
	setInputTask,
	setIsUpdate,
	taskDeleteLoading,
	setCheck,
	setUpdatedData,
	compTaskLoading,
	setCompTaskLoading,
	loadingId,
	setLoadingId,
}) => {
	const dispatch = useDispatch();
	const tasks = useSelector(store => store.InputDataReducer.tasks);
	const [taskLoading, setTaskLoading] = useState(false);
	const [renderTask, setRenderTask] = useState(true);
	const [renderCompTask, setRenderCompTask] = useState(false);

	useEffect(() => {
		const task = tasks.filter(item => {
			return item.completed === false;
		});
		if (task.length) {
			setRenderTask(false);
		} else {
			setRenderTask(true);
		}
	});

	useEffect(() => {
		const task = tasks.filter(item => {
			return item.completed === true;
		});
		if (task.length) {
			setRenderCompTask(true);
		} else {
			setRenderCompTask(false);
		}
	});

	useEffect(() => {
		dispatch(FetchData(setTaskLoading));
	}, []);

	const completedHandler = item => {
		setClickedItem(item);
		let completedTaskData = {
			task: item.task,
			completed: true,
			important: item.important,
		};
		dispatch(
			CompTask(
				item.docId,
				completedTaskData,
				setCompTaskLoading,
				setLoadingId,
				setCheck
			)
		);
	};

	const unCompletedHandler = item => {
		setClickedItem(item);
		let unCompletedTaskData = {
			task: item.task,
			completed: false,
			important: item.important,
		};
		dispatch(
			UnCompTask(
				item.docId,
				unCompletedTaskData,
				setCompTaskLoading,
				setLoadingId,
				setCheck
			)
		);
	};

	const updateHandler = item => {
		setUpdatedData(item);
		setInputTask(item.task);
		setIsUpdate(true);
	};

	if (taskLoading) {
		return <LinesLoader />;
	}

	return (
		<>
			<Box sx={{ px: 4, overflowY: 'auto' }}>
				{renderTask ? null : (
					<Box component='h4' sx={{ my: 1 }}>
						Tasks
					</Box>
				)}
				{tasks.map(item => {
					return item.completed ? null : (
						<Grid
							key={item.docId}
							className='hoverColor'
							container
							sx={{
								borderBottom: 1,
								borderColor: '#e0e0e0',
								wordWrap: 'break-word',
								minHeight: 'fit-content',
							}}
						>
							<Grid item xs={1} sx={{ minWidth: '30px', textAlign: 'right' }}>
								{compTaskLoading && item.docId === loadingId ? (
									<RoundLoader
										customStyle={{
											paddingTop: '8px',
											paddingRight: '8px',
											width: 'fit-content',
											float: 'right',
										}}
									/>
								) : (
									<Checkbox
										onChange={() => completedHandler(item)}
										sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
									/>
								)}
							</Grid>
							<Grid
								item
								xs={5}
								sm={8}
								sx={{ color: 'black', textAlign: 'left' }}
							>
								<Box>
									<Button
										className='hoverColor'
										sx={{
											color: 'black',
											textTransform: 'none',
											display: 'inline-block',
											backgroundColor: 'inherit',
											border: 0,
											width: '100%',
											padding: '7px 7px',
											textAlign: 'left',
										}}
									>
										<p>{item.task}</p>
									</Button>
								</Box>
							</Grid>
							<Grid
								item
								xs={5}
								sm={3}
								sx={{ textAlign: 'right', minWidth: 'fit-content' }}
							>
								<IconButton
									aria-label='delete'
									color='primary'
									onClick={() => updateHandler(item)}
								>
									<EditIcon sx={{ fontSize: 20 }} />
								</IconButton>

								<DeleteDialog
									deleteHandler={deleteHandler}
									taskDeleteLoading={taskDeleteLoading}
									handleDeleteOpen={() => handleDeleteOpen(item)}
									handleDeleteClose={handleDeleteClose}
									deleteOpen={deleteOpen}
								/>
							</Grid>
						</Grid>
					);
				})}

				<Box>
					{renderCompTask && (
						<Box component='h4' sx={{ mb: 1, mt: 2 }}>
							Completed
						</Box>
					)}
					{tasks.map(item => {
						return (
							item.completed && (
								<Grid
									key={item.docId}
									className='hoverColor'
									container
									sx={{
										borderBottom: 1,
										wordWrap: 'break-word',
										borderColor: '#e0e0e0',
										minHeight: 'fit-content',
									}}
								>
									<Grid
										item
										xs={1}
										sx={{ minWidth: '30px', textAlign: 'right' }}
									>
										{compTaskLoading && item.docId === loadingId ? (
											<RoundLoader
												customStyle={{
													paddingTop: '8px',
													paddingRight: '8px',
													width: 'fit-content',
													float: 'right',
												}}
											/>
										) : (
											<Checkbox
												onChange={() => unCompletedHandler(item)}
												defaultChecked
												sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
											/>
										)}
									</Grid>
									<Grid
										item
										xs={8}
										sm={9}
										sx={{ color: 'black', textAlign: 'left' }}
									>
										<Box>
											<Button
												className='hoverColor'
												sx={{
													display: 'inline-block',
													textTransform: 'none',
													backgroundColor: 'inherit',
													border: 0,
													color: 'black',
													width: '100%',
													padding: '7px 7px',
													textAlign: 'left',
												}}
											>
												<p className='checked'>{item.task}</p>
											</Button>
										</Box>
									</Grid>
									<Grid
										item
										xs={2}
										sx={{ minWidth: 'fit-content', textAlign: 'right' }}
									>
										<DeleteDialog
											deleteHandler={deleteHandler}
											taskDeleteLoading={taskDeleteLoading}
											handleDeleteOpen={() => handleDeleteOpen(item)}
											handleDeleteClose={handleDeleteClose}
											deleteOpen={deleteOpen}
										/>
									</Grid>
								</Grid>
							)
						);
					})}
				</Box>
			</Box>
		</>
	);
};
