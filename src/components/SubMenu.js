import React from "react"; 
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"; 
import styled from "styled-components"; 
import truewavelogoimage from "../assets/images/truewave-logo.svg";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import MainDashbord  from './MainDashbord';
import { useHistory } from "react-router-dom";
import { setSidebarTabs,setdisplayValue } from "./sidebar/sidebarSlice";
import { FaDiceFive } from "react-icons/fa";
import { SidebarData } from "./SidebarData";
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
    this.subTabsClick = this.subTabsClick.bind(this);
}

// dashboardClick() {
//     //console.log("value",this.props.sidebarTabs)
//     this.props.dispatch(setSidebarTabs({tabName: "DASHBOARD",path: "/dashboard"}))
// }
subTabsClick(SidebarData,sidebarTabs) {
    let tabs=[]
    tabs.push(SidebarData)
    switch (SidebarData.path) {
        case '/report' :
           this.props.dispatch(setSidebarTabs(tabs));
        //    SidebarData.push(sidebarTabs)
           break;   
        case '/playersearch' :
            this.props.dispatch(setSidebarTabs(tabs));
            // SidebarData.push(sidebarTabs)
            break;  
            case '/newplayer' :
            this.props.dispatch(setSidebarTabs(tabs));
            // SidebarData.push(sidebarTabs)
            break;  
            case '/playerActivity' :
            this.props.dispatch(setSidebarTabs(tabs));
            // SidebarData.push(sidebarTabs)
            break;   
    }
    console.log(sidebarTabs,'data')

}

allCollapsed =(event)=>{
    let ele = event.currentTarget.parentNode.parentNode.parentNode.parentNode;

    ReactDOM.findDOMNode(ele).classList.toggle('collapsed');
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
   //console.log("sidebar",SidebarData)
  // console.log(this.state.listItem,'Statedata')
    let dashbordurl = window.location.href.split('/');

         if(dashbordurl[dashbordurl.length-1] == "dashboard" && this.state.collapsed !=""){
    ReactDOM.findDOMNode(this.state.collapsed).classList.toggle('collapsed');
         }
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

                 {SidebarData.length > 0 && SidebarData.map((item,index)=>{
                     return (
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon={item.icon}></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">{item.title}</div>
                                    <span className="material-icons expand_more" onClick={(event)=>this.allCollapsed(event)}></span>
                                </div>
                            </div>
                        </div>
                        {item.subNav.map((item,index)=>{
                            return(
                            <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem active" ><Link onClick={()=>this.subTabsClick(item,this.props.sidebarTabs)} to={item.path}>{item.subtitle}</Link></div>
                        </div>)
                        })}
                        
                    </div>
                     )
                })
                
            }
               
                </div>
            </div>
        </div>
	</> 
); 
}
}
function mapStateToProps(state) {
    // console.log("tabs",state.sidebar.sidebarTabs)
    return {
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
export default connect(mapStateToProps,mapDispatchToProps)(SubMenu); 
