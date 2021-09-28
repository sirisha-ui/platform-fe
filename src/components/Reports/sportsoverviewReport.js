import React from 'react';
import { connect } from 'react-redux';
// import sidebar from "../sidebar";
import { bindActionCreators } from "redux";
class SportsOverviewReport extends React.Component{

    render(){
   return(
        <>
          <div className="CMS-layout-innerContent" className="CMS-tabContent" style ={{width: this.props.displayValue ? '100%':'79%', marginLeft: this.props.displayValue ?'0px':'295px'}}>
                <div className="CMS-page CMS-sportsOverview">

                    <div className="CMS-page-content">
                        <div className="CMS-full-page-content">
                            <div className="CMS-page-tabs">
                                <ul>
                                    <li className="active">
                                        <a href="CMS-reports">REPORTS<span className="close"
                                                onclick="window.location.href='dashboard.html'"><span
                                                    className="material-icons md-18" data-icon="close"></span></span></a>
                                    </li>

                                </ul>
                            </div>

                            <div className="CMS-tabs-content">

                                <div className="CMS-tab-panel active" id="CMS-reports">

                                    <div className="CMS-tabContent">
                                        <div className="CMS-box CMS-box-content">
                                            <div className="CMS-box__header">
                                                <div className="CMS-box__title"><span className="CMS-back-button">
                                                    <a
                                                            href="reports.html"><span className="material-icons"
                                                                data-icon="arrow_back"></span></a>
                                                                </span> Sports Overview Report</div>

                                            </div>



                                            <div className="row no-gutters">
                                                <div className="col-md-6 col-lg-6 col-xl-6">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Date From</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl-group">
                                                                <div className="CMS-formControl">
                                                                    <input type="text" className="CMS-datepicker"
                                                                        name="Dateto" placeholder="08/31/2021"/>
                                                                </div>
                                                                <div className="CMS-formAddon"><span
                                                                        className="material-icons md-18"
                                                                        data-icon="calendar_today"></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-6">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Date To</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl-group">
                                                                <div className="CMS-formControl">
                                                                    <input type="text" className="CMS-datepicker"
                                                                        name="Dateto" placeholder="08/31/2021"/>
                                                                </div>
                                                                <div className="CMS-formAddon"><span
                                                                        className="material-icons md-18"
                                                                        data-icon="calendar_today"></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-6">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-12"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row no-gutters">
                                                <div className="col-md-6 col-lg-6 col-xl-6">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Brand</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-dropdown CMS-brands-dropdown">
                                                                    <div className="CMS-dropdown-btn">Ken</div>
                                                                    <div className="CMS-dropdown-menu CMS-form-group">

                                                                        <div className="CMS-checkbox">
                                                                            <input id="Kenya" type="checkbox"
                                                                                value="value2" checked/>
                                                                            <label for="Kenya"></label>
                                                                            <span className="SB-checkboxLabel">Ken</span>
                                                                        </div>
                                                                        <div className="CMS-checkbox">
                                                                            <input id="UG" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="UG"></label>
                                                                            <span className="SB-checkboxLabel">UG</span>
                                                                        </div>
                                                                        <div className="CMS-checkbox">
                                                                            <input id="NG" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="NG"></label>
                                                                            <span className="SB-checkboxLabel">NG</span>
                                                                        </div>
                                                                        <div className="CMS-checkbox">
                                                                            <input id="ZM" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="ZM"></label>
                                                                            <span className="SB-checkboxLabel">ZM</span>
                                                                        </div>
                                                                        <div className="CMS-checkbox">
                                                                            <input id="TZ" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="TZ"></label>
                                                                            <span className="SB-checkboxLabel">TZ</span>
                                                                        </div>

                                                                    </div>




                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-6">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">File Type</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-select select-width">
                                                                    <select id="country" name="File">

                                                                        <option value="PDF">PDF</option>
                                                                        <option value="CSV">CSV</option>
                                                                        <option value="XLS">XLS</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6 col-xl-6">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-12"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row no-gutters">

                                            </div>

                                           
                                            <div className="mt-20"></div>

                                            <div className="row">
                                                <div className="col-md-12 col-lg-12 col-xl-12">
                                                    <div className="CMS-btnContainer">
                                                        <button onclick="window.location.href='download-reports.html'"
                                                            className="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                            type="button">Download
                                                            Report</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
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
    console.log("state",state)
    return {
        displayValue: state.sidebar.displayValue,
        sidebarTabs: state.sidebar.sidebarTabs,
    };
}
function mapDispatchToProps(dispatch) {
  return {
      dispatch,
      actions: bindActionCreators({
      }, dispatch)
  }
}
export default SportsOverviewReport;
