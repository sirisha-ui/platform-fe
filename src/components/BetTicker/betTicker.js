import React from 'react';
import { connect } from 'react-redux';
// import sidebar from "../sidebar";
import { bindActionCreators } from "redux";

// import betHistoryTable from './betHistoryTable';
class Betticker extends React.Component{

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
        <div className="CMS-tabContent" style ={{width: this.props.displayValue ? '100%':'79%', marginLeft: this.props.displayValue ?'0px':'295px'}}>
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
                                        <a href="CMS-betting">BET TICKER<span class="close"
                                                onclick="window.location.href='dashboard.html'"><span
                                                    class="material-icons md-18" data-icon="close"></span></span></a>
                                    </li>

                                </ul>
                            </div>
                                     
                                        <div className="CMS-box CMS-box-content">
                                            <div className="row no-gutters">
                                                


                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Brand</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
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
                                                </div>

                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Currency</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="country" name="File"  value={this.state.currency} onChange={this.onChangeCurrency}>
                                                                        <option value="">Select</option>
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

                               
                                        </div>
                                    </div>

                                    <div class="CMS-box CMS-table CMS-table-triped CMS-betTicker"  style ={{width: this.props.displayValue ? '100%':'79%', marginLeft: this.props.displayValue ?'0px':'295px'}}>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Placed Bet Time</th>
                                                        <th>Age of Account (AoA)</th>
                                                        <th>Customer</th>
                                                        <th>Stake Factor</th>
                                                        <th>Start Time</th>
                                                        <th>Sub Category</th>
                                                        <th>Stake</th>
                                                        <th>Bet Type</th>
                                                        <th>Selection / Event</th>
                                                        <th>Price</th>
                                                        <th>Potential Win</th>
                                                        <th>Brand</th>
                                                        <th>Platform</th>
                                                        <th>Cash Out</th>
                                                        <th>Bet Placement Error Message</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Sunday ...</td>
                                                        <td>30+</td>
                                                        <td class="CMS-stakeFactor-more-than-1"><a href="">Mr Frank
                                                                Bellissimo</a></td>
                                                        <td class="CMS-stakeFactor-more-than-1">1.5</td>
                                                        <td>Sunday ...</td>
                                                        <td>Kenya Super League</td>
                                                        <td class="CMS-biggerBets">150</td>
                                                        <td>Win Single</td>
                                                        <td>Mount Kenya United To Score</td>
                                                        <td>2</td>
                                                        <td>0.0</td>
                                                        <td>Betlion-ke</td>
                                                        <td>Web</td>
                                                        <td></td>
                                                        <td>Error Message</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sunday ...</td>
                                                        <td>14</td>
                                                        <td class="CMS-stakeFactor-less-than-1"><a href="">Mr Frank
                                                                Bellissimo</a></td>
                                                        <td class="CMS-stakeFactor-less-than-1">0.5</td>
                                                        <td>Sunday ...</td>
                                                        <td>Kenya Super League</td>
                                                        <td>50</td>
                                                        <td>Win Single</td>
                                                        <td>Mount Kenya United To Score</td>
                                                        <td>2</td>
                                                        <td>0.0</td>
                                                        <td>Betlion-ke</td>
                                                        <td>Web</td>
                                                        <td></td>
                                                        <td>Error Message</td>
                                                    </tr>
                                                    <tr class="CMS-declined">
                                                        <td>Sunday ...</td>
                                                        <td>7</td>
                                                        <td><a href="">Mr Frank Bellissimo</a></td>
                                                        <td>1.5</td>
                                                        <td>Sunday ...</td>
                                                        <td>Kenya Super League</td>
                                                        <td>250</td>
                                                        <td>Win Single</td>
                                                        <td>Mount Kenya United To Score</td>
                                                        <td>2</td>
                                                        <td>0.0</td>
                                                        <td>Betlion-ke</td>
                                                        <td>Web</td>
                                                        <td></td>
                                                        <td>Error Message</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sunday ...</td>
                                                        <td>30+</td>
                                                        <td class="CMS-stakeFactor-1"><a href="">Mr Frank Bellissimo</a>
                                                        </td>
                                                        <td class="CMS-stakeFactor-1">1</td>
                                                        <td>Sunday ...</td>
                                                        <td>Kenya Super League</td>
                                                        <td class="CMS-biggerBets">150</td>
                                                        <td>Win Single</td>
                                                        <td>Mount Kenya United To Score</td>
                                                        <td>2</td>
                                                        <td>0.0</td>
                                                        <td>Betlion-ke</td>
                                                        <td>Web</td>
                                                        <td></td>
                                                        <td>Error Message</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sunday ...</td>
                                                        <td>14</td>
                                                        <td class="CMS-stakeFactor-more-than-1"><a href="">Mr Frank
                                                                Bellissimo</a></td>
                                                        <td class="CMS-stakeFactor-more-than-1">1.5</td>
                                                        <td>Sunday ...</td>
                                                        <td>Kenya Super League</td>
                                                        <td>80</td>
                                                        <td>Win Single</td>
                                                        <td>Mount Kenya United To Score</td>
                                                        <td>2</td>
                                                        <td>0.0</td>
                                                        <td>Betlion-ke</td>
                                                        <td>Web</td>
                                                        <td></td>
                                                        <td>Error Message</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sunday ...</td>
                                                        <td>30+</td>
                                                        <td class="CMS-stakeFactor-more-than-1"><a href="">Mr Frank
                                                                Bellissimo</a></td>
                                                        <td class="CMS-stakeFactor-more-than-1">1.5</td>
                                                        <td>Sunday ...</td>
                                                        <td>Kenya Super League</td>
                                                        <td class="CMS-biggerBets">250</td>
                                                        <td>Win Single</td>
                                                        <td>Mount Kenya United To Score</td>
                                                        <td>2</td>
                                                        <td>0.0</td>
                                                        <td>Betlion-ke</td>
                                                        <td>Web</td>
                                                        <td></td>
                                                        <td>Error Message</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sunday ...</td>
                                                        <td>30+</td>
                                                        <td class="CMS-stakeFactor-less-than-1"><a href="">Mr Frank
                                                                Bellissimo</a></td>
                                                        <td class="CMS-stakeFactor-less-than-1">0.5</td>
                                                        <td>Sunday ...</td>
                                                        <td>Kenya Super League</td>
                                                        <td>50</td>
                                                        <td>Win Single</td>
                                                        <td>Mount Kenya United To Score</td>
                                                        <td>2</td>
                                                        <td>0.0</td>
                                                        <td>Betlion-ke</td>
                                                        <td>Web</td>
                                                        <td></td>
                                                        <td>Error Message</td>
                                                    </tr>
                                                    <tr class="CMS-declined">
                                                        <td>Sunday ...</td>
                                                        <td>30+</td>
                                                        <td><a href="">Mr Frank Bellissimo</a></td>
                                                        <td>1.5</td>
                                                        <td>Sunday ...</td>
                                                        <td>Kenya Super League</td>
                                                        <td>400</td>
                                                        <td>Win Single</td>
                                                        <td>Mount Kenya United To Score</td>
                                                        <td>2</td>
                                                        <td>0.0</td>
                                                        <td>Betlion-ke</td>
                                                        <td>Web</td>
                                                        <td></td>
                                                        <td>Error Message</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sunday ...</td>
                                                        <td>30+</td>
                                                        <td class="CMS-stakeFactor-1"><a href="">Mr Frank Bellissimo</a>
                                                        </td>
                                                        <td class="CMS-stakeFactor-1">1</td>
                                                        <td>Sunday ...</td>
                                                        <td>Kenya Super League</td>
                                                        <td class="CMS-biggerBets">150</td>
                                                        <td>Win Single</td>
                                                        <td>Mount Kenya United To Score</td>
                                                        <td>2</td>
                                                        <td>0.0</td>
                                                        <td>Betlion-ke</td>
                                                        <td>Web</td>
                                                        <td></td>
                                                        <td>Error Message</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sunday ...</td>
                                                        <td>30+</td>
                                                        <td class="CMS-stakeFactor-more-than-1"><a href="">Mr Frank
                                                                Bellissimo</a></td>
                                                        <td class="CMS-stakeFactor-more-than-1">1.5</td>
                                                        <td>Sunday ...</td>
                                                        <td>Kenya Super League</td>
                                                        <td class="CMS-biggerBets">200</td>
                                                        <td>Win Single</td>
                                                        <td>Mount Kenya United To Score</td>
                                                        <td>2</td>
                                                        <td>0.0</td>
                                                        <td>Betlion-ke</td>
                                                        <td>Web</td>
                                                        <td></td>
                                                        <td>Error Message</td>
                                                    </tr>


                                                </tbody>

                                            </table>
                                        </div>
                     
                     {/* <betHistoryTable tableData = {this.state.data}/>  */}
        </>)
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
export default connect(mapStateToProps,mapDispatchToProps)(Betticker);