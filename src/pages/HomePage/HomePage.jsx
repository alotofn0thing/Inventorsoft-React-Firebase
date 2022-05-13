import { useState } from 'react';
import { Navigation } from '../../component/Navigation/Navigation';
import { Box } from '@mui/material';
import { AddForm } from '../../component/AddForm/AddForm';
import { RenderData } from '../../component/RenderData/RenderData';

import { useDispatch } from 'react-redux';
import { TaskDeleteHandler } from '../../store/action/InputDataAction';

export const HomePage = () => {
	const [inputTask, setInputTask] = useState('');
	const [isUpdate, setIsUpdate] = useState(false);

	const [check, setCheck] = useState(true);
	const [updatedData, setUpdatedData] = useState('');
	const [compTaskLoading, setCompTaskLoading] = useState(false);
	const [loadingId, setLoadingId] = useState(false);
	const [taskDeleteLoading, setTaskDeleteLoading] = useState(false);
	const [clickedItem, setClickedItem] = useState('');
	const [taskDeleteId, setTaskDeleteId] = useState(0);

	const dispatch = useDispatch();

	const [deleteOpen, setDeleteOpen] = useState(false);

	const handleDeleteOpen = item => {
		setDeleteOpen(true);
		setTaskDeleteId(item.docId);
	};

	const handleDeleteClose = () => {
		setDeleteOpen(false);
	};

	const deleteHandler = () => {
		dispatch(
			TaskDeleteHandler(
				taskDeleteId,

				setTaskDeleteLoading,
				handleDeleteClose
			)
		);
	};
	return (
		<>
			<Navigation />
			<Box sx={{ height: '100vh', width: '100vw', boxSizing: 'border-box' }}>
				<Box sx={{ height: '100%', boxSizing: 'border-box', display: 'flex' }}>
					<Box
						sx={{
							height: '100%',
							px: 1,
							width: '50%',
							boxSizing: 'border-box',
							flex: '1 0 0',
							pt: 8,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Box sx={{ display: 'flex', boxSizing: 'border-box' }}>
							<Box
								component='span'
								sx={{
									paddingTop: '11px',
									pl: 1,
									typography: 'h5',
									display: 'inline-block',
								}}
							>
								All Tasks
							</Box>
						</Box>
						<Box sx={{ boxSizing: 'border-box' }}>
							<AddForm
								updatedData={updatedData}
								inputTask={inputTask}
								setInputTask={setInputTask}
								isUpdate={isUpdate}
								setIsUpdate={setIsUpdate}
							/>
						</Box>
						<Box
							sx={{ boxSizing: 'border-box', overflow: 'auto', height: '100%' }}
						>
							<RenderData
								deleteHandler={deleteHandler}
								deleteOpen={deleteOpen}
								handleDeleteOpen={handleDeleteOpen}
								handleDeleteClose={handleDeleteClose}
								setClickedItem={setClickedItem}
								setUpdatedData={setUpdatedData}
								taskDeleteLoading={taskDeleteLoading}
								setTaskDeleteLoading={setTaskDeleteLoading}
								loadingId={loadingId}
								setLoadingId={setLoadingId}
								compTaskLoading={compTaskLoading}
								setCompTaskLoading={setCompTaskLoading}
								setInputTask={setInputTask}
								setIsUpdate={setIsUpdate}
								setCheck={setCheck}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};
