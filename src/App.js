import React from 'react';
import { Route } from 'react-router-dom';

// local imports
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
	return (
		<div className="App">
			<>
				{/* Nav component on every page */}
				<Route path="/">
					<NavBar />
				</Route>
				{/* Intro component (hero section) */}
				<Route exact path="/">
					<About />
				</Route>
				{/* Skills component with skills and role interests */}
				{/* Main home component that holds project list on root route */}
				{/* Dynamic route for each project to view more details */}
				{/* Contact page with a form */}
				<Route exact path="/contact">
					<Contact />
				</Route>
			</>
		</div>
	);
}

export default App;
