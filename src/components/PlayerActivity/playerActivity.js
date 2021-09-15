
import React from 'react';
import { connect } from 'react-redux';
import PlayerActivityTable from './playerActivityTable';

class playerActivity extends React.Component{
    constructor(props){
        
        super(props);
        this.state ={
            username: '',
            firstName: '',
            lastName: '',
            country: '',
            startdatepicker: '',
            enddatepicker: '',
            brand: '',
            playersignment: '',
            data: [],
        }
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeRecentPlayer = this.onChangeRecentPlayer.bind(this);
        this.onChangeEndDatepicker = this.onChangeEndDatepicker.bind(this);
        this.onChangeStartDatepicker = this.onChangeStartDatepicker.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
            
            
        }
        resetButton() {
         this.setState({ username: '',firstName: '',
         lastName: '',
         country: '',
         startdatepicker: '',
         enddatepicker: '',
         brand: '',
         playersignment: '', })
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
        onChangeCountry(e){
            this.setState({country: e.target.value })
        }
        onChangeEndDatepicker(e){
            this.setState({enddatepicker: e.target.value})
        }
        onChangeStartDatepicker(e){
            this.setState({startdatepicker: e.target.value})
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
            if(this.state.username != '' || this.state.firstName != '' || this.state.lastName != '' || 
             this.state.startdatepicker != '' || this.state.enddatepicker != '' || this.state.country != '' ||  this.state.brand != '' || this.state.playersignment != '' ||
            this.state.cgr != '' || this.state.AccountSatus != ''){
               this.setState({data:{ username: this.state.username,
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  country: this.state.country,
                  startdatepicker: this.state.startdatepicker,
                  enddatepicker: this.state.enddatepicker,
                  brand: this.state.brand,
                  playersignment: this.state.playersignment
      
                  }
              })
            }
       
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
               <div className="CMS-tab-panel active" id="CMS-playerActivity">
                  {/* 
                  <div className="CMS-box__header">
                     <div className="CMS-box__title">Sports Overview Report</div>
                  </div>
                  */}
                  <div class="CMS-tabContent">
                                        <div class="CMS-box CMS-box-content">
                                            <div class="row no-gutters">
                                                <div class="col-6">
                                                    <div class="CMS-formGroup formGroup-inline">
                                                        <div class="col-6">
                                                            <div class="CMS-formLabel">Start Date</div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="CMS-formControl-group">
                                                                <div class="CMS-formControl">
                                                                    <input type="text" class="CMS-datepicker"
                                                                        name="Dateto" placeholder="08/31/2021" value={this.state.startdatepicker} onChange={this.onChangeStartDatepicker}/>
                                                                </div>
                                                                <div class="CMS-formAddon"><span
                                                                        class="material-icons md-18"
                                                                        data-icon="calendar_today"></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="CMS-formGroup formGroup-inline">
                                                        <div class="col-6">
                                                            <div class="CMS-formLabel">End Date</div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="CMS-formControl-group">
                                                                <div class="CMS-formControl">
                                                                    <input type="text" class="CMS-datepicker"
                                                                        name="Dateto" placeholder="08/31/2021" value={this.state.enddatepicker} onChange={this.onChangeEndDatepicker}/>
                                                                </div>
                                                                <div class="CMS-formAddon"><span
                                                                        class="material-icons md-18"
                                                                        data-icon="calendar_today"></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row no-gutters">
                                                <div class="col-6">
                                                    <div class="CMS-formGroup formGroup-inline">
                                                        <div class="col-6">
                                                            <div class="CMS-formLabel">Brand</div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="CMS-formControl">
                                                                <div class="CMS-dropdown CMS-brands-dropdown">
                                                                    <div class="CMS-dropdown-btn">4 Selected</div>
                                                                    <div class="CMS-dropdown-menu CMS-form-group">

                                                                        <div class="CMS-checkbox">
                                                                            <input id="Kenya" type="checkbox"
                                                                                value="value2" checked/>
                                                                            <label for="Kenya"></label>
                                                                            <span class="SB-checkboxLabel">Ken</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="UG" type="checkbox"
                                                                                value="value2" checked/>
                                                                            <label for="UG"></label>
                                                                            <span class="SB-checkboxLabel">UG</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="NG" type="checkbox"
                                                                                value="value2" checked/>
                                                                            <label for="NG"></label>
                                                                            <span class="SB-checkboxLabel">NG</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="ZM" type="checkbox"
                                                                                value="value2" checked/>
                                                                            <label for="ZM"></label>
                                                                            <span class="SB-checkboxLabel">ZM</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="TZ" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="TZ"></label>
                                                                            <span class="SB-checkboxLabel">TZ</span>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                           
                                            <div class="row no-gutters">
                                                <div class="col-6">
                                                    <div class="CMS-formGroup formGroup-inline">
                                                        <div class="col-6">
                                                            <div class="CMS-formLabel">Countries</div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="CMS-formControl" value={this.state.country} onChange={this.onChangeCountry}>
                                                                <div class="CMS-dropdown CMS-brands-dropdown">
                                                                    <div class="CMS-dropdown-btn">2 Selected</div>
                                                                    <div class="CMS-dropdown-menu CMS-form-group">

                                                                        <div class="CMS-checkbox">
                                                                            <input id="Kenya" type="checkbox"
                                                                                value="value2" checked/>
                                                                            <label for="Kenya"></label>
                                                                            <span class="SB-checkboxLabel">Kenya</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="UG" type="checkbox"
                                                                                value="value2" checked/>
                                                                            <label for="UG"></label>
                                                                            <span class="SB-checkboxLabel">Uganda</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="NG" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="NG"></label>
                                                                            <span
                                                                                class="SB-checkboxLabel">Nigeria</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="ZM" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="ZM"></label>
                                                                            <span class="SB-checkboxLabel">Zambia</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="TZ" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="TZ"></label>
                                                                            <span
                                                                                class="SB-checkboxLabel">Tanzania</span>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="row no-gutters">
                                                <div class="col-6">
                                                    <div class="CMS-formGroup formGroup-inline">
                                                        <div class="col-6">
                                                            <div class="CMS-formLabel">Segment Level</div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="CMS-formControl">
                                                                <div class="CMS-dropdown CMS-brands-dropdown">
                                                                    <div class="CMS-dropdown-btn">3 Selected</div>
                                                                    <div class="CMS-dropdown-menu CMS-form-group">

                                                                        <div class="CMS-checkbox">
                                                                            <input id="VIP" type="checkbox"
                                                                                value="value2" checked/>
                                                                            <label for="VIP"></label>
                                                                            <span class="SB-checkboxLabel">VIP</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="Preferred Players"
                                                                                type="checkbox" value="value2" checked/>
                                                                            <label for="Preferred Players"></label>
                                                                            <span class="SB-checkboxLabel">Preferred
                                                                                Players</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="Level 3" type="checkbox"
                                                                                value="value2" checked/>
                                                                            <label for="Level 3"></label>
                                                                            <span class="SB-checkboxLabel">Level
                                                                                3</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="Level 2" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="Level 2"></label>
                                                                            <span class="SB-checkboxLabel">Level
                                                                                2</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="Level 1" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="Level 1"></label>
                                                                            <span class="SB-checkboxLabel">Level
                                                                                1</span>
                                                                        </div>
                                                                        <div class="CMS-checkbox">
                                                                            <input id="Stake" type="checkbox"
                                                                                value="value2"/>
                                                                            <label for="Stake"></label>
                                                                            <span class="SB-checkboxLabel">Stake
                                                                                Factored Customers</span>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="row no-gutters">
                                                <div class="col-6">
                                                    <div class="CMS-formGroup formGroup-inline">
                                                        <div class="col-6">
                                                        <div class="CMS-formLabel">First Name</div>
                                                        </div>
                                                        <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="First Name"/> */}
                                    <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeFirstName} />
                                
                                 </div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="CMS-formGroup formGroup-inline">
                                                        <div class="col-6">
                                                        <div class="CMS-formLabel">Last Name</div>
                                                        </div>
                                                        <div className="CMS-formControl">
                                    {/* <input type="" id="" name="" placeholder="First Name"/> */}
                                    <input type="text" placeholder="First Name" value={this.state.lastName} onChange={this.onChangeLastName} />
                                
                                 </div>
                                                    </div>
                                                </div>



                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="CMS-btnContainer">
                                                        <button  onClick={(e)=> this.onSubmit(e)}
                                                            class="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                            type="button">Go</button>
                                                        <button onClick={()=>this.resetButton()}
                                                            class="CMS-btn CMS-btnQuaternary active CMS-btnMedium"
                                                            type="button">Reset</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="CMS-filter-result" id="result">
                                            <div class="CMS-pagination">
                                                <div class="CMS-pagination-container">

                                                    <div class="CMS-pagination-list">
                                                        <ul>
                                                            <li><a href="#"><span class="material-icons"
                                                                        data-icon="first_page"></span></a></li>
                                                            <li><a href="#"><span class="material-icons"
                                                                        data-icon="navigate_before"></span></a></li>
                                                            <li><a class="active" href="#">1</a></li>
                                                            <li><a href="#">2</a></li>
                                                            <li><a href="#">3</a></li>
                                                            <li><a href="#"><span class="material-icons"
                                                                        data-icon="navigate_next"></span></a></li>
                                                            <li><a href="#"><span class="material-icons"
                                                                        data-icon="last_page"></span></a></li>
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


                                            


                                        </div>

                                    </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </form>
   </div>
   {this.state.data.length >=0 ? "": <PlayerActivityTable tableData = {this.state.data}/> }
</>
)}
}

function mapStateToProps(state) {
   return {
       displayValue: state.sidebar.displayValue,
       sidebarTabs: state.sidebar.sidebarTabs
   };
}
export default connect(mapStateToProps)(playerActivity);
