import React from 'react';
import { connect } from 'react-redux';
import { playerapi} from '../../sharedfiles/EndpointConfig';

class betHistoryTable extends React.Component{
 constructor (props){
     super(props);
     this.state = [{
        id: '10415721',
        brand: 'SportsBrand-1',
        description: 'KES29.00 12-fold',
        eventName: 'Multiple Events',
        stake: '29.00 KES',
        totalStake: '29.00 KES',
        win: '44333.48 KES',
        customer: '254724460375',
        placedOn: '28/05/2021 13:47:36',
        settledOn: '254724460375',
        rejectionCode: '',
        walletID: '20830489'
    },
    {
        id: '10415722',
        brand: 'SportsBrand-1',
        description: 'KES29.00 12-fold',
        eventName: 'Multiple Events',
        stake: '29.00 KES',
        totalStake: '29.00 KES',
        win: '44333.48 KES',
        customer: '254724460375',
        placedOn: '28/05/2021 13:47:36',
        settledOn: '254724460375',
        rejectionCode: '',
        walletID: '20830489'
    },
    {
        id: '10415723',
        brand: 'SportsBrand-1',
        description: 'KES29.00 12-fold',
        eventName: 'Multiple Events',
        stake: '29.00 KES',
        totalStake: '29.00 KES',
        win: '44333.48 KES',
        customer: '254724460375',
        placedOn: '28/05/2021 13:47:36',
        settledOn: '254724460375',
        rejectionCode: '',
        walletID: '20830489'
    },
    {
        id: '10415724',
        brand: 'SportsBrand-1',
        description: 'KES29.00 12-fold',
        eventName: 'Multiple Events',
        stake: '29.00 KES',
        totalStake: '29.00 KES',
        win: '44333.48 KES',
        customer: '254724460375',
        placedOn: '28/05/2021 13:47:36',
        settledOn: '254724460375',
        rejectionCode: '',
        walletID: '20830489'
    },
    {
        id: '10415725',
        brand: 'SportsBrand-1',
        description: 'KES29.00 12-fold',
        eventName: 'Multiple Events',
        stake: '29.00 KES',
        totalStake: '29.00 KES',
        win: '44333.48 KES',
        customer: '254724460375',
        placedOn: '28/05/2021 13:47:36',
        settledOn: '254724460375',
        rejectionCode: '',
        walletID: '20830489'
    },
    {
        id: '10415726',
        brand: 'SportsBrand-1',
        description: 'KES29.00 12-fold',
        eventName: 'Multiple Events',
        stake: '29.00 KES',
        totalStake: '29.00 KES',
        win: '44333.48 KES',
        customer: '254724460375',
        placedOn: '28/05/2021 13:47:36',
        settledOn: '254724460375',
        rejectionCode: '',
        walletID: '20830489'
    },
    {
        id: '10415727',
        brand: 'SportsBrand-1',
        description: 'KES29.00 12-fold',
        eventName: 'Multiple Events',
        stake: '29.00 KES',
        totalStake: '29.00 KES',
        win: '44333.48 KES',
        customer: '254724460375',
        placedOn: '28/05/2021 13:47:36',
        settledOn: '254724460375',
        rejectionCode: '',
        walletID: '20830489'
    },
    {
        id: '10415729',
        brand: 'SportsBrand-1',
        description: 'KES29.00 12-fold',
        eventName: 'Multiple Events',
        stake: '29.00 KES',
        totalStake: '29.00 KES',
        win: '44333.48 KES',
        customer: '254724460375',
        placedOn: '28/05/2021 13:47:36',
        settledOn: '254724460375',
        rejectionCode: '',
        walletID: '20830489'
    },
    {
        id: '10415730',
        brand: 'SportsBrand-1',
        description: 'KES29.00 12-fold',
        eventName: 'Multiple Events',
        stake: '29.00 KES',
        totalStake: '29.00 KES',
        win: '44333.48 KES',
        customer: '254724460375',
        placedOn: '28/05/2021 13:47:36',
        settledOn: '254724460375',
        rejectionCode: '',
        walletID: '20830489'
    },
]
     }

    render(){
        let array =[];
        array.push(this.props.playerData)
        let data = this.state;
        var responseData = this.props.playerData.data
       //let filterData =  this.filterByReference(data, array)
      // console.log("hii",responseData)

        return(
            <>
            <div className="CMS-box CMS-table CMS-table-triped" style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'290px'}}>
                                                    <table>
                                                        {responseData != undefined && responseData.length> 0 &&
                                                        <thead>
                                                            <tr>
                                                            <th>ID</th>
                                                        <th>Brand</th>
                                                        <th>Description</th>
                                                        <th>Event Name</th>
                                                        <th>Stake</th>
                                                        <th>Total Stake</th>
                                                        <th>Win</th>
                                                        <th>Customer</th>
                                                        <th>Placed On <span class="material-icons md-18"
                                                                data-icon="south"></span></th>
                                                        <th>Settled On</th>
                                                        <th>Rejection Code</th>
                                                        <th>Wallet ID</th>
                                                            </tr>
                                                        </thead>}
                                                        <tbody>
                                                            
                                                           { responseData != undefined  && responseData.map((item,index)=>{
                                                                 return (<tr key={item}>
                                                                      <td>{item.id}</td>
                                                                      <td>{item.brand}</td>
                                                                      <td>{item.description}</td>
                                                                      <td>{item.eventName}</td>
                                                                      <td>{item.stake}</td>
                                                                      <td>{item.totalStake}</td>
                                                                      <td>{item.win}
                                                                      {/* <i class="CMS-flags CMS-262-united-kingdom"></i> */}
                                                                      </td>
                                                                      <td>{item.customer}</td>
                                                                      <td>{item.placedOn}</td>
                                                                      <td>{item.settledOn}</td>
                                                                      <td>{item.rejectionCode}</td>
                                                                      <td>{item.walletID}</td>
                                                                     
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
        playerData: state.playersearch.playerData,
        paginationFirstValue: state.playersearch.paginationFirstValue,
        paginationSecondValue: state.playersearch.paginationSecondValue
    };
 }
export default connect(mapStateToProps)(betHistoryTable);