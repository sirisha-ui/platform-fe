import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <React.Fragment className="CMS-side-panel">
            <div className="CMS-sideMenu">
                <div className="CMS-sideMenu-header">
                    <a href="#" className="">
                        <img className="CMS-header-logo__brand" src="images/truewave-logo.svg" alt="Logo Brand" />
                    </a>
                </div>
                <div className="CMS-sideMenu-content">
                    <div className="CMS-accordion">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="person"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Management Reporting</div>
                                    <span className="material-icons expand_more"></span>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem active">Dashboard</div>
                            <div className="CMS-categoryListItem"><a href="reports.html">Reports</a></div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="CMS-accordion collapsed">
                        <div className="CMS-categoryListItem CMS-accordion-header CMS-arrowAfter">
                            <div className="CMS-categoryListItem-content">
                                <span className="material-icons" data-icon="equalizer"></span>
                                <div className="CMS-menuHeading">
                                    <div className="CMS-categoryListItem-title">Customer Analytics</div>
                                    <span className="material-icons expand_more"></span>
                                </div>
                            </div>
                        </div>
                        <div className="CMS-accordion-content">
                            <div className="CMS-categoryListItem">Sports</div>
                            <div className="CMS-categoryListItem">Customers</div>
                            <div className="CMS-categoryListItem">Search</div>
                            <div className="CMS-categoryListItem">Insights</div>
                            <div className="CMS-categoryListItem">MVPs</div>
                            <div className="CMS-categoryListItem">Settings</div>
                        </div>
                    </div>
                    </React.Fragment>
  );
}
