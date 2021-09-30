import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import LoginHistory from '../LoginHistory/loginHistory';

// import History from 'react-history/BrowserHistory';
class PrimaryTabs extends Component {
    navigateToGeneralDetail =()=>{
        this.props.history.push('/generaldetail')
    }
    render() {
        return (
            <>
            <div className="CMS-box">
                <div className="CMS-page-subTabs">
                    <ul>
                        <li className="active">
                            <a href="CMS-generalDetails" onClick={this.navigateToGeneralDetail}>General Details</a>
                        </li>
                        <li>
                            <a href="CMS-bettingHistory">Betting History</a>
                        </li>
                        <li>
                            <Link to ="/paymentHistory">Payment History</Link>
                        </li>
                        <li>
                            <Link to ="/loginHistory">Login History</Link>
                        </li>
                        <li>
                            <a href="CMS-accountHistory">Account History</a>
                        </li>
                        {/* <!-- <li>
                                                            <a href="CMS-sessions">Sessions</a>
                                                        </li> --> */}
                        <li>
                            <a href="CMS-creditWallets">Credit Wallets</a>
                        </li>
                        <li>
                            <a href="CMS-awards">Awards</a>
                        </li>
                        {/* <!-- <li>
                                                            <a href="CMS-statement">Statement</a>
                                                        </li> --> */}
                        <li>
                            <a href="CMS-bonuses">Bonuses</a>
                        </li>
                        <li>
                            <a href="CMS-applyBonus">Apply Bonus</a>
                        </li>
                        {/* <!-- <li>
                                                            <a href="CMS-kyc">KYC</a>
                                                        </li>
                                                        <li>
                                                            <a href="CMS-risk">Risk</a>
                                                        </li> --> */}
                    </ul>
                </div>

           </div>
           
            </>
        )
    }
}
function mapStateToProps(state) {
    return {

    };
}
export default connect(mapStateToProps)(PrimaryTabs);

