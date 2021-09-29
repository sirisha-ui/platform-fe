import React from 'react';
import { connect } from 'react-redux';
// import sidebar from "../sidebar";
import { bindActionCreators } from "redux";

// import betHistoryTable from './betHistoryTable';
class BetLiability extends React.Component{

    constructor(props){
        
        super(props);
        this.state = {
            id: '',
        betType: '',
        betId: '',
        sport: '',
        brand: '',
        description: '',
        eventName: '',
        stake: '',
        totalStake: '',
        win: '',
        customer: '',
        placedOn: '',
        settledOn: '',
        rejectionCode: '',
        walletID: '',
        currency: '',
        customerId: '',
        rejected: '',
        voided: '',
        subcategory: '',
        placedBefore: '',
        placedAfter: '',
        resulted: '',
        market: '',
            data: [],
        }

        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeCurrency = this.onChangeCurrency.bind(this);
         
        // this.onSubmit = this.onSubmit.bind(this);
            
            
        }



    resetButton() {
        this.setState({
        id: '',
        betType: '',
        betId: '',
        sport: '',
        brand: '',
        description: '',
        eventName: '',
        stake: '',
        totalStake: '',
        win: '',
        customer: '',
        placedOn: '',
        settledOn: '',
        rejectionCode: '',
        walletID: '',
        currency: '',
        customerId: '',
        rejected: '',
        voided: '',
        subcategory: '',
        placedBefore: '',
        placedAfter: '',
        resulted: '',
        market: '',
        data: [],})
        this.setState({data:[]})
       }

     

    onChangeCurrency(e) {
        this.setState({ currency: e.target.value })
    }
   
  onChangeBrand(e){
     this.setState({brand: e.target.value})
  }

  

//   onChangeItemperpage(e){
//      this.setState({itemsperpage: e.target.value})
//      this.props.dispatch(setPaginationSecondValue(e.target.value))
//      this.props.dispatch(getPlayerSearchList(this.props.paginationFirstValue,e.target.value,this.state.data))
      
//   }

//     onSubmit(e) {
//         e.preventDefault()
//         // e.target.resetButton();
//         //this.props.dispatch(getPlayerSearchList)(this.props)
//         debugger
//         // if(this.state.username != '' || this.state.firstName != '' || this.state.lastName != '' || this.state.email != '' || this.state.customerId != ''
//         // || this.state.ipAddress != '' || this.state.phoneNumber != '' || this.state.country != '' ||  this.state.datepicker != '' || this.state.referCode != '' ||
//         // this.state.cgr != '' || this.state.AccountSatus != ''){
//            this.setState({data:{ brand: this.state.brand,
//             betType: this.state.betType,
//             settled: this.state.settled,
//             sport: this.state.sport,
//               customerId: this.state.customerId,
//               currency: this.state.currency,
//               rejected: this.state.rejected,
//               voided: this.state.voided,
//               subcategory: this.state.subcategory,
//               placedBefore: this.state.placedBefore,
//               rejectionCode: this.state.rejectionCode,
//               betId: this.state.betId,
//               event: this.state.event,
//               placedAfter: this.state.placedAfter,
//               resulted: this.state.resulted,
//               market: this.state.market
//               }
//          })
// //var  playerserachdata =[];
// var playerserachdata=  { brand: this.state.brand,
//         betType: this.state.betType,
//         settled: this.state.settled,
//         sport: this.state.sport,
//         customerId: this.state.customerId,
//         currency: this.state.currency,
//         rejected: this.state.rejected,
//         voided: this.state.voided,
//         subcategory: this.state.subcategory,
//         placedBefore: this.state.placedBefore,
//         rejectionCode: this.state.rejectionCode,
//         betId: this.state.betId,
//         event: this.state.event,
//         placedAfter: this.state.placedAfter,
//         resulted: this.state.resulted,
//         market: this.state.market,

//         }
//         //this.props.dispatch(getPlayerSearchList(this.props.paginationFirstValue,this.props.paginationSecondValue,playerserachdata))
        
//         //}
//      }
    render(){
        return(<>
        <div className="CMS-tabContent" style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'295px'}}>
        {/* <div className="CMS-page-tabs">
                                <ul>

                                    {
                                   this.props.sidebarTabs.length > 0 && this.props.sidebarTabs.map((item,index)=> {return (
                                    <>   
                                    <li key={index} >
                                       
                                       <span to="#">{item.subtitle} 
                                          </span>
                                          <span className="close"><span className="material-icons md-18" data-icon="close" onClick={()=>this.navLinksClosedFunction(item)}></span> </span>
                                   
                                    </li>
                                    </>
                                    )})}
                                  
                                </ul>
                            </div>  */}
                            <div class="CMS-page-tabs">
                                <ul>
                                    <li class="active">
                                        <a href="CMS-betting">BET LIABILITY<span class="close"
                                                onclick="window.location.href='dashboard.html'"><span
                                                    class="material-icons md-18" data-icon="close"></span></span></a>
                                    </li>

                                </ul>
                            </div>
                                     
                                        <div className="CMS-box CMS-box-content">
                                            <div className="row no-gutters">
                                                
                                            <div class="col-md-4 col-lg-3 col-xl-2">
                                                    <div class="CMS-formGroup">
                                                        <div class="CMS-formLabel">Brand</div>
                                                        <div class="CMS-dropdown CMS-brands-dropdown CMS-formControl">
                                                            <div class="CMS-dropdown-btn">All Brands</div>
                                                            <div class="CMS-dropdown-menu CMS-form-group">

                                                            <select value={this.state.brand} onChange={this.onChangeBrand}>
                                                              <option>Select</option>
                                                                <option>Ken</option>
                                                                 <option>UG</option>
                                                                      <option>NG</option>
                                                                       <option>ZM</option>
                                                                        <option>UGX</option>
                                                                          <option>NGN</option>
                                                                          <option>TZ</option>
                                                                         </select>
                                                               
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                

                                                <div class="col-md-4 col-lg-3 col-xl-2">
                                                    <div class="CMS-formGroup">
                                                        <div class="CMS-formLabel">All Events</div>
                                                        <div class="CMS-dropdown CMS-formControl">
                                                            <div class="CMS-select">
                                                                <select>
                                                                    <option>All Events</option>
                                                                    <option>Pre Match Only</option>
                                                                    <option>In-Play Only</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-lg-3 col-xl-2">
                                                    <div class="CMS-formGroup">
                                                        <div class="CMS-formLabel">All Book Types</div>
                                                        <div class="CMS-dropdown CMS-formControl">
                                                            <div class="CMS-select">
                                                                <select>
                                                                    <option>All Book Types</option>
                                                                    <option>Price Only</option>
                                                                    <option>SP Only</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-lg-3 col-xl-2">
                                                    <div class="CMS-formGroup">
                                                        <div class="CMS-formLabel">All Bet Factors</div>
                                                        <div class="CMS-dropdown CMS-formControl">
                                                            <div class="CMS-select">
                                                                <select>
                                                                    <option>All Bet Factors</option>
                                                                    <option>Less Than 1</option>
                                                                    <option>Exactly 1</option>
                                                                    <option>Mor Than 1</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-lg-3 col-xl-2">
                                                    <div class="CMS-formGroup">
                                                        <div class="CMS-formLabel">All Currencies</div>
                                                        <div class="CMS-dropdown CMS-formControl">
                                                            <div class="CMS-select">
                                                                <select>
                                                                    <option>All Currencies</option>
                                                                    <option value="">EUR</option>
                                                                    <option value="">USD</option>
                                                                    <option value="">GBP</option>
                                                                    <option value="">KSH</option>
                                                                    <option value="">UGX</option>
                                                                    <option value="">NGN</option>
                                                                    <option value="">TZS</option>
                                                                    <option value="">XWM</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-lg-3 col-xl-2">
                                                    <div class="CMS-formGroup">
                                                        <div class="CMS-formLabel">All Sports</div>
                                                        <div class="CMS-dropdown CMS-formControl">
                                                            <div class="CMS-select">
                                                                <select>
                                                                    <option>All Sports</option>
                                                                    <option value="">Football</option>
                                                                    <option value="">Basketball</option>
                                                                    <option value="">Cricket</option>
                                                                    <option value="">Tennis</option>
                                                                    <option value="">Volleyball</option>
                                                                    <option value="">Golf</option>
                                                                    <option value="">American Football</option>
                                                                    <option value="">Aussie Rules</option>
                                                                    <option value="">Auto Racing</option>
                                                                    <option value="">Baseball</option>
                                                                    <option value="">Beach Football</option>
                                                                    <option value="">Beach Volleyball</option>
                                                                    <option value="">Biathlon</option>
                                                                    <option value="">Boxing</option>
                                                                    <option value="">Chess</option>
                                                                    <option value="">Cycling</option>
                                                                    <option value="">Darts</option>
                                                                    <option value="">Esports</option>
                                                                    <option value="">Floorball</option>
                                                                    <option value="">Formula 1</option>
                                                                    <option value="">Gaelic Football</option>
                                                                    <option value="">Handball</option>
                                                                    <option value="">Hurling</option>
                                                                    <option value="">Ice Hockey</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                           
                                            <div className="mt-20"></div>

                                            {/* <div className="row">
                                                <div className="col-md-12 col-lg-12 col-xl-12">
                                                    <div className="CMS-btnContainer">
                                                        <button onClick={(e)=> this.onSubmit(e)}
                                                            className="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                            type="button">Go</button>
                                                        <button onClick={()=>this.resetButton()}
                                                            className="CMS-btn CMS-btnQuaternary active CMS-btnMedium"
                                                            type="button">Reset</button>
                                                    </div>
                                                </div>
                                            </div> */}
                                         
                                         <div class="row">
                                                <div class="col-md-12 col-lg-12 col-xl-12">
                                                    <div class="CMS-btnContainer">
                                                        <button onclick="myFunction()"
                                                            class="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                            type="button">Search</button>
                                                        <button onclick="window.location.href=''"
                                                            class="CMS-btn CMS-btnQuaternary active CMS-btnMedium"
                                                            type="button">Reset</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="CMS-filter-result" id="result">
                        <div className="CMS-pagination">
                           <div className="CMS-pagination-container">
                              <div className="CMS-pagination-list">
                                 <ul>
                                    <li><a href="#"><span className="material-icons" data-icon="first_page"></span></a></li>
                                    <li><a href="#"><span className="material-icons" data-icon="navigate_before"></span></a></li>
                                   
                                      
                                    <li><a className="active" href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    
                                    <li><a href="#"><span className="material-icons" data-icon="navigate_next"></span></a></li>
                                    <li><a href="#"><span className="material-icons" data-icon="last_page"></span></a></li>
                                 </ul>
                              </div>
                              <div className="CMS-page-slection">
                                 <div className="CMS-number-of-files CMS-select">
                                    <select id="country" name="File" >
                                       <option value="25">25</option>
                                       <option value="50">50</option>
                                       <option value="100">100</option>
                                       <option value="200">200</option>
                                       <option value="500">500</option>
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
                                    <a href="#"><span className="material-icons" data-icon="file_download"></span></a>
                                 </div>
                              </div>
                              <div className="CMS-page-results">
                                 {/* Results {this.props.paginationFirstValue}-{this.props.paginationSecondValue} of {this.props.paginationSecondValue} 
                               */}
                               Results of 25
                              </div>
                           </div>
                        </div>
                     </div>
                                        </div>
                                    </div>

                    


                                    <div class="CMS-box CMS-table CMS-table-triped tableHeght" style ={{width: this.props.displayValue ? '100%':'79%', marginLeft: this.props.displayValue ?'0px':'295px'}}>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Start</th>
                                                            <th>Sub Category</th>
                                                            <th>State</th>
                                                            <th>Min P&L</th>
                                                            <th>Min Place Loss</th>
                                                            <th>Bets</th>
                                                            <th>Stakes</th>
                                                            <th>Bets (R)</th>
                                                            <th>Stakes (R)</th>
                                                            <th>Loss (R)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><a href="">NFL 2012/22</a></td>
                                                            <td>18/08/21 05:00:00</td>
                                                            <td>NFL</td>
                                                            <td>IN_PLAY</td>
                                                            <td><span class="CMS-negative-value">(-5353.25)</span></td>
                                                            <td><span class="CMS-negative-value">(-617.11)</span></td>
                                                            <td>106</td>
                                                            <td>1006.82</td>
                                                            <td>0</td>
                                                            <td>993.19</td>
                                                            <td><span class="CMS-negative-value">(-53924.76)</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="">NCAA(F) Championship 2021/22 Winner</a></td>
                                                            <td>23/08/21 05:00:00</td>
                                                            <td>NCAA Division 1 FBS</td>
                                                            <td>IN_PLAY</td>
                                                            <td><span class="CMS-negative-value">(-118.48)</span></td>
                                                            <td>0</td>
                                                            <td>8</td>
                                                            <td>47.48</td>
                                                            <td>0</td>
                                                            <td>0.00</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="">(USA) Ncaa Regular 2021/22</a></td>
                                                            <td>23/08/21 05:00:00</td>
                                                            <td>(USA) NCAA outright</td>
                                                            <td>IN_PLAY</td>
                                                            <td><span class="CMS-negative-value">(-84.62)</span></td>
                                                            <td>0</td>
                                                            <td>1</td>
                                                            <td>18.80</td>
                                                            <td>0</td>
                                                            <td>0.00</td>
                                                            <td><span class="CMS-negative-value">(-37893.41)</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="">CFL 2021</a></td>
                                                            <td>13/08/21 02:30:00</td>
                                                            <td>Canada Football League</td>
                                                            <td>IN_PLAY</td>
                                                            <td><span class="CMS-negative-value">(-25.95)</span></td>
                                                            <td>0</td>
                                                            <td>1</td>
                                                            <td>5.77</td>
                                                            <td>0</td>
                                                            <td>0.00</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="">New York Jets @ New York Gaints</a></td>
                                                            <td>15/08/2021 00:30:00</td>
                                                            <td>US NFL Pre-Season</td>
                                                            <td>SCHEDULED</td>
                                                            <td><span class="CMS-negative-value">(-25.48)</span></td>
                                                            <td>0</td>
                                                            <td>2</td>
                                                            <td>29.98</td>
                                                            <td>8</td>
                                                            <td>34.02</td>
                                                            <td><span class="CMS-negative-value">(-1810.02)</span></td>
                                                        </tr>

                                                        <tr>
                                                            <td><a href="">Buffalo bulls @ Detroit Lions</a></td>
                                                            <td>14/08/2021 00:00:00</td>
                                                            <td>US NFL Pre-Season</td>
                                                            <td>SCHEDULED</td>
                                                            <td><span class="CMS-negative-value">(-12.32)</span></td>
                                                            <td>0</td>
                                                            <td>8</td>
                                                            <td>25.36</td>
                                                            <td>23</td>
                                                            <td>54.83</td>
                                                            <td><span class="CMS-negative-value">(-36863.39)</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="market-type.html">San Francisco 49ers @ Detroit
                                                                    Lions</a></td>
                                                            <td>12/09/2021 18:00:00</td>
                                                            <td>NFL</td>
                                                            <td>SCHEDULED</td>
                                                            <td><span class="CMS-negative-value">(-8.07)</span></td>
                                                            <td>0</td>
                                                            <td>1</td>
                                                            <td>2.88</td>
                                                            <td>19</td>
                                                            <td>64.88</td>
                                                            <td><span class="CMS-negative-value">(-37406.38)</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="">New York Jets @ carolina panthers</a></td>
                                                            <td>12/09/2021 18:00:00</td>
                                                            <td>NFL</td>
                                                            <td>SCHEDULED</td>
                                                            <td><span class="CMS-negative-value">(-8.07)</span></td>
                                                            <td>0</td>
                                                            <td>0</td>
                                                            <td>0.00</td>
                                                            <td>0</td>
                                                            <td>50.47</td>
                                                            <td><span class="CMS-negative-value">(-35693.08)</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="">Chicago Bears @ Los Angeles Rams</a></td>
                                                            <td>13/09/2021 01:20:00</td>
                                                            <td>NFL</td>
                                                            <td>SCHEDULED</td>
                                                            <td>0</td>
                                                            <td>0</td>
                                                            <td>1</td>
                                                            <td>2.88</td>
                                                            <td>18</td>
                                                            <td>39.83</td>
                                                            <td><span class="CMS-negative-value">(-14941.37)</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="">Baltimore Ravens @ Las Vegas Riders</a></td>
                                                            <td>14/09/2021 01:15:00</td>
                                                            <td>NFL</td>
                                                            <td>SCHEDULED</td>
                                                            <td>0</td>
                                                            <td>0</td>
                                                            <td>0</td>
                                                            <td>0.00</td>
                                                            <td>19</td>
                                                            <td>39.20</td>
                                                            <td><span class="CMS-negative-value">(-27554.95)</span></td>
                                                        </tr>

                                                    </tbody>

                                                </table>

                                            </div>
                     
                     {/* <betHistoryTable tableData = {this.state.data}/>  */}
        </>)
    }
}
function mapStateToProps(state) {
    //console.log("state",state)
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
export default connect(mapStateToProps,mapDispatchToProps)(BetLiability);