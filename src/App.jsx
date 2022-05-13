import { useState, useEffect } from 'react';
import { Routing } from './routing/Routing';
import { useDispatch } from 'react-redux';
import { GetCurrentUser } from './store/action/AuthAction';

const App = () => {
	const [loader, setLoader] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GetCurrentUser(setLoader));
	}, []);
	return <>{loader ? <div>Fetching User ......</div> : <Routing />}</>;
};

export default App;
