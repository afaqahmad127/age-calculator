import React, {
	useEffect,
	useInsertionEffect,
	useLayoutEffect,
	useState,
} from 'react';
import { Container } from 'react-bootstrap';
import { MyForm } from './component';
function App() {
	const [state, setState] = useState('');
	const settingState = () => {
		setState('insert');
	};
	useInsertionEffect(() => {
		console.log('USE INSERTION');
	}, []);
	useEffect(() => {
		console.log('USE EFFECT');
		settingState();
	}, []);
	useLayoutEffect(() => {
		console.log('USE LAYOUT EFFECT');
	}, []);
	console.log(state);
	return (
		<>
			<Container
				fluid
				className="d-flex"
				style={{
					height: '100vh',
				}}
			>
				<div
					className="d-flex justify-content-center m-auto shadow p-3 bg-white"
					style={{
						borderRadius: '10px 10px 80px 10px',
					}}
				>
					<MyForm />
				</div>
			</Container>
		</>
	);
}

export default App;
