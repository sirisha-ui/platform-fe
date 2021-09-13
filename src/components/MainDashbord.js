import React from "react";
import Dashboard from "./Dashboard/dashboard";
import Reports from './Reports/Reports' ;
import PlayerSearch  from "./Players/playersSearch";
import NewPlayer from "./NewPlayer/newPlayer";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom"; 
import {setReportStatus,setDashboardStatus,setDashboardNavStatus,setReportNavStatus,setPlayerSearchStatus,setPlayerSearchNavStatus,setSidebarListItems,setNewplayerStatus,setNewplayerNavStatus } from "../components/sidebar/sidebarSlice";
class MainDashbord extends React.Component{
    constructor(props){
        super(props);
      this.state={
          listItems:[],
          show_button: true
      }
    this.navFunction= this.navFunction.bind(this)
    this.navLinksClosedFunction = this.navLinksClosedFunction.bind(this)
    }
   
    componentDidMount (){
        this.navFunction();
    }
    
    dashFunction(){
      this.props.history.push("/dashboard");
    }
    reportFunction(item){
        console.log("ll",item)
        if(item ==="REPORTS"){
        this.props.history.push("/report");
        this.props.dispatch(setReportStatus(true))
        this.props.dispatch(setPlayerSearchStatus(false))
        this.props.dispatch(setNewplayerStatus(false))
        }else if(item === "PLAYERSEARCH"){
            this.props.history.push("/playersearch");
            this.props.dispatch(setReportStatus(false))
            this.props.dispatch(setNewplayerStatus(false))
            this.props.dispatch(setPlayerSearchStatus(true))
        }else if(item === "NEWPLAYERS"){
            this.props.history.push("/newplayer");
            this.props.dispatch(setNewplayerStatus(true))
            this.props.dispatch(setReportStatus(false))
            this.props.dispatch(setPlayerSearchStatus(false))
        }
        
    }
    playerFunction(){
        this.props.history.push("/playersearch");
    }
    
    dashbordNavClick =()=>{
        this.props.dispatch(setDashboardStatus(true))
        this.props.dispatch(setReportStatus(false))
        this.props.dispatch(setPlayerSearchStatus(false))
        this.props.dispatch(setNewplayerStatus(false))
    }
    reportNavClick =()=>{
        this.props.dispatch(setReportStatus(true))
        this.props.dispatch(setDashboardStatus(false))  
        this.props.dispatch(setPlayerSearchStatus(false))
        this.props.dispatch(setNewplayerStatus(false))
    }
    playerNavClick =()=> {
        this.props.dispatch(setPlayerSearchStatus(true))
        this.props.dispatch(setDashboardStatus(false))
        this.props.dispatch(setReportStatus(false))
        this.props.dispatch(setNewplayerStatus(false))
    }
    newplayerNavClick =()=> {
        this.props.dispatch(setNewplayerStatus(true))
        this.props.dispatch(setPlayerSearchStatus(false))
        this.props.dispatch(setDashboardStatus(false))
        this.props.dispatch(setReportStatus(false))
    }
    navFunction =()=>{
        let url = this.props.match.path.split("/");
        if(url[1]=="report"){
            const report = ["Report"];
            this.setState({listItems:[...report]})

        }
        if(url[1] == "playersearch"){
            const player = ["PlayerSearch"];
            this.setState({listItems:[...player]})

        }
        if(url[1] == "newPlayer"){
            const newplayer = ["NewPlayer"];
            this.setState({listItems:[...newplayer]})

        }

    }
    navLinksClosedFunction= (item) =>{
        console.log('click',item)
   if(item === "REPORTS"){
      this.props.dispatch(setReportNavStatus(true))
      this.props.dispatch(setReportStatus(true))
      this.props.dispatch(setPlayerSearchNavStatus(false))
      this.props.dispatch(setPlayerSearchStatus(false))
   }else if(item === "PLAYERSEARCH"){
      this.props.dispatch(setPlayerSearchNavStatus(true))
    this.props.dispatch(setPlayerSearchStatus(true))
    this.props.dispatch(setReportNavStatus(false))
    this.props.dispatch(setReportStatus(false))
    
   }
    }
    render(){
       // console.log("path",this.props.match.path)
         console.log("status",this.props.sidebarListItems.length)
        //console.log("dashboard", dashbordurl)
        console.log("report", this.props.reportStatus)
        console.log("dash",this.props.dashboardNavStatus)
        console.log("navreport", this.props.reportNavStatus)
        console.log("player", this.props.playerSearchNavStatus)
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
                                   this.props.sidebarListItems.length > 0 && this.props.sidebarListItems.map((item,index)=> {return (
                                    <>   
                                    <li key={index} className={this.props.reportStatus == true && item=="REPORTS" ||  this.props.playerSearchStatus == true && item=="PLAYERSEARCH" || this.props.newplayerStatus == true && item == "NEWPLAYERS"? 'active':""} >
                                       
                                       <span to="#" onClick={()=>this.reportFunction(item)}>{item} 
                                          </span>
                                          <span className="close"><span className="material-icons md-18" data-icon="close" onClick={()=>this.navLinksClosedFunction(item)}></span> </span>
                                   
                                    </li>
                                    </>
                                    )})}
                                    {/* {
                                    this.props.playerSearchNavStatus == true &&
                                    <li className={this.props.playerSearchStatus == true ? 'active':""} onClick={()=>this.playerNavClick()}>
                                        <Link to="#" onClick={()=>this.playerFunction()}>PLAYERSEARCH<span className="close"
                                                ><span
                                                className="material-icons md-18" data-icon="close"></span></span></Link>
                                    </li>} */}
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
            this.props.reportStatus == true ? <Reports/> :
            this.props.playerSearchStatus == true ? <PlayerSearch/> :
            this.props.newplayerStatus == true ? <NewPlayer/> :
            <Dashboard/> }
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
        playerSearchStatus: state.sidebar.playerSearchStatus,
        playerSearchNavStatus: state.sidebar.playerSearchNavStatus,
        sidebarListItems: state.sidebar.sidebarListItems,
        newplayerStatus: state.sidebar.newplayerStatus,
        newplayerNavStatus: state.sidebar.newplayerNavStatus,
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