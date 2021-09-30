import React from 'react';
import { connect } from 'react-redux';
// import sidebar from "../sidebar";
import { bindActionCreators } from "redux";
import PrimaryPlayer from '../primaryplayer/PrimaryPlayer';
import {getLoginHistorytableList,setPaginationSecondValue} from "./loginHistoryTableSlice";
import LoginHistoryTable from './loginHistoryTable';
class LoginHistory extends React.Component{

    constructor(props){
        
        super(props);
        this.state = {
            id: '',
        createdDate: '',
        actionType: '',
        ipAddress: '',
            data: [],
        }

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeCreatedDate = this.onChangeCreatedDate.bind(this);
        this.onChangeActionType = this.onChangeActionType.bind(this);
        this.onChangeIpAddress = this.onChangeIpAddress.bind(this);
       this.onChangeItemperpage = this.onChangeItemperpage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
            
            
        }



    resetButton() {
        this.setState({
            id: '',
            createdDate: '',
            actionType: '',
            ipAddress: '',
       
        data: [],})
        this.setState({data:[]})
       }

     
       onChangeId(e){
        this.setState({ id: e.target.value }) 
       }
       onChangeCreatedDate(e) {
        this.setState({ currency: e.target.value })
    }
   
      onChangeActionType(e){
        this.setState({actionType: e.target.value})
    }
    onChangeIpAddress(e){
        this.setState({ipAddress: e.target.value})
     }
  

  onChangeItemperpage(e){
     this.setState({itemsperpage: e.target.value})
     this.props.dispatch(setPaginationSecondValue(e.target.value))
     this.props.dispatch(getLoginHistorytableList(this.props.paginationFirstValue,e.target.value,this.state.data))
      
  }

   onSubmit(e) {
        e.preventDefault()
        // e.target.resetButton();
        //this.props.dispatch(getPlayerSearchList)(this.props)
        // if(this.state.username != '' || this.state.firstName != '' || this.state.lastName != '' || this.state.email != '' || this.state.customerId != ''
        // || this.state.ipAddress != '' || this.state.phoneNumber != '' || this.state.country != '' ||  this.state.datepicker != '' || this.state.referCode != '' ||
        // this.state.cgr != '' || this.state.AccountSatus != ''){
           this.setState({data:{ id: this.state.id,
            ip: this.state.ip,
            ipCountry: this.state.ipAddress,
            activity: this.state.actionType,
            createdDate: this.state.createdDate,
           
              }
         })
//var  playerserachdata =[];
console.log("userid",this.state.id)
var playerserachdata=  { id: this.state.id,
    ip: this.state.ip,
    ipCountry: this.state.ipAddress,
    activity: this.state.actionType,
    createdDate: this.state.createdDate,

        }
        this.props.dispatch(getLoginHistorytableList(this.props.paginationFirstValue,this.props.paginationSecondValue,playerserachdata))
        
        //}
     }
    render(){
        return(<>
        
        <div classNameName="CMS-tabContent" style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'295px'}}>
        {/* <PrimaryPlayer/> */}
        {/* <div classNameName="CMS-page-tabs">
                                <ul>

                                    {
                                   this.props.sidebarTabs.length > 0 && this.props.sidebarTabs.map((item,index)=> {return (
                                    <>   
                                    <li key={index} >
                                       
                                       <span to="#">{item.subtitle} 
                                          </span>
                                          <span classNameName="close"><span classNameName="material-icons md-18" data-icon="close" onClick={()=>this.navLinksClosedFunction(item)}></span> </span>
                                   
                                    </li>
                                    </>
                                    )})}
                                  
                                </ul>
                            </div>  */}
                           <div class="CMS-page-tabs">
                                <ul>
                                    <li class="active">
                                        <a>Login History<span class="close"
                                                onclick=""><span
                                                    class="material-icons md-18" data-icon="close"></span></span></a>
                                    </li>

                                </ul>
                            </div>

                                            <div className="CMS-tab-panel" id="CMS-loginHistory">
                                                    <div className="CMS-box CMS-box-content">


                                                        <div className="row">
                                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                                <div className="CMS-formGroup">
                                                                    <div className="CMS-formLabel">ID</div>
                                                                    <div className="CMS-formControl-group">
                                                                        <div className="CMS-formControl">
                                                                            <input type="number" name="" placeholder="ID"  onChange={this.onChangeId}/>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                                <div className="CMS-formGroup">
                                                                    <div className="CMS-formLabel">Date</div>
                                                                    <div className="CMS-formControl-group">
                                                                        <div className="CMS-formControl">
                                                                            <input type="text"
                                                                                className="CMS-datepicker hasDatepicker"
                                                                                name="Dateto" placeholder="09/02/2021"
                                                                                id="dp1630564180299" value={this.state.createdDate} onChange={this.onChangeCreatedDate}/>
                                                                        </div>
                                                                        <div className="CMS-formAddon"><span
                                                                                className="material-icons md-18"
                                                                                data-icon="calendar_today"></span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                                <div className="CMS-formGroup">
                                                                    <div className="CMS-formLabel">Action Type</div>
                                                                    <div className="CMS-dropdown CMS-formControl">
                                                                        <div className="CMS-select">
                                                                            <select value={this.state.actionType} onChange={this.onChangeActionType}>
                                                                                <option>Select</option>
                                                                                <option>Login</option>
                                                                                <option>Logout</option>
                                                                                <option>Account Status Change</option>

                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                                <div className="CMS-formGroup">
                                                                    <div className="CMS-formLabel">IP Address</div>
                                                                    <div className="CMS-formControl-group">
                                                                        <div className="CMS-formControl">
                                                                            <input type="text" name=""
                                                                                placeholder="IP Address" value={this.state.ipAddress} onChange={this.onChangeIpAddress}/>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div className="mt-20"></div>

                                                        <div className="row">
                                                            <div className="col-md-12 col-lg-12 col-xl-12">
                                                                <div className="CMS-btnContainer">
                                                                    <button onClick={(e)=> this.onSubmit(e)}
                                                                        className="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                                        type="button">Search</button>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-20"></div>
                                                        <div className="CMS-filter-result" id="result">
                                                            <div className="CMS-pagination">
                                                                <div className="CMS-pagination-container">

                                                                    <div className="CMS-pagination-list">
                                                                        <ul>
                                                                            <li><a href="#"><span className="material-icons"
                                                                                        data-icon="first_page"></span></a>
                                                                            </li>
                                                                            <li><a href="#"><span className="material-icons"
                                                                                        data-icon="navigate_before"></span></a>
                                                                            </li>
                                                                            <li><a className="active" href="#">1</a></li>
                                                                            <li><a href="#">2</a></li>
                                                                            <li><a href="#">3</a></li>
                                                                            <li><a href="#"><span className="material-icons"
                                                                                        data-icon="navigate_next"></span></a>
                                                                            </li>
                                                                            <li><a href="#"><span className="material-icons"
                                                                                        data-icon="last_page"></span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                    <div className="CMS-page-slection">
                                                                        <div className="CMS-number-of-files CMS-select">
                                                                            <select id="country" name="File">
                                                                                <option value="PDF">25</option>
                                                                                <option value="CSV">50</option>
                                                                                <option value="XLS">100</option>
                                                                                <option value="XLS">200</option>
                                                                                <option value="XLS">500</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="CMS-file-type CMS-select">
                                                                            <select id="country" name="File">
                                                                                <option value="PDF">PDF</option>
                                                                                <option value="CSV">CSV</option>
                                                                                <option value="XLS">XLS</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="CMS-download-icon">
                                                                            <a href="#"><span className="material-icons"
                                                                                    data-icon="file_download"></span></a>
                                                                        </div>
                                                                    </div>



                                                                    <div className="CMS-page-results">
                                                                        Results 1-100 of 108
                                                                    </div>


                                                                </div>
                                                            </div>
                                                            </div>

                                                            {/* <div className="CMS-box CMS-table CMS-table-triped">
                                                                <table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>ID</th>
                                                                            <th>Time / Date Created</th>
                                                                            <th>Action</th>
                                                                            <th>IP</th>
                                                                            <th>IP Country</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>1586</td>
                                                                            <td>4/16/2021 14:00</td>
                                                                            <td>Login</td>
                                                                            <td>103.21.244.0/22</td>
                                                                            <td>INDIA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2054</td>
                                                                            <td>7/13/2021 1:53</td>
                                                                            <td>Logout</td>
                                                                            <td>103.22.200.0/22</td>
                                                                            <td>INDIA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2235</td>
                                                                            <td>4/20/2021 16:26</td>
                                                                            <td>Login</td>
                                                                            <td>103.31.4.0/22</td>
                                                                            <td>INDIA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2497</td>
                                                                            <td>6/1/2021 16:28</td>
                                                                            <td>Login</td>
                                                                            <td>104.16.0.0/13</td>
                                                                            <td>INDIA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2777</td>
                                                                            <td>6/2/2021 2:08</td>
                                                                            <td>Login</td>
                                                                            <td>104.24.0.0/14</td>
                                                                            <td>INDIA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3854</td>
                                                                            <td>7/3/2021 1:23</td>
                                                                            <td>Logout</td>
                                                                            <td>108.162.192.0/18</td>
                                                                            <td>INDIA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3963</td>
                                                                            <td>6/18/2021 4:08</td>
                                                                            <td>Logout</td>
                                                                            <td>131.0.72.0/22</td>
                                                                            <td>INDIA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4087</td>
                                                                            <td>4/22/2021 14:38</td>
                                                                            <td>Login</td>
                                                                            <td>141.101.64.0/18</td>
                                                                            <td>INDIA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>6048</td>
                                                                            <td>7/31/2021 17:50</td>
                                                                            <td>Logout</td>
                                                                            <td>162.158.0.0/15</td>
                                                                            <td>INDIA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>6877</td>
                                                                            <td>7/26/2021 15:20</td>
                                                                            <td>Login</td>
                                                                            <td>172.64.0.0/13</td>
                                                                            <td>INDIA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>7100</td>
                                                                            <td>1/1/2021 4:17</td>
                                                                            <td>Account Status Change - Suspended</td>
                                                                            <td>System</td>
                                                                            <td>N/A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>7155</td>
                                                                            <td>1/2/2021 4:17</td>
                                                                            <td>Account Status Change - Open</td>
                                                                            <td>Platform</td>
                                                                            <td>N/A</td>
                                                                        </tr>


                                                                    </tbody>

                                                                </table>
                                                            </div> */}


                                                        </div>



                                                    
                                                </div>

                                            </div>
                     
                      <LoginHistoryTable/>  
        </>)
    }
}
function mapStateToProps(state) {
    //console.log("state",state)
    return {
        displayValue: state.sidebar.displayValue,
        sidebarTabs: state.sidebar.sidebarTabs,
        paginationFirstValue: state.playersearch.paginationFirstValue,
        paginationSecondValue: state.playersearch.paginationSecondValue
    };
}
function mapDispatchToProps(dispatch) {
  return {
      dispatch,
      actions: bindActionCreators({
      }, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginHistory);