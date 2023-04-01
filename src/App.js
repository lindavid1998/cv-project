import Overview from './components/Overview';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Section from './components/Section';
import './styles/App.css';

function App() {
	return (
		<div className="App">
			<Overview></Overview>
			<Section
				title="Test"
				formFields={{
					name: '',
					degree: '',
					start: '',
					end: '',
					description: '',
				}}
			/>
			<Education></Education>
			<Work></Work>
			<Skills></Skills>
		</div>
	);
}

export default App;
