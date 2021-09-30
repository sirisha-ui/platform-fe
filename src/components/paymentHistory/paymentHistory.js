import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PaymentHistoryTable from './paymentHistoryTable';
import {getPaymentHistorytableList,setPaginationSecondValue} from './paymentHistoryTableSlice';
class PaymentHistory extends React.Component{
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
                                                                                <select id="country" name="File">
                                                                                    <option value="">Payments</option>
                                                                                    <option value="">Withdrawals
                                                                                    </option>
                                                                                    <option value="">Deposits</option>
                                                                                    <option value="">Make Manual
                                                                                        Adjustment</option>
                                                                                </select>
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

                                                                </tbody>
                                                            </table>
                                                        </div>



                                                        <div class="mt-20"></div>



                                                        <div class="CMS-filter-result" id="result">
                                                            <div class="CMS-pagination">
                                                                <div class="CMS-pagination-container">

                                                                    <div class="CMS-pagination-list">
                                                                        <ul>
                                                                            <li><a href="#"><span class="material-icons"
                                                                                        data-icon="first_page"></span></a>
                                                                            </li>
                                                                            <li><a href="#"><span class="material-icons"
                                                                                        data-icon="navigate_before"></span></a>
                                                                            </li>
                                                                            <li><a class="active" href="#">1</a></li>
                                                                            <li><a href="#">2</a></li>
                                                                            <li><a href="#">3</a></li>
                                                                            <li><a href="#"><span class="material-icons"
                                                                                        data-icon="navigate_next"></span></a>
                                                                            </li>
                                                                            <li><a href="#"><span class="material-icons"
                                                                                        data-icon="last_page"></span>
                                                                                        </a></li>
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

