import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PaymentHistoryTable from './paymentHistoryTable';
import {getPaymentHistorytableList,setPaginationSecondValue,setPaginationFirstValue} from './paymentHistoryTableSlice';
class PaymentHistory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
        paymentType: '',
            data: [],
        }
       this.onChangeId = this.onChangeId.bind(this);
        this.onChangePaymentHistory = this.onChangePaymentHistory.bind(this);
       this.onChangeItemperpage = this.onChangeItemperpage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
               
        }
        pageClickAction(){
            this.props.dispatch(setPaginationFirstValue());
              }
              onChangeItemperpage(e){
                this.setState({itemsperpage: e.target.value})
                this.props.dispatch(setPaginationSecondValue(e.target.value))
                this.props.dispatch(getPaymentHistorytableList(this.props.paginationFirstValue,e.target.value,this.state.data))
                 
             }
    resetButton() {
        this.setState({
            id: '',
            paymentType: '',
       
        data: [],})
        this.setState({data:[]})
       }
       onChangeId(e){
        this.setState({ id: e.target.value }) 
       }
       onChangePaymentHistory(e){
        this.setState({ paymentType: e.target.value }) 
       }
     
    onChangeItemperpage(e){
        this.setState({itemsperpage: e.target.value})
        this.props.dispatch(setPaginationSecondValue(e.target.value))
        this.props.dispatch(getPaymentHistorytableList(this.props.paginationFirstValue,e.target.value,this.state.data))
         
     }
    onSubmit(e) {
        e.preventDefault()
        // e.target.resetButton();
        //this.props.dispatch(getPlayerSearchList)(this.props)
        // if(this.state.username != '' || this.state.firstName != '' || this.state.lastName != '' || this.state.email != '' || this.state.customerId != ''
        // || this.state.ipAddress != '' || this.state.phoneNumber != '' || this.state.country != '' ||  this.state.datepicker != '' || this.state.referCode != '' ||
        // this.state.cgr != '' || this.state.AccountSatus != ''){
           this.setState({data:{ id: this.state.id,
           
              }
         })
//var  playerserachdata =[];
console.log("userid",this.state.id)
var playerserachdata=  { id: this.state.id }
        this.props.dispatch(getPaymentHistorytableList(this.props.paginationFirstValue,this.props.paginationSecondValue,playerserachdata))
        
        //}
     }
    render(){
        return(<>
         <div class="CMS-tab-panel" id="CMS-paymentHistory"  style ={{width: this.props.displayValue ? '100%':'79%', marginLeft: this.props.displayValue ?'0px':'295px'}}>
                                                    <div class="CMS-box-content">
                                                        <div class="CMS-box CMS-table CMS-table-triped">
                                                            <table class="CMS-tablePlain">
                                                                <tbody>
                                                                    <tr>
                                                                        <td><span class="CMS-positive-value"><b>400.57
                                                                                    KES</b></span></td>
                                                                        <td><span>Payments:</span> </td>
                                                                        <td><span
                                                                                class="CMS-btnStatus CMS-statusActive">ENABLED</span>
                                                                        </td>
                                                                        <td><span>Deposit Limit:</span> <span><b>Not
                                                                                    Active</b></span></td>
                                                                        <td><span>Max:</span> <span><b>No
                                                                                    Limit</b></span></td>
                                                                        <td><span>Credit Total:</span> <span><b>KES
                                                                                    19772</b></span></td>
                                                                        <td><span>Debit Total:</span> <span><b>KES
                                                                                    -19535</b></span></td>
                                                    
                                                                        <td>

                                                                            <div class="CMS-select">
                                                                                <select id="country" name="File" value={this.state.paymentType} onChange={this.onChangePaymentHistory}>
                                                                                    <option value="">Payments</option>
                                                                                    <option value="">Withdrawals
                                                                                    </option>
                                                                                    <option value="">Deposits</option>
                                                                                    <option value="">Make Manual
                                                                                        Adjustment</option>
                                                                                </select>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                              <div className="CMS-formGroup">
                                                                    <div className="CMS-formLabel">ID</div>
                                                                    <div className="CMS-formControl-group">
                                                                        <div className="CMS-formControl">
                                                                            <input type="number" name="" placeholder="ID"  onChange={this.onChangeId}/>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </td>
                                                                    </tr>
                                                                    <tr>

                                                                        <td>
                                                                            <div class="CMS-btnContainer"><button
                                                                                    class="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                                                    type="button">Make Manual
                                                                                    Adjustment</button></div>
                                                                        </td>

                                                                        <td colspan="7"></td>
                                                                    </tr>
                                                                    <tr>

<td>
<div className="row">
                                                            <div className="col-md-12 col-lg-12 col-xl-12">
                                                                <div className="CMS-btnContainer">
                                                                    <button onClick={(e)=> this.onSubmit(e)}
                                                                        className="CMS-btn CMS-btnSecondary active CMS-btnMedium"
                                                                        type="button">Search</button>

                                                                </div>
                                                            </div>
                                                        </div>
</td>

<td colspan="7"></td>
</tr>
                                                                </tbody>
                                                            </table>
                                                        </div>



                                                        <div class="mt-20"></div>



                                                        <div class="CMS-filter-result" id="result">
                                                            <div class="CMS-pagination">
                                                                <div class="CMS-pagination-container">

                                                                    <div class="CMS-pagination-list">
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

                                                                    <div class="CMS-page-slection">
                                                                        <div class="CMS-number-of-files CMS-select">
                                                                        <select id="country" name="File" value={this.state.itemsperpage} onChange={this.onChangeItemperpage}>
                                       <option value="25">25</option>
                                       <option value="50">50</option>
                                       <option value="100">100</option>
                                       <option value="200">200</option>
                                       <option value="500">500</option>
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



                                                                    <div className="CMS-page-results">
                                 Results {this.props.paginationFirstValue}-{this.props.paginationSecondValue} of {this.props.paginationSecondValue} 
                              </div>


                                                                </div>
                                                            </div>


                                                            


                                                        </div>


                                                    </div>
                                                </div>
                                                <PaymentHistoryTable/>
        </>)
    }
}
function mapStateToProps(state) {
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
export default connect(mapStateToProps,mapDispatchToProps)(PaymentHistory);

