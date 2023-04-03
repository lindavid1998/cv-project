import Overview from './components/Overview';
import Skills from './components/Skills';
import Section from './components/Section';
import './styles/App.css';

function App() {
	return (
		<div className="App">
			<Overview></Overview>
			<Section
				title="Education"
				formFields={{
					name: '',
					degree: '',
					start: '',
					end: '',
					description: '',
				}}
			/>
			<Section
				title="Work"
				formFields={{
					company: '',
					title: '',
					start: '',
					end: '',
					description: '',
				}}
			/>
			<Skills></Skills>
		</div>
	);
}

export default App;
