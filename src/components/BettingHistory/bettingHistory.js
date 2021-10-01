
import React from 'react';
import { connect } from 'react-redux';
// import sidebar from "../sidebar";
import { bindActionCreators } from "redux";
class BettingHistory extends React.Component{
  render(){
    return(<>
<div class="CMS-tab-panel" id="CMS-bettingHistory">
                                                    <div class="CMS-tabContent">
                                                        <div class="CMS-box-content">
                                                        <div class="row no-gutters">
                                                            <div class="col-md-9 col-lg-9 col-xl-9">
                                                                <div class="row no-gutters">
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Market
                                                                                    Restrictions</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">
                                                                                <div class="CMS-form-group">
                                                                                    <div class="CMS-checkbox">
                                                                                        <input id="MR" type="checkbox"
                                                                                            value=""/>
                                                                                        <label for="MR"></label>
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">BOG Limit
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">
                                                                                <div class="CMS-form-group">
                                                                                    <div class="CMS-checkbox">
                                                                                        <input id="BL" type="checkbox"
                                                                                            value=""/>
                                                                                        <label for="BL"></label>
                                                                                    </div>
                                                                                </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Limit Factor
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">
                                                                                <div class="CMS-formControl">
                                                                                    <div
                                                                                        class="CMS-number-of-files CMS-select">
                                                                                        <select id="country"
                                                                                            name="File">
                                                                                            <option value="">1</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="row no-gutters">
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Unsettled Bet
                                                                                    Count</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">1
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Settled Bet
                                                                                    Count (Cash)</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">236
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Settled Free
                                                                                    Bet Count</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">33
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div class="row no-gutters">
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Unsettled
                                                                                    Stakes</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">19.17 INR
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Settled
                                                                                    Stakes</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">16350.72 INR
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Settled Free
                                                                                    Stakes</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">1626.04 INR
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div class="row no-gutters">
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Unsettled Max
                                                                                    Payout</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">7687.17 INR
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Settled
                                                                                    Payout</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">11334.82 INR
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Settled Costs
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">392.93 INR
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div class="row no-gutters">
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Unsettled Net
                                                                                    Position</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">-7668.00 INR
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel">Settled Net
                                                                                    Position</div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">4622.97 INR
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 col-xl-4">
                                                                        <div class="CMS-userDetails">
                                                                            <div class="col-6">
                                                                                <div class="userLabel"></div>
                                                                            </div>
                                                                            <div class="col-6">
                                                                                <div class="userData">
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 col-lg-3 col-xl-3">

                                                                <div class="CMS-formGroup formGroup-inline">
                                                                    <div class="col-6">
                                                                        <div class="CMS-formLabel">Settled</div>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <div class="CMS-formControl">
                                                                            <div class="CMS-number-of-files CMS-select">
                                                                                <select id="country" name="File">
                                                                                    <option value="">Any</option>
                                                                                    <option value="yes">Yes</option>
                                                                                    <option value="no">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>




                                                                <div class="CMS-formGroup formGroup-inline">
                                                                    <div class="col-6">
                                                                        <div class="CMS-formLabel">Rejected</div>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <div class="CMS-formControl">
                                                                            <div class="CMS-number-of-files CMS-select">
                                                                                <select id="country" name="File">
                                                                                    <option value="">Select</option>

                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>




                                                                <div class="CMS-formGroup formGroup-inline">
                                                                    <div class="col-6">
                                                                        <div class="CMS-formLabel">Category</div>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <div class="CMS-formControl">
                                                                            <div class="CMS-number-of-files CMS-select">
                                                                                <select id="country" name="File">
                                                                                    <option value="">Select</option>

                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>





                                                                <div class="CMS-formGroup formGroup-inline">
                                                                    <div class="col-6">
                                                                        <div class="CMS-formLabel">Bet ID</div>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <div class="CMS-formControl">
                                                                            <div class="CMS-number-of-files CMS-select">
                                                                                <select id="country" name="File">
                                                                                    <option value="">Select</option>

                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>




                                                                <div class="col-12">
                                                                    <div class="CMS-btnContainer">
                                                                        <button onclick="myFunction()"
                                                                            class="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                                            type="button">Find</button>
                                                                        <button onclick="window.location.href=''"
                                                                            class="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                                            type="button">Clear Filters</button>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>

                                                        
                                                            <div class="CMS-filter-result" id="result">
                                                                <div class="CMS-pagination">
                                                                    <div class="CMS-pagination-container">

                                                                        <div class="CMS-pagination-list">
                                                                            <ul>
                                                                                <li><a href="#"><span
                                                                                            class="material-icons"
                                                                                            data-icon="first_page"></span></a>
                                                                                </li>
                                                                                <li><a href="#"><span
                                                                                            class="material-icons"
                                                                                            data-icon="navigate_before"></span></a>
                                                                                </li>
                                                                                <li><a class="active" href="#">1</a>
                                                                                </li>
                                                                                <li><a href="#">2</a></li>
                                                                                <li><a href="#">3</a></li>
                                                                                <li><a href="#"><span
                                                                                            class="material-icons"
                                                                                            data-icon="navigate_next"></span></a>
                                                                                </li>
                                                                                <li><a href="#"><span
                                                                                            class="material-icons"
                                                                                            data-icon="last_page"></span></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                        <div class="CMS-page-slection">
                                                                            <div class="CMS-number-of-files CMS-select">
                                                                                <select id="country" name="File">
                                                                                    <option value="PDF">25</option>
                                                                                    <option value="CSV">50</option>
                                                                                    <option value="XLS">100</option>
                                                                                    <option value="XLS">200</option>
                                                                                    <option value="XLS">500</option>
                                                                                </select>
                                                                            </div>
                                                                            <div class="CMS-file-type CMS-select">
                                                                                <select id="country" name="File">
                                                                                    <option value="PDF">PDF</option>
                                                                                    <option value="CSV">CSV</option>
                                                                                    <option value="XLS">XLS</option>
                                                                                </select>
                                                                            </div>
                                                                            <div class="CMS-download-icon">
                                                                                <a href="#"><span class="material-icons"
                                                                                        data-icon="file_download"></span></a>
                                                                            </div>
                                                                        </div>



                                                                        <div class="CMS-page-results">
                                                                            Results 1-100 of 108
                                                                        </div>


                                                                    </div>
                                                                </div>


                                                                <div class="CMS-box CMS-table CMS-table-triped">
                                                                    <table>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Bet ID</th>
                                                                                <th>Description</th>
                                                                                <th>Event Name</th>
                                                                                <th>Rejection Code</th>
                                                                                <th>Placed On <span
                                                                                        class="material-icons md-18"
                                                                                        data-icon="south"></span></th>
                                                                                <th>Settled On</th>
                                                                                <th>Type</th>
                                                                                <th>Stake</th>
                                                                                <th>Payout</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>10415721</td>
                                                                                <td>KES29.00 12-fold</td>
                                                                                <td><a href="">Multiple Events</a></td>
                                                                                <td></td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td>12-fold / Win</td>
                                                                                <td>29.00 INR</td>
                                                                                <td>0.00 INR</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>10415722</td>
                                                                                <td>KES50.00 10-fold</td>
                                                                                <td><a href="">Multiple Events</a></td>
                                                                                <td>Credit_Bet_...</td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td></td>
                                                                                <td>10-fold / Win</td>
                                                                                <td>0.00 INR</td>
                                                                                <td>0.00 INR</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>10415723</td>
                                                                                <td>KES50.00 Fourfold</td>
                                                                                <td><a href="">Multiple Events</a></td>
                                                                                <td></td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td>Fourfold / Win</td>
                                                                                <td>50.00 INR</td>
                                                                                <td>0.00 INR</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>10415724</td>
                                                                                <td>Free Bet.ZMW3.00 Double</td>
                                                                                <td><a href="">Multiple Events</a></td>
                                                                                <td></td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td>Double / Win</td>
                                                                                <td>3 INR</td>
                                                                                <td>0.00 INR</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>10415725</td>
                                                                                <td>KES20.00 on Over 1.5 goals @ 3.30
                                                                                </td>
                                                                                <td><a href="">Jian Su Shun T...</a>
                                                                                </td>
                                                                                <td></td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td>Match Bet / Win</td>
                                                                                <td>3.30 INR</td>
                                                                                <td>0.00 INR</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>10415726</td>
                                                                                <td>ZMW2.56 on Draw @ 1.75</td>
                                                                                <td><a href="">Jian Su Shun T...</a>
                                                                                </td>
                                                                                <td></td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td>28/05/2021 13:47:36</td>
                                                                                <td>Match Bet / Win</td>
                                                                                <td>2.56 INR</td>
                                                                                <td>0.00 INR</td>
                                                                            </tr>





                                                                        </tbody>

                                                                    </table>
                                                                </div>


                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                                </>
                                                )
                                                }



                        }
export default BettingHistory;