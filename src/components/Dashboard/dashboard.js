import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './dashboardSlice';
// import styles from './Counter.module.css';

export function Dashboard() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <React.Fragment classNameName="CMS-side-panel">
            <div classNameName="CMS-sideMenu">
                <div classNameName="CMS-sideMenu-header">
                    <a href="#" classNameName="">
                        <img classNameName="CMS-header-logo__brand" src="images/truewave-logo.svg" alt="Logo Brand" />
                    </a>
                </div>
                <div classNameName="CMS-sideMenu-content">
                    <div classNameName="CMS-accordion">
                        <div classNameName="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div classNameName="CMS-categoryListItem-content">
                                <span classNameName="material-icons" data-icon="person"></span>
                                <div classNameName="CMS-menuHeading">
                                <div classNameName="CMS-categoryListItem-title">Sidebar Menu</div>
                                    <div classNameName="CMS-categoryListItem-title">Management Reporting</div>
                                    <span classNameName="material-icons expand_more"></span>
                                </div>
                            </div>
                        </div>
                        <div classNameName="CMS-accordion-content">
                            <div classNameName="CMS-categoryListItem active">Dashboard</div>
                            <div classNameName="CMS-categoryListItem"><a href="reports.html">Reports</a></div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div classNameName="CMS-accordion collapsed">
                        <div classNameName="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div classNameName="CMS-categoryListItem-content">
                                <span classNameName="material-icons" data-icon="equalizer"></span>
                                <div classNameName="CMS-menuHeading">
                                    <div classNameName="CMS-categoryListItem-title">Customer Analytics</div>
                                    <span classNameName="material-icons expand_more"></span>
                                </div>
                            </div>
                        </div>
                        <div classNameName="CMS-accordion-content">
                            <div classNameName="CMS-categoryListItem">Sports</div>
                            <div classNameName="CMS-categoryListItem">Customers</div>
                            <div classNameName="CMS-categoryListItem">Search</div>
                            <div classNameName="CMS-categoryListItem">Insights</div>
                            <div classNameName="CMS-categoryListItem">MVPs</div>
                            <div classNameName="CMS-categoryListItem">Settings</div>
                        </div>
                    </div>
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="people_outline"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Players</div>
                                    <span className="material-icons expand_more"></span>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem"><a href="player-search.html">Player Search</a></div>
                            <div className="CMS-categoryListItem"><a href="new-player.html">New Players</a></div>
                            <div className="CMS-categoryListItem"><a href="player-activity.html">Player Activity</a></div>
                            <div className="CMS-categoryListItem">Player Tagging / Segmentation</div>
                        </div>
                    </div>
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="card_giftcard"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Bonusing</div>
                                    <span className="material-icons expand_more"></span>
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
                                    <span className="material-icons expand_more"></span>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem"><a href="bet-history.html">Betting History</a></div>
                            <div className="CMS-categoryListItem"><a href="bet-ticker.html">Betting Ticker</a></div>
                            <div className="CMS-categoryListItem"><a href="bet-liability.html">Liability</a></div>
                        </div>
                    </div>
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="manage_accounts"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Admin</div>
                                    <span className="material-icons expand_more"></span>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem">User Permissions</div>
                            <div className="CMS-categoryListItem">Auditing</div>
                        </div>
                    </div>
            
                    </React.Fragment>
  );
}
