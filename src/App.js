import Overview from './components/Overview';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import './styles/App.css';

function App() {
	return (
		<div className="App">
			<Overview></Overview>
			<Education></Education>
			<Work></Work>
			<Skills></Skills>
		</div>
	);
}

export default App;
