import React from "react";
import NewPlayerSeachTable from "./newPlayerTable";
import { connect } from 'react-redux';
class newPlayer extends React.Component {
    constructor(props){
        
        super(props);
        this.state ={
            username: '',
            firstName: '',
            lastName: '',
            customerId: '',
            referCode:'',
            affiliateBTAG: '',
            affiliateName: '',
            country: '',
            registrationdate: '',
            registrationFromdate: '',
            registrationTodate: '',
            currency: '',
            brand: '',
            firstdepositAmount: '',
            AccountSatus: '',
            betCount: '',
            data: [],
        }
        //this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAffiliateBTAG = this.onChangeAffiliateBTAG.bind(this);
        this.onChangeAffiliateName = this.onChangeAffiliateName.bind(this);
        // this.onChangeCustomerId = this.onChangeCustomerId.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeRegistrationFromDate = this.onChangeRegistrationFromDate.bind(this);
        this.onChangeReferCode = this.onChangeReferCode.bind(this);
        this.onChangeCurrency = this.onChangeCurrency.bind(this);
        //this.onChangeDatepicker = this.onChangeDatepicker.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
            
    }
 
    
    onChangeReferCode(e){
        this.setState({ referCode: e.target.value })
    }
    onChangeCountry(e){
        this.setState({country: e.target.value })
    }
    onChangeAffiliateBTAG(e){
        this.setState({ affiliateBTAG: e.target.value })
    }
    onChangeAffiliateName(e){
        this.setState({ affiliateName: e.target.value })
    }
    onChangeRegistrationFromDate(e){
        this.setState({registrationFromdate: e.target.value})
    }
    onChangeRegistrationToDate(e){
        this.setState({registrationTodate: e.target.value})
    }
    onChangeCurrency(e){
        this.setState({currency: e.target.value})
    }
    onChangeFirstName(e){
        this.setState({ firstName: e.target.value })
    }
    onChangeLastName(e){
        this.setState({ lastName: e.target.value })
    }


    resetButton() {
        this.setState({ username: '',firstName: '',
        lastName: '',
        customerId: '',
        affiliateBTAG: '',
        affiliateName: '',
        referCode:'',
        country: '',
        registrationFromdate: '',
        registrationTodate: '',
        brand: '',
        betCount: '',
        firstdepositAmount: '',
        AccountSatus: '',
        currency: '', })
        this.setState({data:[]})
       }
    onSubmit(e) {
    e.preventDefault()
    if( this.state.firstName != '' || this.state.lastName != '' || this.state.registrationFromdate != ''|| this.state.registrationTodate != '' || this.state.customerId != ''
    || this.state.currency != '' || this.state.country != '' ||  this.state.affiliateBTAG != ''||this.state.affiliateName!='' || this.state.referCode != '' ||
    this.state.betCount != '' || this.state.AccountSatus != ''){
       this.setState({data:{ username: this.state.username,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          customerId: this.state.customerId,
          country: this.state.country,
          registrationFromdate: this.state.registrationFromdate,
          registrationTodate: this.state.registrationTodate,
          currency: this.state.currency,
          referCode: this.state.referCode,
        //   brand: this.state.brand,
        //   firstdepositAmount: this.state.firstdepositAmount,
          betCount: this.state.betCount,
          AccountSatus: this.state.AccountSatus,

          }
      })
    }

}
  render (){

    return (<>
    <div class="CMS-layout-innerContent" style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'290px'}}>
                <div class="CMS-page CMS-newPlayer">
                    <div class="CMS-page-content">
                        <div class="CMS-full-page-content">
                            
                            <div class="CMS-tabs-content">
                               
                                <div class="CMS-tab-panel active" id="CMS-betting">
                                    {/*  <div class="CMS-box__header">
                                        <div class="CMS-box__title">Sports Overview Report</div>
                                       
                                    </div>  */}

                                    <div class="CMS-tabContent">
                                        <div class="CMS-box CMS-box-content" >
                                   
                                   
                                       
                                            <div class="row">
                                                <div class="col-3">
                                                    <div class="CMS-formGroup">
                                                        <div class="CMS-formLabel">Brand</div>
                                                        <div class="CMS-dropdown CMS-brands-dropdown CMS-formControl">
                                                            <div class="CMS-dropdown-btn" >Select</div>
                                                            <div class="CMS-dropdown-menu CMS-form-group">
                        
                                                                <div class="CMS-checkbox">
                                                                    <input id="Kenya" type="checkbox" value="value2"/>
                                                                    <label for="Kenya"></label>
                                                                    <span class="SB-checkboxLabel">Ken</span>
                                                                </div>
                                                                <div class="CMS-checkbox">
                                                                    <input id="UG" type="checkbox" value="value2"/>
                                                                    <label for="UG"></label>
                                                                    <span class="SB-checkboxLabel">UG</span>
                                                                </div>
                                                                <div class="CMS-checkbox">
                                                                    <input id="NG" type="checkbox" value="value2" />
                                                                    <label for="NG"></label>
                                                                    <span class="SB-checkboxLabel">NG</span>
                                                                </div>
                                                                <div class="CMS-checkbox">
                                                                    <input id="ZM" type="checkbox" value="value2"/>
                                                                    <label for="ZM"></label>
                                                                    <span class="SB-checkboxLabel">ZM</span>
                                                                </div>
                                                                <div class="CMS-checkbox">
                                                                    <input id="TZ" type="checkbox" value="value2"/>
                                                                    <label for="TZ"></label>
                                                                    <span class="SB-checkboxLabel">TZ</span>
                                                                </div>
                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                    <div class="col-3">
                                                        <div class="CMS-formGroup">
                                                            <div class="CMS-formLabel">Currency</div>
                                                            <div class="CMS-dropdown CMS-formControl">
                                                                <div class="CMS-select">
                                                                    <select id="currency" name="File" value={this.state.currency} onChange={this.onChangeCurrency}>
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
                                                        <div class="col-3">
                                                            <div class="CMS-formGroup">
                                                                <div class="CMS-formLabel">Country</div>
                                                                <div class="CMS-dropdown CMS-formControl">
                                                                    <div class="CMS-select">
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
                                                        
                                                            <div class="col-3">
                                                                <div class="CMS-formGroup">
                                                                    <div class="CMS-formLabel">Referrer Code</div>
                                                                    <div class="CMS-formControl-group">
                                                                        <div class="CMS-formControl">
                                                                            <input type="text" name="" placeholder="Referrer Code" value={this.state.referCode} onChange={this.onChangeReferCode}/>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                                
                                                                </div>
                                                                </div>
                                                                <div class="row">
                                                                <div class="col-3">
                                                                    <div class="CMS-formGroup">
                                                                        <div class="CMS-formLabel">Registration Date From</div>
                                                                        <div class="CMS-formControl-group">
                                                                            <div class="CMS-formControl">
                                                                                <input type="text" class="CMS-datepicker" name="Dateto" placeholder="08/31/2021" value={this.state.registrationFromdate} onChange={this.onChangeRegistrationFromDate}/>
                                                                            </div>
                                                                            <div class="CMS-formAddon"><span class="material-icons md-18" data-icon="calendar_today"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                    <div class="col-3">
                                                                        <div class="CMS-formGroup">
                                                                            <div class="CMS-formLabel">Registration Date To</div>
                                                                            <div class="CMS-formControl-group">
                                                                                <div class="CMS-formControl">
                                                                                    <input type="text" class="CMS-datepicker" name="Dateto" placeholder="08/31/2021"  value={this.state.registrationTodate} onChange={this.onChangeRegistrationToDate}/>
                                                                                </div>
                                                                                <div class="CMS-formAddon"><span class="material-icons md-18" data-icon="calendar_today"></span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-3">
                                                                        <div class="CMS-formGroup">
                                                                            <div class="CMS-formLabel">Affiliate BTAG</div>
                                                                            <div class="CMS-formControl">
                                                                                <input type="text" name="" placeholder="Affiliate BTAG" value={this.state.affiliateBTAG} onChange={this.onChangeAffiliateBTAG}/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-3">
                                                                        <div class="CMS-formGroup">
                                                                        <div class="CMS-formLabel">Affiliate Name</div>
                                                                        <div class="CMS-formControl">
                                                                            <input type="" id="" name="" placeholder="Affiliate Name" value={this.state.affiliateName} onChange={this.onChangeAffiliateName}/>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                    <div className="col-3">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">First Name</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="First Name"/> */}
                                    <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeFirstName} />
                                
                                 </div>
                              </div>
                           </div>
                           <div className="col-3">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Last Name</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="Last Name"/> */}
                                    <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.onChangeLastName} />
                                
                                 </div>
                              </div>
                           </div>
                                                                    
                                                                </div>                       
                                                 <div class="mt-20"></div>         
                                        
<div class="row">
    <div class="col-12">
        <div class="CMS-btnContainer">
            <button onClick={(e)=> this.onSubmit(e)} class="CMS-btn CMS-btnSecondary active CMS-btnMedium" type="button">Search</button>
            <button onClick={()=>this.resetButton()} class="CMS-btn CMS-btnQuaternary active CMS-btnMedium" type="button">Reset</button>
                </div>                                                          
        </div>
    </div>
</div>
                                            <div class="CMS-filter-result" id="result">
                                                <div class="CMS-pagination">
                                                    <div class="CMS-pagination-container">
                                                 
                                                        <div class="CMS-pagination-list">
                                                            <ul>
                                                                <li><a href="#"><span class="material-icons" data-icon="first_page"></span></a></li>
                                                                <li><a href="#"><span class="material-icons" data-icon="navigate_before"></span></a></li>
                                                                <li><a class="active" href="#">1</a></li>
                                                                <li><a href="#">2</a></li>
                                                                <li><a href="#">3</a></li>
                                                                <li><a href="#"><span class="material-icons" data-icon="navigate_next"></span></a></li>
                                                                <li><a href="#"><span class="material-icons" data-icon="last_page"></span></a></li>
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
                                                            <a href="#"><span class="material-icons" data-icon="file_download"></span></a>
                                                        </div>
                                                    </div>
                                                    
                                                        
                                                        
                                                        <div class="CMS-page-results">
                                                            Results 1-100 of 108
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
    
                {this.state.data.length >=0 ? "": <NewPlayerSeachTable tableData = {this.state.data}/> }
    </>)
  }

}
function mapStateToProps(state) {
    return {
        displayValue: state.sidebar.displayValue,
    };
 }
export default connect(mapStateToProps)(newPlayer);