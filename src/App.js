import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Signin from './components/Signin/Signin';
import Search from './components/Search/Search';
import Fetch from './components/Fetch/Fetch';
import Act from './components/Act/Act';

function App() {
	const [value, setValue] = React.useState('');
	const handleChange = (e) => setValue(e.target.value);
	return (
		<div className="App">
			<Counter />
			<Search
				value={value}
				onChange={handleChange}
			/>
			<Fetch />
			<Act />
			<Signin />
		</div>
	);
}

export default App;
