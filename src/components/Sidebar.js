import React, { useState } from "react"; 
import styled from "styled-components"; 
import { Link } from "react-router-dom"; 
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai"; 
import { SidebarData } from "./SidebarData"; 
import SubMenu from "./SubMenu"; 
import { IconContext } from "react-icons/lib"; 
import image from "../assets/images/truewave-logos.svg"
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

transition: 350ms; 
z-index: 10; 
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

		
		
		<div class="CMS-layout-header">
                <div class="CMS-header-left">
                    <div class="CMS-hambergur menuOff menuOn" id="menu">
					<NavIcon to="#"> 
			<FaIcons.FaBars onClick={buttonclick} /> 
		</NavIcon> 
                    </div>
					<div class="CMS-sideMenu-header">
                     <a href="#" class="">
                        <img class="CMS-header-logo__brand" src={`${image}`} alt="Logo Brand" />
                    </a> 
                </div>
                    <div class="CMS-search CMS-formControl-group">
                        <div class="CMS-formAddon">
                            <span class="material-icons search"></span>
                        </div>
                        <input class="CMS-formControl" type="text" placeholder="Search" />
                    </div>
                </div>
                <div class="CMS-header-right">
                    <div class="CMS-userProfile">
                        <span class="material-icons" data-icon="widgets"></span>
                        <div class="CMS-iconSvg icon-user">

                            <img src="images/user.png" alt="Profile"/>
                    </div>
                </div>
            </div>
			</div>
		</Nav> 
		<SidebarNav sidebar={sidebar}> 
		<SidebarWrap> 
			<NavIcon to="#"> 
			<AiIcons.AiOutlineClose onClick={showSidebar} /> 
			</NavIcon> 
			{SidebarData.map((item, index) => { 
			return <SubMenu item={item} key={index} />; 
			})} 
		</SidebarWrap> 
		</SidebarNav> 
	</IconContext.Provider> 
	</> 
); 
}; 

export default Sidebar;
