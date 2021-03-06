import React,{Component} from 'react';
import { connect } from 'react-redux';
// import sidebar from "../sidebar";
import { bindActionCreators } from "redux";
import { setdisplayValue } from '../Reports/reportSlice';
import { Link } from "react-router-dom";
class Reports extends Component{
// function Reports() {
  render(){
      
    console.log("disvalue",this.props.displayValue)
     // console.log("llink",this.props.sidebarTabs)
  return (
    <>

    <div style ={{width: this.props.displayValue ? '100%':'79%', marginLeft: this.props.displayValue ?'0px':'295px'}}>
      
            <div className="CMS-page-tabs">
                                <ul>
                                  
                                    
                                    {
                                   this.props.sidebarTabs.length > 0 && this.props.sidebarTabs.map((item,index)=> {return (
                                    <>   
                                    <li key={index} >
                                       
                                       <span to="#">{item.subtitle} 
                                          </span>
                                          <span className="close"><span className="material-icons md-18" data-icon="close"></span> </span>
                                   
                                    </li>
                                    </>
                                    )})}
                                  
                                </ul>
                            </div> 

      <div className="CMS-layout-innerContent">
                <div className="CMS-page CMS-reports">
                    <div className="CMS-page-content">
                        <div className="CMS-full-page-content">
                            <div className="CMS-tabs-content">
                                <div className="CMS-tab-panel active" id="CMS-reports">
                                    <div className="CMS-tabContent">
                                        <div className="CMS-box CMS-table CMS-table-triped">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Report Name
                                                        </th>

                                                        <th className="details-of-reports"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Sports Overview Report </td>
                                                        <td><Link  className="CMS-btn CMS-btnSecondary active CMS-btnMedium" to ="/sportoverviewReport">Details of Report</Link>
                                                                 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Biggest Winning and Losing Customers</td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Active Players Report</td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lapsed Player Report</td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Individual Player Report(s)</td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Individual Sport Report </td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>In-Play Report</td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Trading Report (Market) </td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Trading Report (Sports) </td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Trading Report (by stake factor) </td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Turnover Report </td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Games Report </td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Trading In-Play Report </td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Betting Activity Per Hour </td>
                                                        <td><button
                                                                className="CMS-btn CMS-btnDefault CMS-btnSecondary active CMS-btnMedium"
                                                                type="button">Details of Report</button> </td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="CMS-tab-panel" id="CMS-playerActivity">
                                    <div className="CMS-tabContent">

                                        <div className="CMS-box CMS-box-content">
                                            Tab Data 2
                                        </div>

                                    </div>
                                </div>

                                <div className="CMS-tab-panel" id="CMS-betting">
                                    <div className="CMS-tabContent">

                                        <div className="CMS-box CMS-box-content">
                                            Tab Data 3
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
  );
  }
}
function mapStateToProps(state) {
    console.log("state",state)
    return {
        displayValue: state.sidebar.displayValue,
        sidebarTabs: state.sidebar.sidebarTabs
    };
}
function mapDispatchToProps(dispatch) {
  return {
      dispatch,
      actions: bindActionCreators({
      }, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Reports);