import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './components/app/App';
import Thanks from './components/app/Thanks';
import Showcase from './components/app/Showcase';

import './style/style.css';
import './style/null.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	// <React.StrictMode>
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/thanks" element={<Thanks />} />
			<Route path="/showcase" element={<Showcase />} />
			<Route path="/:slug" element={<App />} />
		</Routes>
	</Router>
	// </React.StrictMode>
);
