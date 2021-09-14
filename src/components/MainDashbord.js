import React from "react";
import Dashboard from "./Dashboard/dashboard";
import Reports from './Reports/Reports' ;
import PlayerSearch  from "./Players/playersSearch";
import NewPlayer from "./NewPlayer/newPlayer";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom"; 
import {setSidebarTabs } from "../components/sidebar/sidebarSlice";
class MainDashbord extends React.Component{
    constructor(props){
        super(props);
      this.state={
        //   listItems:[],
      }
    }
   
//    
    render(){
    //    // console.log("path",this.props.match.path)
    //      console.log("status",this.props.sidebarListItems.length)
    //     //console.log("dashboard", dashbordurl)
    //     console.log("report", this.props.reportStatus)
    //     console.log("dash",this.props.dashboardNavStatus)
    //     console.log("navreport", this.props.reportNavStatus)
    //     console.log("player", this.props.playerSearchNavStatus)
        return (
            <>
            <div style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'290px'}}>
                { this.props.dashboardStatus == false ?
            <div className="CMS-page-tabs">
                                <ul>
                                  
                                    
                                    {
                                   this.props.sidebarTabs.length > 0 && this.props.sidebarTabs.map((item,index)=> {return (
                                    <>   
                                    <li key={index} className={this.props.reportStatus == true && item=="REPORTS" ||  this.props.playerSearchStatus == true && item=="PLAYERSEARCH" || this.props.newplayerStatus == true && item == "NEWPLAYERS"? 'active':""} >
                                       
                                       <span to="#" onClick={()=>this.reportFunction(item)}>{item} 
                                          </span>
                                          <span className="close"><span className="material-icons md-18" data-icon="close" onClick={()=>this.navLinksClosedFunction(item)}></span> </span>
                                   
                                    </li>
                                    </>
                                    )})}
                                  
                                </ul>
                            </div> : ""
    }
           
            </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    console.log("state",state)
    return {
        displayValue: state.sidebar.displayValue,
        sidebarTabs: state.sidebar.sidebarTabs,
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