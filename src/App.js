import React from 'react';
import "./App.css"; 
import './assets/css/cms-styles.scss';
import { bindActionCreators } from "redux";
import { useDispatch,useSelector, connect } from 'react-redux';
import Sidebar from "./components/Sidebar"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Dashboard from "./components/Dashboard/dashboard";
//import { getsidebarClick } from './components/Dashboard/dashboardSlice';
 import Reports from './components/Reports/Reports';
 import Home from "./components/Home/Home";
 import PlayerSearch from './components/Players/playersSearch';
 import PlayerActivity from './components/PlayerActivity/playerActivity';
 import NewPlayer from './components/NewPlayer/newPlayer';
import MainDashbord  from './components/MainDashbord';
import { getEvenId} from '../src/components/AppSlice';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			listItems:[]
		}
	  }
	
// function App() { 
	render(){
		 //var path = window.location.pathname;
        // path = path.split("/");
		// path = path.join("/")
		// props.history.push(path)
		// }
//  console.log('location',path)
//  console.log('patttt',this.props)
return ( 
	<Router> 
	<Sidebar /> 
	<div>
	<Switch> 
	<Route path="/" exact component={Home} /> 
		<Route path="/dashboard" render={props => <Dashboard {...props} />}/> 
		<Route path="/report" render={props => <Reports {...props} />}/>
		<Route path="/playersearch" render={props => <PlayerSearch {...props} />}/>
		<Route path="/newplayer" render={props => <NewPlayer {...props} />}/>
		<Route path="/playerActivity" render={props => <PlayerActivity {...props} />}/>
	</Switch> 
	</div>
	</Router> 
); 
	}
} 
function mapDispatchToProps(dispatch) {
	return {
	  dispatch,
	  actions: bindActionCreators({
		getEvenId,
	  }, dispatch)
	}
  }
  export default connect(mapDispatchToProps)(App);
  