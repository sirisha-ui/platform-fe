import React from 'react';
import { connect } from 'react-redux';

class PlayerActivityTable extends React.Component{
 constructor (props){
     super(props);
     this.state = [{
        partyId: '125445787',
        userId: 'CraftyCockney180',
        brand: 'GBP',
        country: '',
        Currency: '',
        regDate: '',
        turnover: '',
        ggr: '',
        margin: '',
        betCount: '',
        averageBetStake: '',
        segment: 'Crafty180@bdo.com',
        accountAge: '07878180180',
        firstName: 'Eric',
        lastName: 'Bristow',
    },
    {
        partyId: '125445787',
        userId: 'CraftyCockney180',
        brand: 'GBP',
        country: '',
        Currency: '',
        regDate: '',
        turnover: '',
        ggr: '',
        margin: '',
        betCount: '',
        averageBetStake: '',
        segment: 'Crafty180@bdo.com',
        accountAge: '07878180180',
        firstName: 'Eric',
        lastName: 'Bristow',
    },
    {
        partyId: '125445787',
        userId: 'CraftyCockney180',
        brand: 'GBP',
        country: '',
        Currency: '',
        regDate: '',
        turnover: '',
        ggr: '',
        margin: '',
        betCount: '',
        averageBetStake: '',
        segment: 'Crafty180@bdo.com',
        accountAge: '07878180180',
        firstName: 'Eric',
        lastName: 'Bristow',
    },
    {
        partyId: '125445787',
        userId: 'CraftyCockney180',
        brand: 'GBP',
        country: '',
        Currency: '',
        regDate: '',
        turnover: '',
        ggr: '',
        margin: '',
        betCount: '',
        averageBetStake: '',
        segment: 'Crafty180@bdo.com',
        accountAge: '07878180180',
        firstName: 'Eric',
        lastName: 'Bristow',
    }

]
     }
      filterByReference = (arr1, arr2) => {
           let res = [];
           res = arr1.filter(el => {
              return arr2.find(element => {
                 return (element.firstName).toUpperCase() === (el.firstName).toUpperCase() || (element.lastName).toUpperCase() === (el.lastName).toUpperCase();
              });
           });
           return res;
        }

    render(){
        console.log('data',this.props.tableData)
        let array =[];
        array.push(this.props.tableData)
        let data = this.state;
       let filterData =  this.filterByReference(data, array)
       console.log("hii",filterData)

        return(
            <>
            <div className="CMS-box CMS-table CMS-table-triped" style ={{width: this.props.displayValue ? '100%':'80%', marginLeft: this.props.displayValue ?'0px':'290px'}}>
                                                    <table>{filterData.length > 0 &&
                                                        <thead>
                                                            <tr>
                                                            <th>Party ID</th>
                                                            <th>User ID</th>
                                                            <th>Brand</th>
                                                            <th>Country</th>
                                                            <th>Currency</th>
                                                            <th>Reg Date</th>
                                                            <th>Turnover</th>
                                                            <th>GGR</th>
                                                            <th>Margin %</th>
                                                            <th>Bet Count</th>
                                                            <th>Average Bet Stake</th>
                                                            <th>Segment</th>
                                                            <th>Account Age</th>
                                                            </tr>
                                                        </thead>}
                                                        <tbody>
                                                           { filterData.length > 0 && filterData.map((item,index)=>{
                                                                 return (<tr key={item}>
                                                                      <td>{item.partyId}</td>
                                                                      <td>{item.userId}</td>
                                                                      <td>{item.brand}</td>
                                                                      <td>{item.country}</td>
                                                                      <td>{item.Currency}</td>
                                                                      <td>{item.regDate}</td>
                                                                      <td>{item.turnover}<i class="CMS-flags CMS-262-united-kingdom"></i></td>
                                                                      <td>{item.ggr}</td>
                                                                      <td>{item.margin}</td>
                                                                      <td>{item.betCount}</td>
                                                                      <td>{item.averageBetStake}</td>
                                                                      <td>{item.segment}</td>
                                                                      <td>{item.accountAge}<div class="CMS-btnStatus CMS-statusActive"></div></td>

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
    };
 }
export default connect(mapStateToProps)(PlayerActivityTable);