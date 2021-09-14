import React,{Component} from 'react';
// import { sidebarClick } from '../../components/Dashboard/dashboardSlice';
 import { connect } from 'react-redux';
 import { setSidebarTabs,setdisplayValue } from "../sidebar/sidebarSlice";
// // import sidebar from "../sidebar";
// import { bindActionCreators } from "redux";
class Dashboard extends Component{
// export const Dashboard = () => { 
     render () {
    //     console.log("side",localStorage.getItem("display"))
        
    //     let displayValue =localStorage.getItem("display")
    return ( 
	<> 
    
    <div className="CMS-layout-content"  style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'290px'}}>
    
			<div className="CMS-layout-innerContent">
                <div className="CMS-page CMS-dashboard">
                    <div className="CMS-page-header">
                       <span>Dashboard</span>
                    </div>
                    
                    <div className="CMS-page-content">
                        <div className="CMS-page-content__left">
                            <div className="CMS-page-filters mb-0">
                                <div className="CMS-dropdown CMS-brands-dropdown">
                                    <div className="CMS-dropdown-btn">Brand</div>
                                    <div className="CMS-dropdown-menu CMS-form-group">

                                        <div className="CMS-checkbox">
                                            <input id="Kenya" type="checkbox" value="value2"/>
                                            <label for="Kenya"></label>
                                            <span className="SB-checkboxLabel">Ken</span>
                                        </div>
                                        <div className="CMS-checkbox">
                                            <input id="UG" type="checkbox" value="value2"/>
                                            <label for="UG"></label>
                                            <span className="SB-checkboxLabel">UG</span>
                                        </div>
                                        <div className="CMS-checkbox">
                                            <input id="NG" type="checkbox" value="value2"/>
                                            <label for="NG"></label>
                                            <span className="SB-checkboxLabel">NG</span>
                                        </div>
                                        <div className="CMS-checkbox">
                                            <input id="ZM" type="checkbox" value="value2"/>
                                            <label for="ZM"></label>
                                            <span className="SB-checkboxLabel">ZM</span>
                                        </div>
                                        <div className="CMS-checkbox">
                                            <input id="TZ" type="checkbox" value="value2"/>
                                            <label for="TZ"></label>
                                            <span className="SB-checkboxLabel">TZ</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="CMS-filterBtnList flex-right">
                                    <ul>
                                        <li className="active"><a href="CMS-allBets">All Bets</a></li>
                                        <li><a href="#">Pre-Match</a></li>
                                        <li><a href="#">In-Play</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="CMS-tabs-content">
                                <div className="CMS-tab-panel active" id="CMS-allBets">
                                    <div className="CMS-tabContent">
                                        <div className="CMS-box">
                                            <div className="CMS-table CMS-table-triped">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div className="CMS-select ">
                                                                    <select>
                                                                        <option>Today</option>
                                                                        <option>Yesterday</option>
                                                                        <option>This Week</option>
                                                                        <option>This Month</option>
                                                                    </select>
                                                                     {/* <span className="material-icons arrow_drop_down md-36"></span>  */}

                                                                </div>
                                                            </th>
                                                            <th>Turnover</th>
                                                            <th>Bet Count</th>
                                                            <th>Margin</th>
                                                            <th>GGR</th>
                                                            <th>Free Bet Cost</th>
                                                            <th>NGR</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>Brand - Ken</th>
                                                            <td>$825,325</td>
                                                            <td>80,914</td>
                                                            <td>10.81%</td>
                                                            <td>$76,348.29</td>
                                                            <td>$6,107.86</td>
                                                            <td>$70,240.43</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Brand - UG</th>
                                                            <td>$362,975</td>
                                                            <td>35,586</td>
                                                            <td>9.24%</td>
                                                            <td>$39,283.01</td>
                                                            <td>$3,142.64</td>
                                                            <td>$36,140.37</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Brand - NG</th>
                                                            <td>$1,055,624</td>
                                                            <td>103,493</td>
                                                            <td>10.26%</td>
                                                            <td>$102,887.33</td>
                                                            <td>$8,230.99</td>
                                                            <td>$94,656.34</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Brand - ZM</th>
                                                            <td>$458,801</td>
                                                            <td>44,980</td>
                                                            <td>13.55%</td>
                                                            <td>$33,859.85</td>
                                                            <td>$2,708.79</td>
                                                            <td>$31,151.06</td>
                                                        </tr>
                                                    </tbody>
                                                    <thead>
                                                        <tr>
                                                            <th>Overall</th>
                                                            <th>$2,702,725</th>
                                                            <th>264,973</th>
                                                            <th>10.70%</th>
                                                            <th>$252,378.48</th>
                                                            <th>$20,190.28</th>
                                                            <th>$232,188.20</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CMS-tab-panel" id="#CMS-preMatch">
                                    <div className="CMS-tabContent">
                                        <div className="CMS-box">
                                            <div className="CMS-table CMS-table-triped">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div className="CMS-select">
                                                                    <select>
                                                                        <option>Today</option>
                                                                        <option>Yesterday</option>
                                                                        <option>This Week</option>
                                                                        <option>This Month</option>
                                                                    </select>
                                                                </div>
                                                            </th>
                                                            <th>Turnover</th>
                                                            <th>Bet Count</th>
                                                            <th>Margin</th>
                                                            <th>GGR</th>
                                                            <th>Free Bet Cost</th>
                                                            <th>NGR</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>Brand - Ken</th>
                                                            <td>$701,526.25</td>
                                                            <td>68,777</td>
                                                            <td>10.81%</td>
                                                            <td>$64,896.05</td>
                                                            <td>$5,191.68</td>
                                                            <td>$59,704.36</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Brand - UG</th>
                                                            <td>$308,528.75</td>
                                                            <td>30,248</td>
                                                            <td>9.24%</td>
                                                            <td>$33,390.56</td>
                                                            <td>$2,671.24</td>
                                                            <td>$30,719.31</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Brand - NG</th>
                                                            <td>$897,280.40</td>
                                                            <td>87,969</td>
                                                            <td>10.26%</td>
                                                            <td>$87,454.23</td>
                                                            <td>$6,996.34</td>
                                                            <td>$80,457.89</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Brand - ZM</th>
                                                            <td>$389,980.85</td>
                                                            <td>38,233</td>
                                                            <td>13.55%</td>
                                                            <td>$28,780.87</td>
                                                            <td>$2,302.47</td>
                                                            <td>$26,478.40</td>
                                                        </tr>
                                                    </tbody>
                                                    <thead>
                                                        <tr>
                                                            <th>Overall</th>
                                                            <th>$2,297,316.25</th>
                                                            <th>225,227</th>
                                                            <th>10.70%</th>
                                                            <th>$214,521.71</th>
                                                            <th>$17,161.74</th>
                                                            <th>$197,359.97</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CMS-tab-panel" id="CMS-inPlay">
                                    <div className="CMS-tabContent">
                                        <div className="CMS-box">
                                            <div className="CMS-table CMS-table-triped">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div className="CMS-select">
                                                                    <select>
                                                                        <option>Today</option>
                                                                        <option>Yesterday</option>
                                                                        <option>This Week</option>
                                                                        <option>This Month</option>
                                                                    </select>
                                                                </div>
                                                            </th>
                                                            <th>Turnover</th>
                                                            <th>Bet Count</th>
                                                            <th>Margin</th>
                                                            <th>GGR</th>
                                                            <th>Free Bet Cost</th>
                                                            <th>NGR</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>Brand - Ken</th>
                                                            <td>$123,798.75</td>
                                                            <td>12,137</td>
                                                            <td>10.81%</td>
                                                            <td>$11,452.24</td>
                                                            <td>$916.18</td>
                                                            <td>$10,536.06</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Brand - UG</th>
                                                            <td>$54,446.25</td>
                                                            <td>5,338</td>
                                                            <td>9.24%</td>
                                                            <td>$5,892.45</td>
                                                            <td>$471.40</td>
                                                            <td>$5,421.06</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Brand - NG</th>
                                                            <td>$158,343.60</td>
                                                            <td>15,524</td>
                                                            <td>10.26%</td>
                                                            <td>$15,433.10</td>
                                                            <td>$1,234.65</td>
                                                            <td>$14,198.45</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Brand - ZM</th>
                                                            <td>$68,820.15</td>
                                                            <td>6,747</td>
                                                            <td>13.55%</td>
                                                            <td>$5,078.98</td>
                                                            <td>$406.32</td>
                                                            <td>$4,672.66</td>
                                                        </tr>
                                                    </tbody>
                                                    <thead>
                                                        <tr>
                                                            <th>Overall</th>
                                                            <th>$405,408.75</th>
                                                            <th>39,746</th>
                                                            <th>10.70%</th>
                                                            <th>$37,856.77</th>
                                                            <th>$3,028.54</th>
                                                            <th>$34,828.23</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="CMS-page-filters">
                                <div className="CMS-dropdown CMS-manage-dropdown">
                                    <div className="CMS-dropdown-btn">Manage Graphs</div>
                                    <ul className="CMS-dropdown-menu">
                                        <li>
                                            <div className="CMS-formGroup">
                                                <div className="CMS-formLabel">Select Data for Graph:</div>

                                                <div className="CMS-select">
                                                    <select>
                                                        <option>Cash Stakes by Sport </option>
                                                        <option>Bet Count by Sport</option>
                                                        <option>Free Bet Costs </option>
                                                        <option>Cash Revenue by Sport</option>
                                                        <option>Margin Report </option>
                                                        <option>Bet Count </option>
                                                        <option>Revenue by Competition</option>
                                                        <option>Revenue by Stake Factor</option>
                                                        <option>Revenue by Brand</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="CMS-formGroup">
                                                <div className="CMS-formLabel">Brand:</div>
                                                <div className="CMS-dropdown CMS-brands-dropdown CMS-formControl">
                                                    <div className="CMS-dropdown-btn">Brand</div>
                                                    <div className="CMS-dropdown-menu CMS-form-group dashBoard">

                                                        <div className="CMS-checkbox">
                                                            <input id="Kenya1" type="checkbox" value="value2"/>
                                                            <label for="Kenya1"></label>
                                                            <span className="SB-checkboxLabel">Ken</span>
                                                        </div>
                                                        <div className="CMS-checkbox">
                                                            <input id="UG1" type="checkbox" value="value2"/>
                                                            <label for="UG1"></label>
                                                            <span className="SB-checkboxLabel">UG</span>
                                                        </div>
                                                        <div className="CMS-checkbox">
                                                            <input id="NG1" type="checkbox" value="value2"/>
                                                            <label for="NG1"></label>
                                                            <span className="SB-checkboxLabel">NG</span>
                                                        </div>
                                                        <div className="CMS-checkbox">
                                                            <input id="ZM1" type="checkbox" value="value2"/>
                                                            <label for="ZM1"></label>
                                                            <span className="SB-checkboxLabel">ZM</span>
                                                        </div>
                                                        <div className="CMS-checkbox">
                                                            <input id="TZ1" type="checkbox" value="value2"/>
                                                            <label for="TZ1"></label>
                                                            <span className="SB-checkboxLabel">TZ</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                         {/* <li>
                                                <div className="row">
                                                    <div className="col">Start:</div>
                                                    <div className="col">
                                                        20/07/2021 13:47:36
                                                    </div>
                                                </div>
                                            </li>  */}
                                         {/* <li>
                                                <div className="row">
                                                    <div className="col">End:</div>
                                                    <div className="col">
                                                        23/07/2021 13:47:36
                                                    </div>
                                                </div>
                                            </li>  */}
                                        <li>
                                            <div className="CMS-formGroup">
                                                <div className="CMS-formLabel">Select Chart Type:</div>
                                                <div className="">
                                                    <div className="CMS-select">
                                                        <select>
                                                            <option>Bar</option>
                                                            <option>Donut</option>
                                                            <option>Lines</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="CMS-formGroup">
                                                <div className="CMS-formLabel">Period:</div>
                                                <div className="">
                                                    <div className="CMS-select">
                                                        <select>
                                                            <option>Daily</option>
                                                            <option>Weekly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="CMS-formGroup">
                                                <div className="">
                                                    <button className="CMS-btn CMS-btnSecondary active CMS-btnMedium">Create
                                                        Graph</button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="CMS-box CMS-graph">
                                        <div className="CMS-box__header">
                                            <div className="CMS-box__header-left">
                                                <div className="CMS-box__title CMS-yellow">Revenue by Stake Factor</div>
                                            </div>
                                            <div className="CMS-box__header-right">
                                                <div className="CMS-box__actionIcons">
                                                    <ul>
                                                        <li><span className="material-icons md-18"
                                                                data-icon="back_hand"></span></li>
                                                        <li><span className="material-icons md-24"
                                                                data-icon="edit_note"></span></li>
                                                        <li id="CMS-fullScreen-btn"><span className="material-icons md-18"
                                                                data-icon="aspect_ratio"></span>
                                                        </li>
                                                        <li><span className="material-icons md-24" data-icon="close"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="CMS-select">
                                                    <select>
                                                        <option>Today</option>
                                                        <option>Yesterday</option>
                                                        <option>This Week</option>
                                                        <option>This Month</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="CMS-graph-content">
                                             {/* <img src="images/graphs/small-graph.JPG" alt="Graph">  */}
                                            <div id="revenueBy-StakeFactor"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="CMS-box CMS-graph">
                                        <div className="CMS-box__header">
                                            <div className="CMS-box__header-left">
                                                <div className="CMS-box__title CMS-red">Revenue by Brand</div>
                                            </div>
                                            <div className="CMS-box__header-right">
                                                <div className="CMS-box__actionIcons">
                                                    <ul>
                                                        <li><span className="material-icons md-18"
                                                                data-icon="back_hand"></span></li>
                                                        <li><span className="material-icons md-24"
                                                                data-icon="edit_note"></span></li>
                                                        <li><span className="material-icons md-18" data-icon="aspect_ratio"></span>
                                                        </li>
                                                        <li><span className="material-icons md-24" data-icon="close"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="CMS-select">
                                                    <select>
                                                        <option>Today</option>
                                                        <option>Yesterday</option>
                                                        <option>This Week</option>
                                                        <option>This Month</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="CMS-graph-content">
                                            {/* <img src="images/graphs/small-graph.JPG" alt="Graph"/> */}
                                            <div id="revenueBy-brand"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="CMS-box CMS-graph">
                                        <div className="CMS-box__header">
                                            <div className="CMS-box__header-left">
                                                <div className="CMS-box__title CMS-green">Bet Count</div>
                                            </div>
                                            <div className="CMS-box__header-right">
                                                <div className="CMS-box__actionIcons">
                                                    <ul>
                                                        <li><span className="material-icons md-18"
                                                                data-icon="back_hand"></span></li>
                                                        <li><span className="material-icons md-24"
                                                                data-icon="edit_note"></span></li>
                                                        <li><span className="material-icons md-18" data-icon="aspect_ratio"></span>
                                                        </li>
                                                        <li><span className="material-icons md-24" data-icon="close"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="CMS-select">
                                                    <select>
                                                        <option>Today</option>
                                                        <option>Yesterday</option>
                                                        <option>This Week</option>
                                                        <option>This Month</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="CMS-graph-content">
                                            <div id="bet-count"></div>
                                             {/* <img src="images/graphs/small-graph.JPG" alt="Graph/">  */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="CMS-box CMS-graph">
                                        <div className="CMS-box__header">
                                            <div className="CMS-box__header-left">
                                                <div className="CMS-box__title">Stakes Vs Revenue</div>
                                            </div>
                                            <div className="CMS-box__header-right">
                                                <div className="CMS-box__actionIcons">
                                                    <ul>
                                                        <li><span className="material-icons md-18"
                                                                data-icon="back_hand"></span></li>
                                                        <li><span className="material-icons md-24"
                                                                data-icon="edit_note"></span></li>
                                                        <li><span className="material-icons md-18" data-icon="aspect_ratio"></span>
                                                        </li>
                                                        <li><span className="material-icons md-24" data-icon="close"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="CMS-select">
                                                    <select>
                                                        <option>Today</option>
                                                        <option>Yesterday</option>
                                                        <option>This Week</option>
                                                        <option>This Month</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="CMS-graph-content">
                                            <div id="cashStakes-revenue"></div>
                                             {/* <img src="images/graphs/small-graph.JPG" alt="Graph"/>  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="CMS-box CMS-graph">
                                        <div className="CMS-box__header">
                                            <div className="CMS-box__header-left">
                                                <div className="CMS-box__title CMS-black">Cash Revenue by Sports</div>
                                            </div>
                                            <div className="CMS-box__header-right">
                                                <div className="CMS-box__actionIcons">
                                                    <ul>
                                                        <li><span className="material-icons md-18"
                                                                data-icon="back_hand"></span></li>
                                                        <li><span className="material-icons md-24"
                                                                data-icon="edit_note"></span></li>
                                                        <li id="CMS-fullScreen-btn"><span className="material-icons md-18"
                                                                data-icon="aspect_ratio"></span>
                                                        </li>
                                                        <li><span className="material-icons md-24" data-icon="close"></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="CMS-select">
                                                    <select>
                                                        <option>Today</option>
                                                        <option>Yesterday</option>
                                                        <option>This Week</option>
                                                        <option>This Month</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="CMS-graph-content">
                                            <div id="cashRevenue-sport"></div>
                                             {/* <img src="images/graphs/cash-stakes.JPG" alt="Graph" style="width: 97%;"/>  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-page-content__right">
                            <div className="CMS-box">
                                <div className="CMS-box__header">
                                    <div className="CMS-box__title">Most Profitable Sports</div>
                                    <div className="CMS-select">
                                        <select>
                                            <option>Today</option>
                                            <option>Yesterday</option>
                                            <option>This Week</option>
                                            <option>This Month</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="CMS-table CMS-table-triped">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Sport</th>
                                                <th>Win</th>
                                                <th>Margin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Football</td>
                                                <td>$65,706</td>
                                                <td>12.60%</td>
                                            </tr>
                                            <tr>
                                                <td>Tennis</td>
                                                <td>$11,944</td>
                                                <td>11.12%</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>$6,575</td>
                                                <td>16.20%</td>
                                            </tr>
                                            <tr>
                                                <td>Rugby Union</td>
                                                <td>$2,940</td>
                                                <td>9.84%</td>
                                            </tr>
                                            <tr>
                                                <td>Ice Hockey</td>
                                                <td>$1,958</td>
                                                <td>7.87%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="CMS-box">
                                <div className="CMS-box__header">
                                    <div className="CMS-box__title">Highest Turnover Sports</div>
                                    <div className="CMS-select">
                                        <select>
                                            <option>Today</option>
                                            <option>Yesterday</option>
                                            <option>This Week</option>
                                            <option>This Month</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="CMS-table CMS-table-triped">
                                    <table>

                                        <thead>
                                            <tr>
                                                <th>Sport</th>
                                                <th>Turnover</th>
                                                <th>Margin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Football</td>
                                                <td>$521,474</td>
                                                <td>12.6%</td>
                                            </tr>
                                            <tr>
                                                <td>Tennis</td>
                                                <td>$107412</td>
                                                <td>11.12%</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>$40587</td>
                                                <td>16.2%</td>
                                            </tr>
                                            <tr>
                                                <td>Rugby Union</td>
                                                <td>$29875</td>
                                                <td>9.84%</td>
                                            </tr>
                                            <tr>
                                                <td>Ice Hockey</td>
                                                <td>$24874</td>
                                                <td>7.87%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="CMS-box">
                                <div className="CMS-box__header">
                                    <div className="CMS-box__title">Top 10 Winners</div>
                                    <div className="CMS-select">
                                        <select>
                                            <option>Today</option>
                                            <option>Yesterday</option>
                                            <option>This Week</option>
                                            <option>This Month</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="CMS-table CMS-table-triped">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Username</th>
                                                <th>Win</th>
                                                <th>Brand</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Macer123</td>
                                                <td><span className="CMS-negative-value">-$6298.22</span></td>
                                                <td>UG</td>
                                            </tr>
                                            <tr>
                                                <td>hipancha</td>
                                                <td><span className="CMS-negative-value">-$3566.12</span></td>
                                                <td>KE</td>
                                            </tr>
                                            <tr>
                                                <td>rivram</td>
                                                <td><span className="CMS-negative-value">-$210425</span></td>
                                                <td>NG</td>
                                            </tr>
                                            <tr>
                                                <td>Millie43</td>
                                                <td><span className="CMS-negative-value">-$198599</span></td>
                                                <td>ZM</td>
                                            </tr>
                                            <tr>
                                                <td>Kungfuj83</td>
                                                <td><span className="CMS-negative-value">-$171402</span></td>
                                                <td>KE</td>
                                            </tr>
                                            <tr>
                                                <td>Smissing</td>
                                                <td><span className="CMS-negative-value">-$97411</span></td>
                                                <td>NG</td>
                                            </tr>
                                            <tr>
                                                <td>Paulkeggin</td>
                                                <td><span className="CMS-negative-value">-$85617</span></td>
                                                <td>NG</td>
                                            </tr>
                                            <tr>
                                                <td>Byrnetofferings</td>
                                                <td><span className="CMS-negative-value">-$60555</span></td>
                                                <td>UG</td>
                                            </tr>
                                            <tr>
                                                <td>dobbsy44</td>
                                                <td><span className="CMS-negative-value">-$48701</span></td>
                                                <td>ZM</td>
                                            </tr>
                                            <tr>
                                                <td>Sarg999</td>
                                                <td><span className="CMS-negative-value">-$46605</span></td>
                                                <td>KE</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="CMS-box">
                                <div className="CMS-box__header">
                                    <div className="CMS-box__title">Top 10 Losers</div>
                                    <div className="CMS-select">
                                        <select>
                                            <option>Today</option>
                                            <option>Yesterday</option>
                                            <option>This Week</option>
                                            <option>This Month</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="CMS-table CMS-table-triped">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Username</th>
                                                <th>Loss</th>
                                                <th>Brand</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Preeceman</td>
                                                <td>$12954.12</td>
                                                <td>UG</td>
                                            </tr>
                                            <tr>
                                                <td>Kingquiff85</td>
                                                <td>$11988.94</td>
                                                <td>KE</td>
                                            </tr>
                                            <tr>
                                                <td>Bigblue1984</td>
                                                <td>$9547.21</td>
                                                <td>NG</td>
                                            </tr>
                                            <tr>
                                                <td>cparle</td>
                                                <td>$4874.22</td>
                                                <td>ZM</td>
                                            </tr>
                                            <tr>
                                                <td>Cinderella13</td>
                                                <td>$4974.66</td>
                                                <td>KE</td>
                                            </tr>
                                            <tr>
                                                <td>Darcy6719</td>
                                                <td>$3741.51</td>
                                                <td>NG</td>
                                            </tr>
                                            <tr>
                                                <td>Casslaa</td>
                                                <td>$3674.18</td>
                                                <td>NG</td>
                                            </tr>
                                            <tr>
                                                <td>Swarm59</td>
                                                <td>$2992.17</td>
                                                <td>UG</td>
                                            </tr>
                                            <tr>
                                                <td>Davidmchugh</td>
                                                <td>$2764.52</td>
                                                <td>ZM</td>
                                            </tr>
                                            <tr>
                                                <td>dragoes09</td>
                                                <td>$2697.14</td>
                                                <td>KE</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	
    
    </div>
     </>
)
}
}
function mapStateToProps(state) {
    return {
        displayValue: state.sidebar.displayValue,
    };
}
// function mapDispatchToProps(dispatch) {
//     return {
//         dispatch,
//         actions: bindActionCreators({
//         }, dispatch)
//     }
// }
export default connect(mapStateToProps)(Dashboard);
