import { db } from '../../config/Firebase';

export const FetchData = setTaskLoading => async dispatch => {
	setTaskLoading(true);
	try {
		let taskData = await db.collection('todo').get();
		let task = [];

		taskData.forEach(doc => {
			task.push({
				docId: doc.id,
				...doc.data(),
			});
		});

		dispatch({
			type: 'FATCHDATA',
			payload: task,
		});
	} catch (error) {
		console.error(error);
	} finally {
		setTaskLoading(false);
	}
};

export const InputDataAction =
	(inputTask, setInputTask, setSubmitLoading) => async dispatch => {
		setSubmitLoading(true);
		try {
			let dataRes = await db.collection('todo').add(inputTask);
			let docId = dataRes.id;
			setInputTask('');
			dispatch({
				type: 'INPUTDATA',
				payload: { ...inputTask, docId },
			});
		} catch (error) {
			console.error(error);
		} finally {
			setSubmitLoading(false);
		}
	};

export const CompTask =
	(
		docId,
		completedTaskData,
		setCompTaskLoading,
		setLoadingId,
		setRightBarCheck
	) =>
	async dispatch => {
		try {
			setCompTaskLoading(true);
			setLoadingId(docId);
			await db.collection('todo').doc(docId).update(completedTaskData);

			setRightBarCheck(false);

			dispatch({
				type: 'COMPLETEDTASK',
				payload: { ...completedTaskData, docId },
			});
		} catch (error) {
			console.error(error);
		} finally {
			setCompTaskLoading(false);
		}
	};
export const UnCompTask =
	(
		docId,
		unCompletedTaskData,
		setCompTaskLoading,
		setLoadingId,
		setRightBarCheck
	) =>
	async dispatch => {
		setCompTaskLoading(true);
		setLoadingId(docId);
		try {
			await db.collection('todo').doc(docId).update(unCompletedTaskData);

			setRightBarCheck(true);
			dispatch({
				type: 'UNCOMPLETEDTASK',
				payload: { ...unCompletedTaskData, docId },
			});
		} catch (error) {
			console.error(error);
		} finally {
			setCompTaskLoading(false);
		}
	};
export const TaskDeleteHandler =
	(deletedId, setTaskDeleteLoading, handleDeleteClose) => async dispatch => {
		setTaskDeleteLoading(true);
		try {
			await db.collection('todo').doc(deletedId).delete();

			handleDeleteClose();
			dispatch({
				type: 'DELETEHANDLER',
				payload: deletedId,
			});
		} catch (error) {
			console.error(error);
		} finally {
			setTaskDeleteLoading(false);
		}
	};

export const setUpdatedData =
	(docId, updatedData, setInputTask, setIsUpdate, setUpdatedLoading) =>
	async dispatch => {
		setUpdatedLoading(true);
		try {
			await db.collection('todo').doc(docId).update(updatedData);
			setInputTask('');

			setIsUpdate(false);
			dispatch({
				type: 'UPDATEHANDLER',
				payload: { ...updatedData, docId },
			});
		} catch (error) {
			console.error(error);
		} finally {
			setUpdatedLoading(false);
		}
	};

export const ImportantTask =
	(docId, ImportanttaskData, setImportantLoading) => async dispatch => {
		try {
			setImportantLoading(true);
			await db.collection('todo').doc(docId).update(ImportanttaskData);

			dispatch({
				type: 'IMPORTANT',
				payload: { ...ImportanttaskData, docId },
			});
		} catch (error) {
			console.error(error);
		} finally {
			setImportantLoading(false);
		}
	};
