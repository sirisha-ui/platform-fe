import React from 'react';
import { connect } from 'react-redux';

class NewPlayerSeachTable extends React.Component{
 constructor (props){
     super(props);
     this.state = [{
        customerId: '9097081',
        username: 'babuleaca',
        firstName: 'Cesar',
        lastName: 'Trocado',
        registrationFromdate: '8/27/2021 16:03:40',
        affiliateBTAG: 'a_999b_14052c_',
        affiliateName: 'Oddschecker',
        referCode: '',
        brand: 'Brand-Ken',
        country: '',
        firstdepositAmount: '452 KES',
        betCount: '2',
        AccountSatus: 'Active',
    },
    {
        customerId: '9098587',
        username: 'kipcio',
        firstName: 'Pedro',
        lastName: 'Esteves',
        registrationFromdate: '8/27/2021 16:03:40',
        affiliateBTAG: '',
        affiliateName: '',
        referCode: '5287612',
        brand: 'Brand-Ken',
        country: '',
        firstdepositAmount: '452 KES',
        betCount: '2',
        AccountSatus: 'Active',
    },
    {
        customerId: '9098604',
        username: 'lukram',
        firstName: 'Celio',
        lastName: 'Troia',
        registrationFromdate: '8/27/2021 16:03:40',
        affiliateBTAG: 'a_7652b_2832c_',
        affiliateName: 'CatenaMedia',
        referCode: '',
        brand: 'Brand-Ken',
        country: '',
        firstdepositAmount: '',
        betCount: '',
        AccountSatus: 'Closed',
    },
    {
        customerId: '9098752',
        username: 'Scratville',
        firstName: 'Martin',
        lastName: 'Wanjiru',
        registrationFromdate: '8/27/2021 16:03:40',
        affiliateBTAG: 'a_999b_14052c_',
        affiliateName: 'Oddschecker',
        referCode: '',
        brand: 'Brand-Ken',
        country: '',
        firstdepositAmount: '81,218 KES',
        betCount: '21',
        AccountSatus: 'Active',
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
                                                                <th>Customer Id</th>
                                                                <th>Username</th>
                                                                <th>First Name</th>
                                                                <th>Second Name </th>
                                                                <th>Registration Date</th>
                                                                <th>Affiliate Btag</th>
                                                                <th>Affiliate Name </th>
                                                                <th>Referrer Code</th>
                                                                <th>Brand</th>
                                                                <th>Country</th>
                                                                <th>First Deposit Amount</th>
                                                                <th>Bet Count</th>
                                                                <th>Account Status</th>
                                                            </tr>
                                                        </thead>}
                                                        <tbody>
                                                            
                                                           { filterData.length > 0 && filterData.map((item,index)=>{
                                                                 return (<tr key={item}>
                                                                      <td>{item.customerId}</td>
                                                                      <td>{item.username}</td>
                                                                      <td>{item.firstName}</td>
                                                                      <td>{item.lastName}</td>
                                                                      <td>{item.registrationDate}</td>
                                                                      <td>{item.phoneNumber}</td>
                                                                      <td>{item.country}<i class="CMS-flags CMS-262-united-kingdom"></i></td>
                                                                      <td>{item.brand}</td>
                                                                      <td>{item.playersignment}</td>
                                                                      <td>{item.stackFactor}</td>
                                                                      <td>{item.deposits}</td>
                                                                      <td>{item.cgr}</td>
                                                                      <td>{item.AccountSatus}<div class="CMS-btnStatus CMS-statusActive"></div></td>

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
 
export default connect(mapStateToProps)(NewPlayerSeachTable);