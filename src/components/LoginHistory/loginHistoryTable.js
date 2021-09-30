import React from 'react';
import { connect } from 'react-redux';
// import { playerapi} from '../../sharedfiles/EndpointConfig';
// import { getplayerList,getPlayerSearchList } from '../playerTable/playerSearchTableSlice';
import {Link} from 'react-router-dom';
import loginHistoryTableSlice from './loginHistoryTableSlice';
class LoginHistoryTable extends React.Component{
//  constructor (props){
//      super(props);
//      this.state = [{
//         customerId: '125445787',
//         username: 'CraftyCockney180',
//         firstName: 'Eric',
//         lastName: 'Bristow',
//         email: 'Crafty180@bdo.com',
//         phoneNumber: '07878180180',
//         country: '',
//         brand: 'GBP',
//         playersignment: '',
//         stackFactor: '1.00',
//         deposits: '£35.12',
//         cgr: '£16.25',
//         AccountSatus: 'Active',
//         ipAddress: '',
//         referCode: '',
//     },
//     {
//         customerId: '125445788',
//         username: 'CraftyCockney180',
//         firstName: 'Eric',
//         lastName: 'Bristow',
//         email: 'Crafty180@bdo.com',
//         phoneNumber: '07878180181',
//         country: '',
//         brand: 'GBP',
//         playersignment: '',
//         stackFactor: '1.00',
//         deposits: '£35.12',
//         CGR: '£16.25',
//         AccountSatus: 'Lapsed 14',
//         ipAddress: '',
//         referCode: '',
//     },
//     {
//         customerId: '125445789',
//         username: 'CraftyCockney180',
//         firstName: 'Raju',
//         lastName: 'Raghu',
//         email: 'Crafty180@bdo.com',
//         phoneNumber: '07878180182',
//         country: '',
//         brand: 'GBP',
//         playersignment: '',
//         stackFactor: '1.00',
//         deposits: '£35.12',
//         CGR: '£16.25',
//         AccountSatus: 'Lapsed 30',
//         ipAddress: '',
//         referCode: '',
//     },
//     {
//         customerId: '125445788',
//         username: 'CraftyCockney180',
//         firstName: 'Ramu',
//         lastName: 'Bristow',
//         email: 'Crafty180@bdo.com',
//         phoneNumber: '07878180180',
//         country: '',
//         brand: 'GBP',
//         playersignment: '',
//         stackFactor: '1.00',
//         deposits: '£35.12',
//         CGR: '£16.25',
//         AccountSatus: 'Lapsed 90',
//         ipAddress: '',
//         referCode: '',
//     }

// ]
//      }

     componentDidMount(){
         //this.props.dispatch(getplayerList(this.props))
        // this.props.dispatch(getPlayerSearchList(this.props.paginationFirstValue,this.props.paginationSecondValue,this.props.tableData))
     }
    //   filterByReference = (arr1, arr2) => {
    //        let res = [];
    //        res = arr1.filter(el => {
    //           return arr2.find(element => {
    //              return (element.firstName).toUpperCase() === (el.firstName).toUpperCase() || (element.lastName).toUpperCase() === (el.lastName).toUpperCase();
    //           });
    //        });
    //        return res;
    //     }

    render(){
        let array =[];
        //array.push(this.props.userData)
        //let data = this.state;
       // var responseData = this.props.userData.data
       //let filterData =  this.filterByReference(data, array)
       console.log("hii1",this.props.userData.data)

        return(
            <>
            <div className="CMS-box CMS-table CMS-table-triped" style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'290px'}}>
                                                    <table>
                                                        {this.props.userData.data != undefined && this.props.userData.data.length> 0 &&
                                                        <thead>
                                                            <tr>
                                                                            <th>ID</th>
                                                                            <th>Time / Date Created</th>
                                                                            <th>Action</th>
                                                                            <th>IP</th>
                                                                            <th>IP Country</th>
                                                               
                                                            </tr>
                                                        </thead>}
                                                        <tbody>
                                                            
                                                           { this.props.userData.data != undefined  && this.props.userData.data.map((item,index)=>{
                                                                 return (<tr key={item}>
                                                                      <td>{item.id}</td>
                                                                      <td>{item.createdDate}</td>
                                                                      <td>{item.activity}</td>
                                                                      <td>{item.ip}</td>
                                                                      <td>{item.ipCountry}</td>
                                                                      
                                                                     
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
        userData: state.loginHistorySlice.userData,
        paginationFirstValue: state.playersearch.paginationFirstValue,
        paginationSecondValue: state.playersearch.paginationSecondValue
    };
 }
export default connect(mapStateToProps)(LoginHistoryTable);