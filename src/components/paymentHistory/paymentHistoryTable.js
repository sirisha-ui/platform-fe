import React from 'react';
import { connect } from 'react-redux';
// import { playerapi} from '../../sharedfiles/EndpointConfig';
// import { getplayerList,getPlayerSearchList } from '../playerTable/playerSearchTableSlice';
import {Link} from 'react-router-dom';
import paymentHistoryTableSlice from './paymentHistoryTableSlice';
class PaymentHistoryTable extends React.Component{

    

    render(){
        let array =[];
        //array.push(this.props.userData)
        //let data = this.state;
       // var responseData = this.props.userData.data
       //let filterData =  this.filterByReference(data, array)
       console.log("hii1",this.props.paymentData.data)

        return(
            <>
            <div className="CMS-box CMS-table CMS-table-triped" style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'290px'}}>
                                                    <table>
                                                        {this.props.paymentData.data != undefined && this.props.paymentData.data.length> 0 &&
                                                        <thead>
                                                            <tr>
                                                            <th>ID</th>
                                                                            <th>Created <span
                                                                                    class="material-icons md-18"
                                                                                    data-icon="south"></span></th>
                                                                            <th>Amount</th>
                                                                            <th>State</th>
                                                                            <th>Description</th>
                                                                            <th>Method</th>
                                                                            <th>Payment Description</th>
                                                                            <th>Transaction ID</th>
                                                                            <th>Action</th>
                                                               
                                                            </tr>
                                                        </thead>}
                                                        <tbody>
                                                            
                                                           { this.props.paymentData.data != undefined  && this.props.paymentData.data.map((item,index)=>{
                                                                 return (<tr key={item}>
                                                                      <td>{item.id}</td>
                                                                      <td>{item.createdDate}</td>
                                                                      <td>{item.amount}</td>
                                                                      <td>{item.status}</td>
                                                                      <td>{item.paymentDesc}</td>
                                                                      <td>{item.modePaymentClient}</td>
                                                                      <td>{item.paymentDesc}</td>
                                                                      <td>{item.transactionId}</td>
                                                                      <td>{item.status}</td>
                                                                      
                                                                     
                                                                 </tr>)
                                                            })
                                                        }
                                                            
                                                            
        
                                                        </tbody>
        
                                                    </table>
                                                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        displayValue: state.sidebar.displayValue,
        paymentData: state.paymentHistorySlice.paymentData,
        paginationFirstValue: state.playersearch.paginationFirstValue,
        paginationSecondValue: state.playersearch.paginationSecondValue
    };
 }
export default connect(mapStateToProps)(PaymentHistoryTable);