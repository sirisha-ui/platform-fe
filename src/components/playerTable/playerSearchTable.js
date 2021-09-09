import React from 'react';

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
        firstName: 'Eric',
        lastName: 'Bristow',
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
        firstName: 'Eric',
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
 

    render(){
        let data = this.state;

        return(
            <>
            <div className="CMS-box CMS-table CMS-table-triped">
                                                    <table>
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
                                                        </thead>
                                                        <tbody>
                                                            
                                                           { data.map((item,index)=>{
                                                                 return (<tr key={item}>
                                                                      <td>{item.customerId}</td>
                                                                      <td>{item.username}</td>
                                                                      <td>{item.firstName}</td>
                                                                      <td>{item.lastName}</td>
                                                                      <td>{item.email}</td>
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

export default PlayerSeachTable;