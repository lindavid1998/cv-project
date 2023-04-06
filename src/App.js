import Overview from './components/Overview';
import Section from './components/Section';
import './styles/App.css';

function App() {
	return (
		<div className='App'>
			<Overview />

			<Section
				title='Education'
				formFields={{
					name: '',
					degree: '',
					start: '',
					end: '',
					description: '',
				}}
			/>

			<Section
				title='Work'
				formFields={{
					company: '',
					title: '',
					start: '',
					end: '',
					description: '',
				}}
			/>

			<Section
				title='Skills'
				formFields={{
					skill: '',
				}}
			></Section>
		</div>
	);
}

export default App;
