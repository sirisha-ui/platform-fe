import React, { useState } from "react"; 
import styled from "styled-components"; 
import { Link } from "react-router-dom"; 
import { TiThMenu } from 'react-icons/ti';
import * as AiIcons from "react-icons/ai"; 
import { SidebarData } from "./SidebarData"; 
import { setdisplayValue } from "../components/sidebar/sidebarSlice";
import SubMenu from "./SubMenu"; 
import { IconContext } from "react-icons/lib"; 
import truewavelogoimage from "../assets/images/truewave-logos.svg";
import profileIcon from "../assets/images/user.png";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
const Nav = styled.div` 
height: 80px; 
display: flex; 
justify-content: flex-start; 
align-items: center; 
`; 

const NavIcon = styled(Link)` 
margin-left: 2rem; 
height: 80px; 
display: flex; 
justify-content: flex-start; 
align-items: center; 
`; 

const SidebarNav = styled.nav` 
background-color: #192239;
width: 290px;
height: 100vh; 
display: flex; 
justify-content: center; 
position: fixed; 
top:0px;
transition: 350ms; 
z-index: 9999; 
    color: #2f8ff1;
    font-weight: 700;
    font-size: 14px;
`; 

const SidebarWrap = styled.div` 
width: 100%; 
`; 
class Sidebar extends React.Component  {
//const Sidebar = () => { 
    constructor(props) {
        super(props)
        this.state = {
          sidebar: false,
          display: false
        }
        this.displayComponent = this.displayComponent.bind(this);
      }
// const [sidebar, setSidebar] = useState(false); 
// const [display, setDisplay] = useState(false);

 showSidebar = () => this.setState({sidebar: !this.state.sidebar}); 
 displayComponent =(item) => {
     console.log("item",item)
 }
 buttonclick =() => {  
let count =0; { 
     if(count == 0 && this.state.display == false){
        this.props.dispatch(setdisplayValue(true))
        localStorage.setItem("display",true)
    this.setState({display : true});
    count++
}else if(count == 0 && this.state.display == true ){
    this.props.dispatch(setdisplayValue(false))
    localStorage.setItem("display",false)
    this.setState({display : false})
}else{
    this.props.dispatch(setdisplayValue(false))
    localStorage.setItem("display",false)
    this.setState({display : false})
count =0;
}
} 
 }
 render() {
    localStorage.setItem("display",false)
return (
	<> 
	
		<div className="CMS-sideMenu"> 
		<div className="CMS-layout-header" style ={{width: this.state.display ? '100%':'80%', left: this.state.display?'0px':'290px'}}>
                <div className="CMS-header-left">
                    <div className="material-icons cms-icon_hamburger"  data-icon="menu" id="CMS-hamburgerMenu" onClick={()=>this.buttonclick()}>
					{/* <NavIcon to="#"> 
                    <TiThMenu className="menuicon" /> 
		</NavIcon>  */}
                    </div>
					
                    <div className="CMS-search CMS-formControl-group">
                        <div className="CMS-formAddon">
                            <span className="material-icons search"></span>
                        </div>
                        <input className="CMS-formControl" type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="CMS-header-right">
                    <div className="CMS-userProfile">
                        <span className="material-icons" data-icon="widgets"></span>
                        <div className="CMS-iconSvg icon-user">

                            <img src={`${profileIcon}`} alt="Profile"/>
                    </div>
                </div>
            </div>
			</div>
		</div> 
        <div id="sidebarmenuid" style={{display: this.state.display? 'none' : 'block'}}>
            
		<SidebarNav sidebar={this.state.sidebar}> 
		<SidebarWrap> 
        <div className="CMS-sideMenu-header CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
        <a href="#" className="">
                        <img className="CMS-header-logo__brand" src={`${truewavelogoimage}`} alt="Logo Brand" />
                    </a>     
                </div>
			{SidebarData.map((item, index) => { 
			return <SubMenu item={item} key={index} onClick={(item)=>this.displayComponent(item)} />; 
			})} 
		</SidebarWrap> 
		</SidebarNav>
        
        </div>
	</> 
); 
}
}
// function mapStateToProps(state) {
//     return {
//         loader: state.sidebar.loader,
//     };
// }
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        actions: bindActionCreators({
        }, dispatch)
    }
}

export default connect(mapDispatchToProps)(Sidebar);
