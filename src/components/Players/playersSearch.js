
import React from 'react';
import { connect } from 'react-redux';
import PlayerSeachTable from '../playerTable/playerSearchTable';
import { playerapi } from '../../sharedfiles/EndpointConfig'
import { setPlayerSearch,getplayerList,getPlayerSearchList,setPaginationFirstValue,setPaginationSecondValue } from '../playerTable/playerSearchTableSlice';
class playerSearch extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {
           required: false,
         pageNumber:[],
         itemsperpage: '',
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            customerId: '',
            ipAddress: '',
            phoneNumber: '',
            referCode:'',
            country: '',
            datepicker: '',
            brand: '',
            playersignment: '',
            stackFactor: '',
            deposits: '',
            cgr: '',
            AccountSatus: '',
            recentPlayer: '',
            data: [],
        }
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeCustomerId = this.onChangeCustomerId.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeIpAddress = this.onChangeIpAddress.bind(this);
        this.onChangeReferCode = this.onChangeReferCode.bind(this);
        //this.onChangeRecentPlayer = this.onChangeRecentPlayer.bind(this);
        this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
        this.onChangeCurrency = this.onChangeCurrency.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeAccountStatus = this.onChangeAccountStatus.bind(this);
        this.onChangeItemperpage = this.onChangeItemperpage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
            
            
        }
        resetButton() {
        this.props.dispatch(setPlayerSearch(''))
         this.setState({ username: '',firstName: '',
         lastName: '',
         email: '',
         customerId: '',
         ipAddress: '',
         phoneNumber: '',
         referCode:'',
         country: '',
         datepicker: '',
         brand: '',
         playersignment: '',
         stackFactor: '',
         deposits: '',
         cgr: '',
         AccountSatus: '',
         recentPlayer: '',
         dateOfbirth: '',
         currency: ''})
         this.setState({data:[]})
        }
        onChangeUserName(e) {
            this.setState({ username: e.target.value })
        }
        onChangeFirstName(e){
            this.setState({ firstName: e.target.value })
        }
        onChangeLastName(e){
            this.setState({ lastName: e.target.value })
        }
        onChangeEmail(e) {
            this.setState({ email: e.target.value })
        }
    
        onChangePhoneNumber(e) {
            this.setState({ phoneNumber: e.target.value })
        }
        onChangeCustomerId(e){
            this.setState({ customerId: e.target.value })
        }
        onChangeCountry(e){
            this.setState({country: e.target.value })
        }
        onChangeDateOfBirth(e){
            this.setState({datepicker: e.target.value})
        }
        onChangeIpAddress(e){
            this.setState({ ipAddress: e.target.value })
        }
        onChangeReferCode(e){
            this.setState({ referCode: e.target.value })
        }
      //   onChangeRecentPlayer(e){
      //       this.setState({recentPlayer: e.target.value})
      //   }
      onChangeCurrency(e) {
         this.setState({ currency: e.target.value })
      }
      onChangeBrand(e){
         this.setState({brand: e.target.value})
      }
      onChangeAccountStatus(e){
         this.setState({accountSatus: e.target.value})
      }
      onChangeItemperpage(e){
         this.setState({itemsperpage: e.target.value})
         this.props.dispatch(setPaginationSecondValue(e.target.value))
         this.props.dispatch(getPlayerSearchList(this.props.paginationFirstValue,e.target.value,this.state.data))
          
      }
      pageClickAction(){
    this.props.dispatch(setPaginationFirstValue());
      }
        onSubmit(e) {
            e.preventDefault()
              if(this.state.username == '' || this.state.firstName == '' || this.state.lastName == '' || this.state.email == '' || this.state.customerId == ''
             || this.state.ipAddress == '' || this.state.phoneNumber == '' || this.state.country == '' ||  this.state.datepicker == '' || this.state.referCode == '' ||
             this.state.cgr == '' || this.state.AccountSatus == ''){
              this.setState({required: true})
            }
            // e.target.resetButton();
            //this.props.dispatch(getPlayerSearchList)(this.props)
           
               this.setState({data:{ username: this.state.username,
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  email: this.state.email,
                  customerId: this.state.customerId,
                  ipAddress: this.state.ipAddress,
                  phoneNumber: this.state.phoneNumber,
                  country: this.state.country,
                  datepicker: this.state.datepicker,
                  referCode: this.state.referCode,
                  brand: this.state.brand,
                  playersignment: this.state.playersignment,
                  stackFactor: this.state.stackFactor,
                  deposits: this.state.deposits,
                  cgr: this.state.cgr,
                  AccountSatus: this.state.AccountSatus
                  }
             })
    //var  playerserachdata =[];
   var playerserachdata=  { username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            customerId: this.state.customerId,
            ipAddress: this.state.ipAddress,
            phoneNumber: this.state.phoneNumber,
            country: this.state.country,
            datepicker: this.state.datepicker,
            referCode: this.state.referCode,
            brand: this.state.brand,
            playersignment: this.state.playersignment,
            stackFactor: this.state.stackFactor,
            deposits: this.state.deposits,
            cgr: this.state.cgr,
            AccountSatus: this.state.AccountSatus,

            }
            this.props.dispatch(getPlayerSearchList(this.props.paginationFirstValue,this.props.paginationSecondValue,playerserachdata))
            
            //}
         }
    

 render(){
 return (
 <>
<div className="CMS-layout-innerContent" style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'290px'}}>
<div className="CMS-page-tabs">
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
                            </div> 
<form>
   <div className="CMS-page CMS-playerSearch">
      <div className="CMS-page-content">
         <div className="CMS-full-page-content">
            <div className="CMS-tabs-content">
               
            <div class="CMS-tabs-content">
            {this.props.errorMessage !=''?
            <div class="CMS-msgBox CMS-noRecords">
                                    <div class="CMS-msgBox-container">
                                       {/* No Records founds */}
                                        {this.props.errorMessage}
                                    </div>
                                </div>: ""}
               <div className="CMS-tab-panel active" id="CMS-betting">
                  {/* 
                  <div className="CMS-box__header">
                     <div className="CMS-box__title">Sports Overview Report</div>
                  </div>
                  */}
                  <div className="CMS-tabContent">
                     <div className="CMS-box CMS-box-content" >
                        {this.state.required? 
                     <div class="CMS-msgBox CMS-error">
                                                <div class="CMS-msgBox-container">
                                                    Atleast one field required for your search
                                                </div>
                                            </div>
 :''}
                        <div className="row">
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Username *</div>
                                 <div class="CMS-formControl CMS-errorField">
                                    {/* <input type="" id="" name="" placeholder="Username"/> */}
                                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.onChangeUserName} />
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">First Name *</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="First Name"/> */}
                                    <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeFirstName} />
                                
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Last Name *</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="Last Name"/> */}
                                    <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.onChangeLastName} />
                                
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Country</div>
                                 <div className="CMS-dropdown CMS-formControl">
                                    <div className="CMS-select">
                                       <select value={this.state.country} onChange={this.onChangeCountry}>
                                          <option>Select</option>
                                          <option>Belgium</option>
                                          <option>Iceland</option>
                                          <option>Panama</option>
                                          <option>United Nations</option>
                                          <option>Hong Kong</option>
                                          <option>Germany</option>
                                          <option>Poland</option>
                                          <option>Australia</option>
                                          <option>United Kingdom</option>
                                          <option>France</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Email *</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="email"/> */}
                                    <input type="text" placeholder="email" value={this.state.email} onChange={this.onChangeEmail} />
                                
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Brand</div>
                                 <div className="CMS-dropdown CMS-formControl">
                                    <div className="CMS-select">
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
                           
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Date of Birth</div>
                                 <div className="CMS-formControl-group">
                                    <div className="CMS-formControl">
                                       <input type="number" className="CMS-datepicker" value={this.state.datepicker} onChange={this.onChangeDateOfBirth} name="Dateto" placeholder="08/31/2021"/>
                                    </div>
                                    <div className="CMS-formAddon"><span className="material-icons md-18" data-icon="calendar_today"></span></div>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Customer ID *</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="Customer ID"/> */}
                                    <input type="number" placeholder="Customer ID" value={this.state.customerId} onChange={this.onChangeCustomerId} />
                                
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">IP Address *</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="IP Address"/> */}
                                    <input type="text" placeholder="IP Address" value={this.state.ipAddress} onChange={this.onChangeIpAddress} />
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Referrer Code</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="Referrer Code"/> */}
                                    <input type="number" placeholder="Referrer Code" value={this.state.referCode} onChange={this.onChangeReferCode} />
                                
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Currency</div>
                                 <div className="CMS-dropdown CMS-formControl">
                                    <div className="CMS-select">
                                       <select id="currency" name="File" value={this.state.currency} onChange={this.onChangeCurrency}>
                                          <option>Select</option>
                                          <option>EUR</option>
                                          <option>USD</option>
                                          <option>GBP</option>
                                          <option>KSH</option>
                                          <option>UGX</option>
                                          <option>NGN</option>
                                          <option>TZS</option>
                                          <option>XWM</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Phone Number *</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="Phone Number"/> */}
                                    <input type="text" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.onChangePhoneNumber} />
                                
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Account Status</div>
                                 <div className="CMS-dropdown CMS-formControl">
                                    <div className="CMS-select">
                                       <select value={this.state.accountSatus} onChange={this.onChangeAccountStatus}>
                                          <option>Select</option>
                                          <option>Active</option>
                                          <option>Lapsed 14</option>
                                          <option>Lapsed 30</option>
                                          <option>Lapsed 90</option>
                                          <option>Time Out</option>
                                          <option>Self Excluded</option>
                                          <option>Suspended</option>
                                          <option>Closed</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Registration Date</div>
                                 <div className="CMS-formControl-group">
                                    <div className="CMS-formControl">
                                       <input type="text" className="CMS-datepicker" name="Dateto" placeholder="08/31/2021" />
                                    </div>
                                    <div className="CMS-formAddon"><span className="material-icons md-18" data-icon="calendar_today"></span></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="mt-20"></div>
                        <div className="row">
                           <div className="col-12">
                              <div className="CMS-btnContainer">
                                 <button type="button"  onClick={(e)=> this.onSubmit(e)} className="CMS-btn CMS-btnSecondary active CMS-btnMedium" >Search</button>
                                 <button onClick={()=>this.resetButton()} className="CMS-btn CMS-btnQuaternary active CMS-btnMedium" type="button">Reset</button>
                              </div>
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
                                       
                                    <li onClick={()=>this.pageClickAction()}><a className="active" href="#">1</a></li>
                                     <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li> </ul>
                                    <ul>
                                    <li><a href="#"><span className="material-icons" data-icon="navigate_next"></span></a></li>
                                    <li><a href="#"><span className="material-icons" data-icon="last_page"></span></a></li>
                                 </ul>
                              </div>
                              <div className="CMS-page-slection">
                                 <div className="CMS-number-of-files CMS-select">
                                    <select id="country" name="File" value={this.state.itemsperpage} onChange={this.onChangeItemperpage}>
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
                                 Results {this.props.paginationFirstValue}-{this.props.paginationSecondValue} of {this.props.paginationSecondValue} 
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
   </form>
   </div>
  {/* {this.state.data.length >=0 ? "": <PlayerSeachTable tableData = {this.state.data}/> } */}
  <PlayerSeachTable tableData = {this.state.data}/> 
</>
)}
}

function mapStateToProps(state) {
   return {
       displayValue: state.sidebar.displayValue,
       sidebarTabs: state.sidebar.sidebarTabs,
       paginationFirstValue: state.playersearch.paginationFirstValue,
       paginationSecondValue: state.playersearch.paginationSecondValue,
       errorMessage: state.playersearch.errorMessage
   };
}
export default connect(mapStateToProps)(playerSearch);
