import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginHistory from '../LoginHistory/loginHistory';
import PrimaryTabs from './PrimaryTabs';

class PrimaryPlayer extends Component {
    render() {
        return (
            <>

                <div className="CMS-layout-innerContent"style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'280px'}} >
                    <div className="CMS-page CMS-primaryPlayer">
                        <div className="CMS-page-content">
                            <div className="CMS-full-page-content">
                                <div className="CMS-page-tabs" style={{top:"0px"}}>
                                    <ul>
                                        <li className="active">
                                            <a>PRIMARY PLAYER<span className="close"><span
                                                    className="material-icons md-18" data-icon="close"></span></span></a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="CMS-tabs-content">

                                    <div className="CMS-tab-panel active" id="CMS-betting">
                                        {/* <!-- <div class="CMS-box__header">
                                        <div class="CMS-box__title">Sports Overview Report</div>
                                       
                                    </div> --> */}

                                        <div class="CMS-tabContent">

                                            <div className="CMS-box CMS-table CMS-table-triped">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>PETER STAGLES</th>
                                                            <th>Peter4501</th>
                                                            <th>
                                                                <div className="CMS-btnContainer">
                                                                    <div className="CMS-statusInfo CMS-offline">Offline</div>
                                                                    <div className="CMS-btnStatus CMS-statusActive">Active</div>
                                                                </div>
                                                            </th>
                                                            <th></th>
                                                            <th></th>
                                                            <th colspan="2">
                                                                <div className="CMS-btnContainer"><button onclick="myFunction()"
                                                                    className="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                                    type="button">Edit Player Details</button><button
                                                                        onclick="window.location.href=''"
                                                                        className="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                                        type="button">Add Note</button></div>
                                                            </th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Nigeria</td>
                                                            <td><i className="CMS-flags ng"></i></td>
                                                            <td>Reg Date 15/10/20</td>
                                                            <td>Via Desktop</td>
                                                            <td>Loyality Level: 4</td>
                                                            <td>Sportsbrand - NG</td>
                                                            <td>Stake Factor 1.01</td>
                                                        </tr>


                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="row">
                                                <div className="col-6 plr-10">
                                                    <div className="CMS-box">
                                                        <div className="CMS-box__Header">
                                                            <div className="CMS-box__title">Financials</div>

                                                        </div>
                                                        <div className="CMS-table CMS-table-triped">
                                                            <table>

                                                                <tbody>
                                                                    <tr>
                                                                        <th className="textLeft">Deposits</th>
                                                                        <td><span
                                                                            className="CMS-positive-value">&#8377;50,900</span>
                                                                        </td>
                                                                        <th className="textLeft">Net Withdrawls</th>
                                                                        <td><span
                                                                            className="CMS-positive-value">&#8377;35,700</span>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th className="textLeft">Withdrawls</th>
                                                                        <td><span
                                                                            className="CMS-negative-value">&#8377;15,200</span>
                                                                        </td>
                                                                        <th className="textLeft">Pending Withdrawls</th>
                                                                        <td><span
                                                                            className="CMS-negative-value">&#8377;0.00</span>
                                                                        </td>

                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-6 plr-10">
                                                <div className="CMS-box">
                                                    <div className="CMS-box__Header">
                                                        <div className="CMS-box__title">Betting</div>

                                                    </div>
                                                    <div className="CMS-table CMS-table-triped">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <th className="textLeft">LT Bet STakes</th>
                                                                    <td>&#8377;2508.00</td>
                                                                    <th className="textLeft">LT Free Bet Cost</th>
                                                                    <td>&#8377;0</td>
                                                                    <th className="textLeft">Primary Channel</th>
                                                                    <td>APP</td>
                                                                </tr>
                                                                <tr>
                                                                    <th className="textLeft">LT Bet Returns</th>
                                                                    <td>&#8377;2000.00</td>
                                                                    <th className="textLeft">LT GGR</th>
                                                                    <td><span className="CMS-positive-value">&#8377;508.00
                                                                        </span>26%</td>
                                                                    <th className="textLeft">Primary Sport</th>
                                                                    <td>Soccer</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 plr-10">
                                                <div className="CMS-box">
                                                    <div className="CMS-box__Header">
                                                        <div className="CMS-box__title">Balance</div>

                                                    </div>
                                                    <div className="CMS-table CMS-table-triped">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th></th>
                                                                    <th>Real</th>
                                                                    <th>Bonus</th>
                                                                    <th>Used Credit</th>
                                                                    <th>Locked Balance</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Sport</td>
                                                                    <td>&#8377;200</td>
                                                                    <td>&#8377;80</td>
                                                                    <td>&#8377;0.00</td>
                                                                    <td>&#8377;0.00</td>
                                                                    <td>&#8377;280</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Casino</td>
                                                                    <td>&#8377;0.00</td>
                                                                    <td>&#8377;0.00</td>
                                                                    <td>&#8377;0.00</td>
                                                                    <td>&#8377;0.00</td>
                                                                    <td>&#8377;0.00</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-3 plr-10">
                                                <div className="CMS-box">
                                                    <div className="CMS-box__Header">
                                                        <div className="CMS-box__title">Risk</div>

                                                    </div>
                                                    <div className="CMS-table CMS-table-triped">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th></th>
                                                                    <th>Open Bets</th>
                                                                    <th>Risk</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Single Bets</td>
                                                                    <td>&#8377;0.00</td>
                                                                    <td>&#8377;0.00</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>Combo Bets</td>
                                                                    <td>&#8377;0.00</td>
                                                                    <td>&#8377;0.00</td>

                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3 plr-10">
                                                <div className="CMS-box">
                                                    <div className="CMS-box__Header">
                                                        <div className="CMS-box__title">Bonuses</div>

                                                    </div>
                                                    <div className="CMS-table CMS-table-triped">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Sports Bonus Restricted</th>
                                                                    <th>Current Offer</th>
                                                                    <th>Applied On</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>No</td>
                                                                    <td></td>
                                                                    <td></td>

                                                                </tr>
                                                                <tr>
                                                                    <td>No</td>
                                                                    <td></td>
                                                                    <td></td>

                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <PrimaryTabs/>
                                       

                                            </div></div></div></div></div></div></div>

                                           
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        displayValue: state.sidebar.displayValue,

    };
}
export default connect(mapStateToProps)(PrimaryPlayer);

