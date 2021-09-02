import React from 'react';
import "./App.css"; 
import './assets/css/cms-styles.css';

import Sidebar from "./components/Sidebar"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import { Dashboard } from "./components/Dashboard"; 
import Reports from './components/Reports/Reports';
function App() { 
return ( 
	<Router> 
	<Sidebar /> 
	<Switch> 
		<Route path="/dashboard" exact component={Dashboard} /> 
		<Route path="/report" exact component={Reports} /> 
	</Switch> 
	</Router> 
); 
} 

export default App; 
