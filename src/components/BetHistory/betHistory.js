import React from 'react';
import { connect } from 'react-redux';
// import sidebar from "../sidebar";
import { bindActionCreators } from "redux";
import betHistoryTable from './betHistoryTable';
class BetHistory extends React.Component{

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

         this.onChangeBetId = this.onChangeBetId.bind(this);
         this.onChangeBetType = this.onChangeBetType.bind(this);
         this.onChangeSettled = this.onChangeSettled.bind(this);
         this.onChangeSport = this.onChangeSport.bind(this);
        this.onChangeCurrency = this.onChangeCurrency.bind(this);
         this.onChangeCustomerId = this.onChangeCustomerId.bind(this);
         this.onChangeRejected = this.onChangeRejected.bind(this);
         this.onChangeVoided = this.onChangeVoided.bind(this);
         this.onChangeSubcategory = this.onChangeSubcategory.bind(this);
        this.onChangePlacedBefore = this.onChangePlacedBefore.bind(this);
         this.onChangeRejectionCode = this.onChangeRejectionCode.bind(this);
         this.onChangeEvent = this.onChangeEvent.bind(this);
         this.onChangePlacedAfter = this.onChangePlacedAfter.bind(this);
         this.onChangeResulted = this.onChangeResulted.bind(this);
         this.onChangeMarket = this.onChangeMarket.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
            
            
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

       onChangeBetId(e) {
        this.setState({ betId: e.target.value })
    }
    onChangeBetType(e){
        this.setState({ betType: e.target.value })
    }
    onChangeSport(e){
        this.setState({ sport: e.target.value })
    }
    onChangeSettled(e) {
        this.setState({ settled: e.target.value })
    }

    onChangeCurrency(e) {
        this.setState({ currency: e.target.value })
    }
    onChangeCustomerId(e){
        this.setState({ customerId: e.target.value })
    }
    onChangeRejected(e){
        this.setState({rejected: e.target.value })
    }
    onChangeVoided(e){
        this.setState({voided: e.target.value})
    }
    onChangeSubcategory(e){
        this.setState({ subcategory: e.target.value })
    }
    onChangePlacedBefore(e){
        this.setState({ placedBefore: e.target.value })
    }
    onChangeRejectionCode(e) {
     this.setState({ rejected: e.target.value })
  }
  onChangeBrand(e){
     this.setState({brand: e.target.value})
  }

  onChangeEvent(e){
    this.setState({event: e.target.value})
  }
  onChangePlacedAfter(e){
    this.setState({placedAfter: e.target.value})
  }
  onChangeResulted(e){
    this.setState({resulted: e.target.value})
  }
  onChangeMarket(e){
    this.setState({market: e.target.value})
  }

//   onChangeItemperpage(e){
//      this.setState({itemsperpage: e.target.value})
//      this.props.dispatch(setPaginationSecondValue(e.target.value))
//      this.props.dispatch(getPlayerSearchList(this.props.paginationFirstValue,e.target.value,this.state.data))
      
//   }

    onSubmit(e) {
        e.preventDefault()
        // e.target.resetButton();
        //this.props.dispatch(getPlayerSearchList)(this.props)
        debugger
        // if(this.state.username != '' || this.state.firstName != '' || this.state.lastName != '' || this.state.email != '' || this.state.customerId != ''
        // || this.state.ipAddress != '' || this.state.phoneNumber != '' || this.state.country != '' ||  this.state.datepicker != '' || this.state.referCode != '' ||
        // this.state.cgr != '' || this.state.AccountSatus != ''){
           this.setState({data:{ brand: this.state.brand,
            betType: this.state.betType,
            settled: this.state.settled,
            sport: this.state.sport,
              customerId: this.state.customerId,
              currency: this.state.currency,
              rejected: this.state.rejected,
              voided: this.state.voided,
              subcategory: this.state.subcategory,
              placedBefore: this.state.placedBefore,
              rejectionCode: this.state.rejectionCode,
              betId: this.state.betId,
              event: this.state.event,
              placedAfter: this.state.placedAfter,
              resulted: this.state.resulted,
              market: this.state.market
              }
         })
//var  playerserachdata =[];
var playerserachdata=  { brand: this.state.brand,
        betType: this.state.betType,
        settled: this.state.settled,
        sport: this.state.sport,
        customerId: this.state.customerId,
        currency: this.state.currency,
        rejected: this.state.rejected,
        voided: this.state.voided,
        subcategory: this.state.subcategory,
        placedBefore: this.state.placedBefore,
        rejectionCode: this.state.rejectionCode,
        betId: this.state.betId,
        event: this.state.event,
        placedAfter: this.state.placedAfter,
        resulted: this.state.resulted,
        market: this.state.market,

        }
        //this.props.dispatch(getPlayerSearchList(this.props.paginationFirstValue,this.props.paginationSecondValue,playerserachdata))
        
        //}
     }
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
                                                            <div className="CMS-formLabel">Bet Type is</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="country" name="File" value={this.state.betType} onChange={this.onChangeBetType}>
                                                                        <option value="">Select</option>
                                                                        <option value="">Single</option>
                                                                        <option value="">Double</option>
                                                                        <option value="">Treble</option>
                                                                        <option value="">Multiple 4+</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Settled</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="country" name="File" value={this.state.settled} onChange={this.onChangeSettled}>
                                                                        <option value="">Select</option>
                                                                        <option value="">Yes</option>
                                                                        <option value="">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Sport</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="" name="File" value={this.state.sport} onChange={this.onChangeSport}>
                                                                        <option value="">Select</option>
                                                                        <option value="">Football</option>
                                                                        <option value="">Horce Racing</option>
                                                                        <option value="">Tennis</option>
                                                                        <option value="">Golf</option>
                                                                        <option value="">Cricket</option>
                                                                        <option value="">American Football</option>
                                                                        <option value="">Rugby</option>
                                                                        <option value="">ESports</option>
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
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Rejected</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="country" name="File" value={this.state.rejected} onChange={this.onChangeRejected}>
                                                                        <option value="">Select</option>
                                                                        <option value="yes">Yes</option>
                                                                        <option value="no">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Voided</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="country" name="File" value={this.state.voided} onChange={this.onChangeVoided}>
                                                                        <option value="">Select</option>
                                                                        <option value="">Yes</option>
                                                                        <option value="">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Subcategory</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="" name="File" value={this.state.subcategory} onChange={this.onChangeSubcategory}>
                                                                        <option value="">Select</option>
                                                                        <option value="">English Premier League</option>
                                                                        <option value="">La Liga</option>
                                                                        <option value="">Bundesliga</option>
                                                                        <option value="">Serie A</option>
                                                                        <option value="">Ligue 1</option>
                                                                        <option value="">MLS</option>
                                                                        <option value="">Eredivisie</option>
                                                                        <option value="">Primeira Liga</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Placed Before <span
                                                                    className="material-icons md-18" data-icon="info"></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl-group">
                                                                <div className="CMS-formControl">
                                                                    <input type="text" className="CMS-datepicker"
                                                                        name="Dateto" placeholder="08/31/2021" value={this.state.placedBefore} onChange={this.onChangePlacedBefore}/>
                                                                </div>
                                                                <div className="CMS-formAddon"><span
                                                                        className="material-icons md-18"
                                                                        data-icon="calendar_today"></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Rejection Code</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="country" name="File" value={this.state.rejectionCode} onChange={this.onChangeRejectionCode}>
                                                                        <option value="">Select</option>
                                                                        <option value="">Insufficient Funds</option>
                                                                        <option value="">Exceeded Max Bet</option>
                                                                        <option value="">Market Suspended</option>
                                                                        <option value="">Price Change</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Bet ID</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <input type="text" value={this.state.betId} onChange={this.onChangeBetId}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Event</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="country" name="File" value={this.state.event} onChange={this.onChangeEvent}>
                                                                        <option value="">Select</option>
                                                                        <option value="">Brentford v Arsenal</option>
                                                                        <option value="">Brigton v Leeds United</option>
                                                                        <option value="">Chelsea v NewCastle</option>
                                                                        <option value="">Everton v Aston Villa</option>
                                                                        <option value="">Liverpool v Man United</option>
                                                                        <option value="">Norwich City v Burnley</option>
                                                                        <option value="">Tottenham v West Ham</option>
                                                                        <option value="">Wolves v Man City</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                           
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Placed After <span
                                                                    className="material-icons md-18" data-icon="info"></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl-group">
                                                                <div className="CMS-formControl">
                                                                    <input type="text" className="CMS-datepicker"
                                                                        name="Dateto" placeholder="08/31/2021" value={this.state.placedAfter} onChange={this.onChangePlacedAfter}/>
                                                                </div>
                                                                <div className="CMS-formAddon"><span
                                                                        className="material-icons md-18"
                                                                        data-icon="calendar_today"></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Resulted</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="country" name="File" value={this.state.resulted} onChange={this.onChangeResulted}>
                                                                        <option value="">Select</option>
                                                                        <option value="">Yes</option>
                                                                        <option value="">No</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Customer ID</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <input type="text" value={this.state.customerId} onChange={this.onChangeCustomerId}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-4 col-xl-4">
                                                    <div className="CMS-formGroup formGroup-inline">
                                                        <div className="col-6">
                                                            <div className="CMS-formLabel">Market</div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="CMS-formControl">
                                                                <div className="CMS-number-of-files CMS-select">
                                                                    <select id="country" name="File" value={this.state.market} onChange={this.onChangeMarket}>
                                                                        <option value="">Select</option>
                                                                        <option value="Ken">Match Winner</option>
                                                                        <option value="UG">Total Corners</option>
                                                                        <option value="NG">Over Under 2.5 Goals</option>
                                                                        <option value="ZM">Both Teams to Score</option>
                                                                        <option value="TZ">Double Chance</option>
                                                                        <option value="NG">Correcr Score</option>
                                                                        <option value="ZM">Total Bookings</option>
                                                                        <option value="TZ">Half Time Full Time</option>
                                                                    </select>
                                                                </div>
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
                                                            type="button">Go</button>
                                                        <button onClick={()=>this.resetButton()}
                                                            className="CMS-btn CMS-btnQuaternary active CMS-btnMedium"
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
                                             <li><a href="#"><span className="material-icons" data-icon="navigate_before"></span></a></li></ul>
                                              <ul>
                                       {/* {
                                       pageNumber.map((item, index)=>{

                                       })
                                       } */}
                                    <li><a className="active" href="#">1</a></li>
                                    {/* <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li> */}</ul>
                                    <ul>
                                    <li><a href="#"><span className="material-icons" data-icon="navigate_next"></span></a></li>
                                    <li><a href="#"><span className="material-icons" data-icon="last_page"></span></a></li>
                                 </ul>
                              </div>
                              <div className="CMS-page-slection">
                                 <div className="CMS-number-of-files CMS-select">
                                    <select id="country" name="File"  onChange={this.onChangeItemperpage}>
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
                                 Results of 100
                                 {/* {this.props.paginationFirstValue}-{this.props.paginationSecondValue} of {this.props.paginationSecondValue}  */}
                              </div>
                           </div>
                        </div>
                     </div>
                                        </div>
                                    </div>

                     
                     
                     <betHistoryTable tableData = {this.state.data}/> 
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
export default connect(mapStateToProps,mapDispatchToProps)(BetHistory);