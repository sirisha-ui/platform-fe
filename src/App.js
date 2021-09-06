import React from 'react';
import "./App.css"; 
import './assets/css/cms-styles.scss';
import { bindActionCreators } from "redux";
import { useDispatch,useSelector, connect } from 'react-redux';
import Sidebar from "./components/Sidebar"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Dashboard from "./components/Dashboard/dashboard";
//import { getsidebarClick } from './components/Dashboard/dashboardSlice';
// import Reports from './components/Reports/Reports';
 import Home from "./components/Home/Home";
import MainDashbord  from './components/MainDashbord';
function App() { 
return ( 
	<Router> 
	<Sidebar /> 
	<Switch> 
	<Route path="/" exact component={Home} /> 
		<Route path="/dashboard" exact component={MainDashbord} /> 
		<Route path="/report" exact component={MainDashbord} /> 
	</Switch> 
	</Router> 
); 
} 

  export default App;
  