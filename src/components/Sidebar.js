import React, { useState } from "react"; 
import styled from "styled-components"; 
import { Link } from "react-router-dom"; 
import { TiThMenu } from 'react-icons/ti';
import * as AiIcons from "react-icons/ai"; 
import { SidebarData } from "./SidebarData"; 
import SubMenu from "./SubMenu"; 
import { IconContext } from "react-icons/lib"; 
import truewavelogoimage from "../assets/images/truewave-logos.svg";
import profileIcon from "../assets/images/user.png";
const Nav = styled.div` 
height: 80px; 
display: flex; 
justify-content: flex-start; 
align-items: center; 
`; 

const NavIcon = styled(Link)` 
margin-left: 2rem; 
font-size: 2rem; 
height: 80px; 
display: flex; 
justify-content: flex-start; 
align-items: center; 
`; 

const SidebarNav = styled.nav` 
background: #15171c; 
width: 250px; 
height: 100vh; 
display: flex; 
justify-content: center; 
position: fixed; 
top:0px;
transition: 350ms; 
z-index: 9999; 
`; 

const SidebarWrap = styled.div` 
width: 100%; 
`; 

const Sidebar = () => { 
const [sidebar, setSidebar] = useState(false); 

const showSidebar = () => setSidebar(!sidebar); 

const buttonclick =() =>    
{    
    var menuList = document.getElementById("menu");    
    if (menuList.className == "menuOff")    
    {    
    
        menuList.className = "menuOn";    
    } else    
    {    
    
        menuList.className = "menuOff";    
    }    
} 
return (
	<> 
	<IconContext.Provider value={{ color: "#fff" }}> 
		<Nav> 
		<div className="CMS-layout-header">
                <div className="CMS-header-left">
                    <div className="material-icons cms-icon_hamburger" data-icon="menu" id="CMS-hamburgerMenu">
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
		</Nav> 
        <div className="CMS-sideMenu">
		<SidebarNav sidebar={sidebar}> 
		<SidebarWrap> 
        <div className="CMS-sideMenu-header">
        <a href="#" className="">
                        <img className="CMS-header-logo__brand" src={`${truewavelogoimage}`} alt="Logo Brand" />
                    </a>     
                </div>
			{SidebarData.map((item, index) => { 
			return <SubMenu className ="submenu" item={item} key={index} />; 
			})} 
		</SidebarWrap> 
		</SidebarNav> 
        </div>
	</IconContext.Provider> 
	</> 
); 
}; 

export default Sidebar;
