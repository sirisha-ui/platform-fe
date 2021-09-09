
import React from 'react';
import PlayerSeachTable from '../playerTable/playerSearchTable';

class playerSearch extends React.Component{
    constructor(props){
        
        super(props);
        this.state ={
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            customerId: '',
            ipAddress: '',
            phoneNumber: '',
            referCode:'',
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
        this.onChangeRecentPlayer = this.onChangeRecentPlayer.bind(this);
        this.onChangeDatepicker = this.onChangeDatepicker.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
            
            
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
        onChangeDatepicker(e){
            this.setState({datepicker: e.target.value})
        }
        onChangeIpAddress(e){
            this.setState({ ipAddress: e.target.value })
        }
        onChangeReferCode(e){
            this.setState({ referCode: e.target.value })
        }
        onChangeRecentPlayer(e){
            this.setState({recentPlayer: e.target.value})
        }

        onSubmit(e) {
            e.preventDefault()
       
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
            AccountSatus: this.state.AccountSatus,

            }
        })
    }

    // componentDidMount() {
    //     this.userData = JSON.parse(localStorage.getItem('user'));

    //     if (localStorage.getItem('user')) {
    //         this.setState({
    //             username: this.userData.username,
    //             firstName: this.userData.firstName,
    //             lastName: this.userData.lastName,
    //             email: this.userData.email,
    //             phoneNumber: this.userData.phoneNumber,
    //             customerId: this.userData.customerId,
    //             ipAddress: this.userData.ipAddress,
    //             referCode: this.userData.referCode,
    //         })
    //     } else {
    //         this.setState({
    //             username: '',
    //             firstName: '',
    //             lastName: '',
    //             email: '',
    //             phoneNumber: '',
    //             customerId: '',
    //             ipAddress: '',
    //             referCode: '',
    //         })
    //     }
    // }

    // componentWillUpdate(nextProps, nextState) {
    //     localStorage.setItem('user', JSON.stringify(nextState));
    // }

 render(){
    

 return (
 <>
<div className="CMS-layout-innerContent">
<form>
   <div className="CMS-page CMS-playerSearch">
      <div className="CMS-page-content">
         <div className="CMS-full-page-content">
            <div className="CMS-tabs-content">
               <div className="CMS-tab-panel active" id="CMS-betting">
                  {/* 
                  <div className="CMS-box__header">
                     <div className="CMS-box__title">Sports Overview Report</div>
                  </div>
                  */}
                  <div className="CMS-tabContent">
                     <div className="CMS-box CMS-box-content" >
                        <div className="row">
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Username</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="Username"/> */}
                                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.onChangeUserName} />
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">First Name</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="First Name"/> */}
                                    <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeFirstName} />
                                
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Last Name</div>
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
                                 <div className="CMS-formLabel">Email</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="email"/> */}
                                    <input type="text" placeholder="email" value={this.state.email} onChange={this.onChangeEmail} />
                                
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Brand</div>
                                 <div className="CMS-dropdown CMS-brands-dropdown CMS-formControl">
                                    <div className="CMS-dropdown-btn">Select</div>
                                    <div className="CMS-dropdown-menu CMS-form-group">
                                       <div className="CMS-checkbox">
                                          <input id="Kenya" type="checkbox" value="value2"/>
                                          <label for="Kenya"></label>
                                          <span className="SB-checkboxLabel">Ken</span>
                                       </div>
                                       <div className="CMS-checkbox">
                                          <input id="UG" type="checkbox" value="value2"/>
                                          <label for="UG"></label>
                                          <span className="SB-checkboxLabel">UG</span>
                                       </div>
                                       <div className="CMS-checkbox">
                                          <input id="NG" type="checkbox" value="value2"/>
                                          <label for="NG"></label>
                                          <span className="SB-checkboxLabel">NG</span>
                                       </div>
                                       <div className="CMS-checkbox">
                                          <input id="ZM" type="checkbox" value="value2"/>
                                          <label for="ZM"></label>
                                          <span className="SB-checkboxLabel">ZM</span>
                                       </div>
                                       <div className="CMS-checkbox">
                                          <input id="TZ" type="checkbox" value="value2"/>
                                          <label for="TZ"></label>
                                          <span className="SB-checkboxLabel">TZ</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Date of Birth</div>
                                 <div className="CMS-formControl-group">
                                    <div className="CMS-formControl">
                                       <input type="number" className="CMS-datepicker" value={this.state.datepicker} onChange={this.onChangeDatepicker} name="Dateto" placeholder="08/31/2021"/>
                                    </div>
                                    <div className="CMS-formAddon"><span className="material-icons md-18" data-icon="calendar_today"></span></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Recent Players</div>
                                 <div className="CMS-dropdown CMS-formControl">
                                    <div className="CMS-select">
                                       <select value={this.state.recentPlayer} onChange={this.onChangeRecentPlayer}>
                                          <option>Select</option>
                                          <option>Player 1</option>
                                          <option>Player 2</option>
                                          <option>Player 3 </option>
                                          <option>Player 4</option>
                                          <option>Player 5</option>
                                          <option>Player 6</option>
                                          <option>Player 7</option>
                                          <option>Player 8</option>
                                          <option>Player 9</option>
                                          <option>Player 10</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Customer ID</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="Customer ID"/> */}
                                    <input type="number" placeholder="Customer ID" value={this.state.customerId} onChange={this.onChangeCustomerId} />
                                
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">IP Address</div>
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
                                       <select id="currency" name="File">
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
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Phone Number</div>
                                 <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="Phone Number"/> */}
                                    <input type="number" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.onChangePhoneNumber} />
                                
                                 </div>
                              </div>
                           </div>
                           <div className="col-2">
                              <div className="CMS-formGroup">
                                 <div className="CMS-formLabel">Account Status</div>
                                 <div className="CMS-dropdown CMS-formControl">
                                    <div className="CMS-select">
                                       <select>
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
                                       <input type="text" className="CMS-datepicker" name="Dateto" placeholder="08/31/2021"/>
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
                                 <button onclick="window.location.href=''" className="CMS-btn CMS-btnQuaternary active CMS-btnMedium" type="button">Reset</button>
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
                                    <a href="#"><span className="material-icons" data-icon="file_download"></span></a>
                                 </div>
                              </div>
                              <div className="CMS-page-results">
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
   </form>
   </div>
   {this.state.data.length >=0 ? "": <PlayerSeachTable/> }
</>
)}
}
export default playerSearch;
