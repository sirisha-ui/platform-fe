import React from "react"; 
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai"; 
import * as IoIcons from "react-icons/io"; 
import * as RiIcons from "react-icons/ri"; 

export const SidebarData = [ 
{ 
	title: "MANAGEMENT REPORTING", 
	path: "/", 
	icon: "person", 
	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 

	subNav: [ 
	{ 
		subtitle: "DASHBOARD", 
		path: "/dashboard", 
	}, 
	{ 
		subtitle: "REPORTS", 
		path: "/report", 
	}, 
	], 
}, 
{ 
	title: "CUSTOMER ANALYTICS", 
	path: "/", 
	icon: "equalizer", 
	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 

	subNav: [ 
	{ 
		subtitle: "SPORTS", 
		path: "/",  
	}, 
	{ 
		subtitle: "CUSTOMERS", 
		path: "/", 
	}, 
	{ 
		subtitle: "SEARCH", 
		path: "/", 
	}, 
	{ 
		subtitle: "INSIGHTS", 
		path: "/", 
	}, 
	{ 
		subtitle: "MVPs", 
		path: "/", 
	}, 
	{ 
		subtitle: "SETTINGS", 
		path: "/", 
	}
	], 
}, 
{ 
	title: "PLAYERS", 
	path: "/", 
	icon: "people_outline", 
	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 
	subNav: [ 
		{ 
			subtitle: "PLAYERSEARCH", 
			path: "/playersearch", 
		}, 
		{ 
			subtitle: "NEWPLAYERS", 
			path: "/newplayer", 
		}, 
		{ 
			subtitle: "Player Activity", 
			path: "/playerActivity", 
		}, 
		{ 
			subtitle: "Player Tagging / Segmentation", 
			path: "/", 
		}, 
	]
}, 
{ 
	title: "BONUSING", 
	path: "/", 
	icon: "card_giftcard", 

	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 

	subNav: [ 
	{ 
		subtitle: "Create Bonus", 
		path: "/events/events1", 
	}, 
	{ 
		subtitle: "Bonus Plan Summary", 
		path: "/events/events2", 
	}, 
	], 
}, 
{ 
	title: "BETTING", 
	path: "/", 
	icon: "attach_money", 
	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 
	subNav: [ 
		{ 
			subtitle: "Betting History", 
			path: "/", 
		}, 
		{ 
			subtitle: "Betting Ticker", 
			path: "/", 
		}, 
		{ 
			subtitle: "Liability", 
			path: "/", 
			
		}, 
		], 
}, 
{ 
	title: "ADMIN", 
	path: "/", 
	icon: "manage_accounts", 

	iconClosed: <RiIcons.RiArrowDownSFill />, 
	iconOpened: <RiIcons.RiArrowUpSFill />, 

	subNav: [ 
	{ 
		subtitle: "User Permissions", 
		path: "/", 
	}, 
	{ 
		subtitle: "Auditing", 
		path: "/", 
	}, 
	], 
}, 
]; 
