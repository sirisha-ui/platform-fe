import React from "react"; 
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"; 
import styled from "styled-components"; 
import truewavelogoimage from "../assets/images/truewave-logo.svg";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import MainDashbord  from './MainDashbord';
import { useHistory } from "react-router-dom";
import { setReportNavStatus, setReportStatus,setDashboardStatus,setDashboardNavStatus,setPlayerSearchStatus,setPlayerSearchNavStatus,setSidebarListItems, setNewplayerStatus, setNewplayerNavStatus } from "./sidebar/sidebarSlice";
import { FaDiceFive } from "react-icons/fa";
const SidebarLink = styled(Link)` 
// display: flex; 
// color: #e1e9fc; 
// justify-content: space-between; 
// align-items: center; 
// padding: 20px; 
// list-style: none; 
// height: 60px; 
// text-decoration: none; 
// font-size: 18px; 

// &:hover { 
// 	background: #252831; 
// 	border-left: 4px solid green; 
// 	cursor: pointer; 
// } 
`; 

const SidebarLabel = styled.span` 
margin-left: 16px; 
`; 

const DropdownLink = styled(Link)` 
background: #252831; 
height: 60px; 
padding-left: 3rem; 
display: flex; 
align-items: center; 
text-decoration: none; 
color: #f5f5f5; 
font-size: 18px; 

&:hover { 
	background: green; 
	cursor: pointer; 
} 
`; 
class SubMenu extends React.Component{
// const SubMenu = ({ item }) => { 
// const [subnav, setSubnav] = useState(false); 

// const showSubnav = () => setSubnav(!subnav); 

constructor(props){
    super(props);
    this.state ={
        collapsed: '',
        listItem: []
    }
    this.allCollapsed = this.allCollapsed.bind(this);
    this.dashbordClick = this.dashbordClick.bind(this);
}
//  dashFunction(){
//         let history = useHistory();
//        history.push("/dashboard");
//     }
//     reportFunction(){
//         let history = useHistory();
//         history.push("/report");
//     }
//     playerFunction(){
//         let history = useHistory();
//         history.push("/playersearch");
//     }

dashbordClick =(event)=>{
    this.props.dispatch(setDashboardStatus(true))
    this.props.dispatch(setDashboardNavStatus(true))
    this.props.dispatch(setReportStatus(false))
    this.props.dispatch(setPlayerSearchStatus(false))
    this.props.dispatch(setPlayerSearchNavStatus(false))
    this.props.dispatch(setReportNavStatus(false))
    this.props.dispatch(setNewplayerStatus(false))
    this.props.dispatch(setNewplayerNavStatus(false))
    let ele = event.currentTarget.parentNode.parentNode.parentNode;
   this.setState({collapsed:ele});
   //console.log("ele",this.state.collapsed)
  
}
reportClick =()=>{
    this.props.dispatch(setReportStatus(true))
    this.props.dispatch(setReportNavStatus(true))
    this.props.dispatch(setDashboardStatus(false)) 
    this.props.dispatch(setPlayerSearchStatus(false))
    this.props.dispatch(setNewplayerStatus(false))
    if(this.props.playerSearchNavStatus == true){
        const report= ["PLAYERSEARCH","REPORTS"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       if(this.props.newplayerNavStatus == true){
        const report= ["NEWPLAYERS","PLAYERSEARCH","REPORTS"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       }
    }
    else if (this.props.newplayerNavStatus == true){
        const report= ["NEWPLAYERS","REPORTS"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       if(this.props.playerSearchNavStatus == true){
        const report= ["PLAYERSEARCH","NEWPLAYERS","REPORTS"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       }
     }
    // else if(this.props.newplayerNavStatus == true){
    //     const report= ["NEWPLAYERS","REPORTS"];
    //     this.props.dispatch(setSidebarListItems([...report]))
    // }
    // else if(this.props.playerSearchNavStatus && this.props.newplayerNavStatus){
    //     const report= ["PLAYERSEARCH","NEWPLAYERS","REPORTS"];
    //     this.props.dispatch(setSidebarListItems([...report]))
    // }
    // else if(this.props.newplayerNavStatus && this.props.playerSearchNavStatus){
    //     const report= ["NEWPLAYERS","PLAYERSEARCH","REPORTS"];
    //     this.props.dispatch(setSidebarListItems([...report]))
    // }
    else{
        const report= ["REPORTS"];
       // this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([report]))
    }
    
}
playerClick =()=> {
    this.props.dispatch(setPlayerSearchStatus(true))
    this.props.dispatch(setPlayerSearchNavStatus(true))
    this.props.dispatch(setDashboardStatus(false))
    this.props.dispatch(setReportStatus(false)) 
    this.props.dispatch(setNewplayerStatus(false))
    //const report= "Player"
    if(this.props.reportNavStatus == true){
        const report= ["REPORTS","PLAYERSEARCH"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       if(this.props.newplayerNavStatus == true){
        const report= ["NEWPLAYERS","REPORTS","PLAYERSEARCH"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       }
    }
    else if (this.props.newplayerNavStatus == true){
        const report= ["NEWPLAYERS","PLAYERSEARCH"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       if(this.props.reportNavStatus == true){
        const report= ["NEWPLAYERS","REPORTS","PLAYERSEARCH"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       }
     }
    
    // else if(this.props.newplayerNavStatus == true){
    //     const report= ["NEWPLAYERS","PLAYERSEARCH"];
    //     this.props.dispatch(setSidebarListItems([...report]))
    // }
    // else if(this.props.reportNavStatus && this.props.newplayerNavStatus){
    //     const report= ["REPORTS","NEWPLAYERS","PLAYERSEARCH"];
    //     this.props.dispatch(setSidebarListItems([...report]))
    // }
    // else if(this.props.newplayerNavStatus && this.props.reportNavStatus){
    //     const report= ["NEWPLAYERS","REPORTS","PLAYERSEARCH"];
    //     this.props.dispatch(setSidebarListItems([...report]))
    // }
    else{
        const report= ["PLAYERSEARCH"];
       // this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([report]))
    }
    
}

newPlayerClick =()=> {
    
    this.props.dispatch(setNewplayerStatus(true))
    this.props.dispatch(setNewplayerNavStatus(true))
    this.props.dispatch(setPlayerSearchStatus(false))
    this.props.dispatch(setDashboardStatus(false))
    this.props.dispatch(setReportStatus(false)) 
    //const report= "Player"
    if(this.props.reportNavStatus == true){
        const report= ["REPORTS","NEWPLAYERS"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       if(this.props.playerSearchNavStatus == true){
        const report= ["REPORTS","PLAYERSEARCH","NEWPLAYERS"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       
       }
    }
      else if (this.props.playerSearchNavStatus == true){
        const report= ["PLAYERSEARCH","NEWPLAYERS"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       if(this.props.reportNavStatus == true){
        const report= ["PLAYERSEARCH","REPORTS","NEWPLAYERS"];
        //this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([...report]))
       }
     }
    //  else if(this.props.reportNavStatus && this.props.playerSearchNavStatus){
    //     const report= ["REPORTS","PLAYERSEARCH","NEWPLAYERS"];
    //     //this.setState({listItem: [...report]})
    //    this.props.dispatch(setSidebarListItems([...report]))
    //  }
    //  else if(this.props.playerSearchNavStatus && this.props.reportNavStatus){
    //     const report= ["PLAYERSEARCH","REPORTS","NEWPLAYERS"];
    //     //this.setState({listItem: [...report]})
    //    this.props.dispatch(setSidebarListItems([...report]))
    //  }
    else{
        const report= ["NEWPLAYERS"];
       // this.setState({listItem: [...report]})
       this.props.dispatch(setSidebarListItems([report]))
    }
    
}
allCollapsed =(event)=>{
    let ele = event.currentTarget.parentNode.parentNode.parentNode.parentNode;

    ReactDOM.findDOMNode(ele).classList.toggle('collapsed');
    //console.log("parent",ele.target)

// switch (this.state.collapsed){
//     case true:
//     this.setState({collapsed:false})
//     break;
//     case false:
//         this.setState({collapsed:true})
//         break;
        
// }

}
render(){
    console.log("re reportNavStatus",this.props.reportNavStatus)
    console.log("re playerSearchNavStatus",this.props.playerSearchNavStatus)
    console.log("re newplayerNavStatus",this.props.newplayerNavStatus)
    // console.log("re playerSearchNavStatus & newplayerNavStatus",this.props.playerSearchNavStatus && this.props.newplayerNavStatus)
    // console.log("re",this.props.newplayerNavStatus && this.props.playerSearchNavStatus)
    // console.log("playerClick rep,newplay",this.props.reportNavStatus && this.props.newplayerNavStatus)
    
    // console.log("pla newplay,repornav",this.props.newplayerNavStatus && this.props.reportNavStatus)
    // console.log("newplayer repnav,playersearchnav", this.props.reportNavStatus && this.props.playerSearchNavStatus)
    
    console.log("ele",this.state.collapsed)
    let dashbordurl = window.location.href.split('/');

         if(dashbordurl[dashbordurl.length-1] == "dashboard" && this.state.collapsed !=""){
    ReactDOM.findDOMNode(this.state.collapsed).classList.toggle('collapsed');
         }
    //      else if(dashbordurl[dashbordurl.length-1] == "report"){
    //         let ele = event.currentTarget.parentNode.parentNode.parentNode;

    // ReactDOM.findDOMNode(ele).classList.remove('collapsed');
    //      }
    //      else{

    //      }
    // [].forEach.call(document.querySelectorAll('.CMS-accordion >.CMS-accordion-header'), function (e) {
    //     e.addEventListener('onClick', function (e) {
    //         this.parentElement.classList.toggle('collapsed');
    //         e.preventDefault();
    //     }, false);
    // });
return ( 
	<> 
	{/* <SidebarLink to={item.path} 
	onClick={item.subNav && showSubnav}> 
		<div> 
		{item.icon} 
		<SidebarLabel>{item.title}</SidebarLabel> 
		</div> 
		<div> 
		{item.subNav && subnav 
			? item.iconOpened 
			: item.subNav 
			? item.iconClosed 
			: null} 
		</div> 
	</SidebarLink> 
	{subnav && 
		item.subNav.map((item, index) => { 
		return ( 
			<DropdownLink to={item.path} key={index}> 
			{item.icon} 
			<SidebarLabel>{item.title}</SidebarLabel> 
			</DropdownLink> 
		); 
		})}  */}

<div className="CMS-platform">
        <div className="CMS-side-panel">
            <div className="CMS-sideMenu">
                <div className="CMS-sideMenu-header">
                    <a href="#" className="">
                        <img className="CMS-header-logo__brand" src={`${truewavelogoimage}`} alt="Logo Brand" />
                    </a>
                </div>
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="person"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Management Reporting</div>
                                    <span className="material-icons expand_more" onClick={(event)=>this.allCollapsed(event)}></span>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem active" ><Link onClick={(event)=>this.dashbordClick(event)} to="/dashboard">Dashboard</Link></div>
                            <div className="CMS-categoryListItem" ><Link onClick={()=>this.reportClick()} to="/report">Report</Link></div>
                        </div>
                    </div>
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="equalizer"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Customer Analytics</div>
                                    <span className="material-icons expand_more" onClick={(event)=>this.allCollapsed(event)}></span>
                                </div>
                            </div>
                        </div>

                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem">Sports</div>
                            <div className="CMS-categoryListItem">Customers</div>
                            <div className="CMS-categoryListItem">Search</div>
                            <div className="CMS-categoryListItem">Insights</div>
                            <div className="CMS-categoryListItem">MVPs</div>
                            <div className="CMS-categoryListItem">Settings</div>
                        </div>
                    </div>
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="people_outline"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Players</div>
                                    <span className="material-icons expand_more" onClick={(event)=>this.allCollapsed(event)}></span>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem"><Link onClick={()=>this.playerClick()} to="/playersearch">PlayerSearch</Link></div>
                            <div className="CMS-categoryListItem"><Link onClick={()=>this.newPlayerClick()} to="/newplayer">New Players</Link></div>
                            <div className="CMS-categoryListItem"><a href="/player-activity">Player Activity</a></div>
                            <div className="CMS-categoryListItem">Player Tagging / Segmentation</div>
                        </div>
                    </div>
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="card_giftcard"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Bonusing</div>
                                    <span className="material-icons expand_more" onClick={(event)=>this.allCollapsed(event)}></span>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem">Create Bonus</div>
                            <div className="CMS-categoryListItem">Bonus Plan Summary</div>
                        </div>
                    </div>
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="attach_money"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Betting</div>
                                    <span className="material-icons expand_more" onClick={(event)=>this.allCollapsed(event)}></span>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem"><a href="/bet-history">Betting History</a></div>
                            <div className="CMS-categoryListItem"><a href="/bet-ticker">Betting Ticker</a></div>
                            <div className="CMS-categoryListItem"><a href="/bet-liability">Liability</a></div>
                        </div>
                    </div>
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="manage_accounts"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Admin</div>
                                    <span className="material-icons expand_more" onClick={(event)=>this.allCollapsed(event)}></span>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem">User Permissions</div>
                            <div className="CMS-categoryListItem">Auditing</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</> 
); 
}
}
function mapStateToProps(state) {
    //console.log("state",state)
    return {
        //reportStatus: state.sidebar.reportStatus,
        reportNavStatus: state.sidebar.reportNavStatus,
        playerSearchNavStatus: state.sidebar.playerSearchNavStatus,
        newplayerNavStatus: state.sidebar.newplayerNavStatus
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        actions: bindActionCreators({
        }, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SubMenu); 
