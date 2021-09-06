import React from "react";
import Dashboard from "./Dashboard/dashboard";
import Reports from './Reports/Reports' 
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {setReportStatus,setDashboardStatus,setDashboardNavStatus,setReportNavStatus } from "../components/sidebar/sidebarSlice";
class MainDashbord extends React.Component{
    constructor(props){
        super(props);
    }
    dashbordNavClick =()=>{
        this.props.dispatch(setDashboardStatus(true))
        this.props.dispatch(setReportStatus(false))
    }
    reportNavClick =()=>{
        this.props.dispatch(setReportStatus(true))
        this.props.dispatch(setDashboardStatus(false))  
    }
    render(){
        let dashbordurl = window.location.href.split('/');
         if(dashbordurl[dashbordurl.length-1] == "dashboard"){
            this.props.dispatch(setDashboardStatus(true))
            if(this.props.reportNavStatus == true){
                this.props.dispatch(setReportNavStatus(true))
            }       
            this.props.dispatch(setDashboardNavStatus(true))
            this.props.dispatch(setReportStatus(false))
         }else if(dashbordurl[dashbordurl.length-1] == "report"){
            this.props.dispatch(setReportStatus(true))
            this.props.dispatch(setDashboardNavStatus(true))
            this.props.dispatch(setReportNavStatus(true))
            this.props.dispatch(setDashboardStatus(false))  
         }else{

         }
        console.log("dashboard", dashbordurl)
        console.log("report", this.props.reportStatus)
        console.log("dash",this.props.dashboardNavStatus)
        console.log("navreport", this.props.reportNavStatus)
        return (
            <>
            <div style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'290px'}}>
                { this.props.dashboardStatus == false ?
            <div className="CMS-page-tabs">
                                <ul>
                                    {/* {this.props.dashboardNavStatus == true &&
                                <li className={this.props.dashboardStatus == true ? 'active':""} onClick={()=>this.dashbordNavClick()}>
                                        <a href="#">DASHBOARD<span className="close"
                                                ><span
                                                className="material-icons md-18" data-icon="close" ></span></span></a>
                                    </li>} */}
                                    {
                                    this.props.reportNavStatus == true &&
                                    <li className={this.props.reportStatus == true ? 'active':""} onClick={()=>this.reportNavClick()}>
                                        <a href="#">REPORTS<span className="close"
                                                ><span
                                                className="material-icons md-18" data-icon="close"></span></span></a>
                                    </li>}
                                    {/* <li>
                                        <a href="CMS-playerActivity">PLAYER ACTIVITY<span className="close"><span className="material-icons md-18" data-icon="close"></span></span></a>
                                    </li>
                                    <li>
                                        <a href="CMS-betting">BETTING<span className="close"><span className="material-icons md-18" data-icon="close"></span></span></a>
                                    </li> */}
                                </ul>
                            </div> : ""
    }
            {this.props.dashboardStatus == true ? <Dashboard/>:
            this.props.reportStatus == true ? <Reports/> : <Dashboard/> }
            </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    console.log("state",state)
    return {
        reportStatus: state.sidebar.reportStatus,
        reportNavStatus: state.sidebar.reportNavStatus,
        dashboardStatus: state.sidebar.dashboardStatus,
        dashboardNavStatus: state.sidebar.dashboardNavStatus,
        displayValue: state.sidebar.displayValue,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        actions: bindActionCreators({
        }, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainDashbord);