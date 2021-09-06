import React from 'react';
import { connect } from 'react-redux';
import Sidebar from "./Sidebar"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Dashboard from "./Dashboard/dashboard";
import Reports from './Reports/Reports' 
import Home from "./Home/Home";
class RouterCmp extends React.Component{
    render(){
        console.log("dashboard", this.props.dashboardStatus)
        console.log("report", this.props.reportStatus)
        return(
        <Router> 
	<Sidebar /> 
	<Switch> 
	<Route path="/" exact component={Home} /> 
    { this.props.dashboardStatus === true ?
		<Route path="/dashboard" exact component={Dashboard} /> 
        :
        this.props.reportStatus === true ?
		<Route path="/report" exact component={Reports} /> 
    : ""}
	</Switch> 
	</Router> );
    }
}

function mapStateToProps(state) {
    console.log("state",state)
    return {
        reportStatus: state.sidebar.reportStatus,
        //reportNavStatus: state.sidebar.reportNavStatus,
        dashboardStatus: state.sidebar.dashboardStatus,
        //dashboardNavStatus: state.sidebar.dashboardNavStatus,
       // displayValue: state.sidebar.displayValue,
    };
}

export default connect(mapStateToProps)(RouterCmp)