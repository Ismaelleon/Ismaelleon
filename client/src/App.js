import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Import routes
import Home from './routes/Home';
import Work from './routes/Work';
import About from './routes/About';
import Contact from './routes/Contact';

function App () {
	return (
		<Router>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/work">
				<Work />
			</Route>
			<Route exact path="/about">
				<About />
			</Route>
			<Route exact path="/contact">
				<Contact />
			</Route>
		</Router>
	);
}

export default App;
