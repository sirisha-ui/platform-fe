import React from 'react';
import { connect } from 'react-redux';
import { playerapi} from '../../sharedfiles/EndpointConfig';
import { getplayerList,getPlayerSearchList } from '../playerTable/playerSearchTableSlice';

class PlayerSeachTable extends React.Component{
 constructor (props){
     super(props);
     this.state = [{
        customerId: '125445787',
        username: 'CraftyCockney180',
        firstName: 'Eric',
        lastName: 'Bristow',
        email: 'Crafty180@bdo.com',
        phoneNumber: '07878180180',
        country: '',
        brand: 'GBP',
        playersignment: '',
        stackFactor: '1.00',
        deposits: '£35.12',
        cgr: '£16.25',
        AccountSatus: 'Active',
        ipAddress: '',
        referCode: '',
    },
    {
        customerId: '125445788',
        username: 'CraftyCockney180',
        firstName: 'Eric',
        lastName: 'Bristow',
        email: 'Crafty180@bdo.com',
        phoneNumber: '07878180181',
        country: '',
        brand: 'GBP',
        playersignment: '',
        stackFactor: '1.00',
        deposits: '£35.12',
        CGR: '£16.25',
        AccountSatus: 'Lapsed 14',
        ipAddress: '',
        referCode: '',
    },
    {
        customerId: '125445789',
        username: 'CraftyCockney180',
        firstName: 'Raju',
        lastName: 'Raghu',
        email: 'Crafty180@bdo.com',
        phoneNumber: '07878180182',
        country: '',
        brand: 'GBP',
        playersignment: '',
        stackFactor: '1.00',
        deposits: '£35.12',
        CGR: '£16.25',
        AccountSatus: 'Lapsed 30',
        ipAddress: '',
        referCode: '',
    },
    {
        customerId: '125445788',
        username: 'CraftyCockney180',
        firstName: 'Ramu',
        lastName: 'Bristow',
        email: 'Crafty180@bdo.com',
        phoneNumber: '07878180180',
        country: '',
        brand: 'GBP',
        playersignment: '',
        stackFactor: '1.00',
        deposits: '£35.12',
        CGR: '£16.25',
        AccountSatus: 'Lapsed 90',
        ipAddress: '',
        referCode: '',
    }

]
     }

     componentDidMount(){
         //this.props.dispatch(getplayerList(this.props))
         this.props.dispatch(getPlayerSearchList(this.props.tableData))
         console.log("dsd",this.props.tableData)
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
        console.log('data',this.props.playerData)
        let array =[];
        array.push(this.props.playerData)
        let data = this.state;
       //let filterData =  this.filterByReference(data, array)
       console.log("hii",this.props.playerData)

        return(
            <>
            <div className="CMS-box CMS-table CMS-table-triped" style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'290px'}}>
                                                    <table>
                                                        {this.props.playerData.length > 0 &&
                                                        <thead>
                                                            <tr>
                                                                <th>Customer Id</th>
                                                                <th>Username</th>
                                                                <th>First Name</th>
                                                                <th>Second Name </th>
                                                                <th>Email</th>
                                                                <th>Phone</th>
                                                                <th>Country</th>
                                                                <th>Currency</th>
                                                                <th>Player Segment</th>
                                                                <th>Stake Factor</th>
                                                                <th>Deposits</th>
                                                                <th>GGR</th>
                                                                <th>Account Status</th>
                                                            </tr>
                                                        </thead>}
                                                        <tbody>
                                                            
                                                           { this.props.playerData.length > 0 && this.props.playerData.map((item,index)=>{
                                                                 return (<tr key={item}>
                                                                      <td>{item.userId}</td>
                                                                      <td>{item.userName}</td>
                                                                      <td>{item.firstName}</td>
                                                                      <td>{item.lastName}</td>
                                                                      <td>{item.email}</td>
                                                                      <td>{item.phone}</td>
                                                                      <td>{item.country}
                                                                      {/* <i class="CMS-flags CMS-262-united-kingdom"></i> */}
                                                                      </td>
                                                                      <td>{item.currency}</td>
                                                                      <td>{item.playerSegment}</td>
                                                                      <td>{item.stakeFactor}</td>
                                                                      <td>{item.deposit}</td>
                                                                      <td>{item.ggr}</td>
                                                                      <td>{item.accountStatus}<div class="CMS-btnStatus CMS-statusActive"></div></td>

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
        playerData: state.playersearch.playerData
    };
 }
export default connect(mapStateToProps)(PlayerSeachTable);