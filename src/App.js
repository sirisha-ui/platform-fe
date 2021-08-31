import React from 'react';
import "./App.css"; 
import Sidebar from "./components/Sidebar"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import { Dashboard } from "./components/Dashboard"; 
// import { 
// Services, 
// ServicesOne, 
// ServicesTwo, 
// ServicesThree, 
// } from "./components/Services"; 
// import { Events, EventsOne, EventsTwo } from "./components/Events"; 
// import Contact from "./components/ContactUs"; 
// import Support from "./components/Support"; 
import Reports from './components/Reports/Reports';
function App() { 
return ( 
	<Router> 
	<Sidebar /> 
	<Switch> 
		<Route path="/dashboard" exact component={Dashboard} /> 
		<Route path="/report" exact component={Reports} /> 
		{/* <Route path="/services" exact component={Services} />  */}
		{/* <Route path="/services/services1" exact component={ServicesOne} /> 
		<Route path="/services/services2" exact component={ServicesTwo} /> 
		<Route path="/services/services3" exact component={ServicesThree} /> 
		<Route path="/contact" exact component={Contact} /> 
		<Route path="/events" exact component={Events} /> 
		<Route path="/events/events1" exact component={EventsOne} /> 
		<Route path="/events/events2" exact component={EventsTwo} /> 
		<Route path="/support" exact component={Support} />  */}
	</Switch> 
	</Router> 
); 
} 

export default App; 
