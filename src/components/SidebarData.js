import React from "react"; 
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai"; 
import * as IoIcons from "react-icons/io"; 
import * as RiIcons from "react-icons/ri"; 

export const SidebarData = [ 
{ 
	title: "MANAGEMENT REPORTING", 
	path: "/", 
	icon: <AiIcons.AiFillHome />, 
	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 

	subNav: [ 
	{ 
		title: "DASHBOARD", 
		path: "/dashboard", 
		icon: <IoIcons.IoIosPaper />, 
	}, 
	{ 
		title: "REPORTS", 
		path: "/report", 
		icon: <IoIcons.IoIosPaper />, 
	}, 
	], 
}, 
{ 
	title: "CUSTOMER ANALYTICS", 
	path: "/", 
	icon: <IoIcons.IoIosPaper />, 
	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 

	subNav: [ 
	{ 
		title: "SPORTS", 
		path: "/", 
		icon: <IoIcons.IoIosPaper />, 
		cName: "sub-nav", 
	}, 
	{ 
		title: "CUSTOMERS", 
		path: "/", 
		icon: <IoIcons.IoIosPaper />, 
		cName: "sub-nav", 
	}, 
	{ 
		title: "SEARCH", 
		path: "/", 
		icon: <IoIcons.IoIosPaper />, 
	}, 
	{ 
		title: "INSIGHTS", 
		path: "/", 
		icon: <IoIcons.IoIosPaper />, 
	}, 
	{ 
		title: "MVPs", 
		path: "/", 
		icon: <IoIcons.IoIosPaper />, 
	}, 
	{ 
		title: "SETTINGS", 
		path: "/", 
		icon: <IoIcons.IoIosPaper />, 
	}
	], 
}, 
{ 
	title: "PLAYERS", 
	path: "/", 
	icon: <FaIcons.FaPhone />, 
	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 
	subNav: [ 
		{ 
			title: "Player Search", 
			path: "/playersearch", 
			icon: <IoIcons.IoIosPaper />, 
			cName: "sub-nav", 
		}, 
		{ 
			title: "New Players", 
			path: "/", 
			icon: <IoIcons.IoIosPaper />, 
			cName: "sub-nav", 
		}, 
		{ 
			title: "Player Activity", 
			path: "/", 
			icon: <IoIcons.IoIosPaper />, 
			cName: "sub-nav", 
		}, 
		{ 
			title: "Player Tagging / Segmentation", 
			path: "/", 
			icon: <IoIcons.IoIosPaper />, 
			cName: "sub-nav", 
		}, 
	]
}, 
{ 
	title: "BONUSING", 
	path: "/", 
	icon: <FaIcons.FaEnvelopeOpenText />, 

	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 

	subNav: [ 
	{ 
		title: "Create Bonus", 
		path: "/events/events1", 
		icon: <IoIcons.IoIosPaper />, 
	}, 
	{ 
		title: "Bonus Plan Summary", 
		path: "/events/events2", 
		icon: <IoIcons.IoIosPaper />, 
	}, 
	], 
}, 
{ 
	title: "BETTING", 
	path: "/", 
	icon: <IoIcons.IoMdHelpCircle />, 
	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 
	subNav: [ 
		{ 
			title: "Betting History", 
			path: "/", 
			icon: <IoIcons.IoIosPaper />, 
		}, 
		{ 
			title: "Betting Ticker", 
			path: "/", 
			icon: <IoIcons.IoIosPaper />, 
		}, 
		{ 
			title: "Liability", 
			path: "/", 
			icon: <IoIcons.IoIosPaper />, 
			
		}, 
		], 
}, 
{ 
	title: "ADMIN", 
	path: "/", 
	icon: <FaIcons.FaEnvelopeOpenText />, 

	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 

	subNav: [ 
	{ 
		title: "User Permissions", 
		path: "/", 
		icon: <IoIcons.IoIosPaper />, 
	}, 
	{ 
		title: "Auditing", 
		path: "/", 
		icon: <IoIcons.IoIosPaper />, 
	}, 
	], 
}, 
]; 
