import React from "react"; 
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"; 
import styled from "styled-components"; 
import truewavelogoimage from "../assets/images/truewave-logos.svg";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { setReportNavStatus, setReportStatus,setDashboardStatus,setDashboardNavStatus } from "./sidebar/sidebarSlice";
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
        collapsed: ''
    }
    this.allCollapsed = this.allCollapsed.bind(this);
    this.dashbordClick = this.dashbordClick.bind(this);
}
dashbordClick =(event)=>{
    this.props.dispatch(setDashboardStatus(true))
    this.props.dispatch(setDashboardNavStatus(true))
    this.props.dispatch(setReportStatus(false))
    let ele = event.currentTarget.parentNode.parentNode.parentNode;
   this.setState({collapsed:ele});
   //console.log("ele",this.state.collapsed)
}
reportClick =()=>{
    this.props.dispatch(setReportStatus(true))
    this.props.dispatch(setReportNavStatus(true))
    this.props.dispatch(setDashboardStatus(false)) 
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
                            <div className="CMS-categoryListItem active" ><a onClick ={(event)=>this.dashbordClick(event)} href="/dashboard">Dashboard</a></div>
                            <div className="CMS-categoryListItem" ><a onClick ={()=>this.reportClick()} href="/report">Reports</a></div>
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
                            <div className="CMS-categoryListItem"><a href="/player-search">Player Search</a></div>
                            <div className="CMS-categoryListItem"><a href="/new-player">New Players</a></div>
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
// function mapStateToProps(state) {
//     //console.log("state",state)
//     return {
//         reportStatus: state.sidebar.reportStatus,
//         reportNavStatus: state.sidebar.reportNavStatus,
//     };
// }
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        actions: bindActionCreators({
        }, dispatch)
    }
}
export default connect(mapDispatchToProps)(SubMenu); 
