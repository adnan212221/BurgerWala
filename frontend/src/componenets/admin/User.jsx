import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'

const User = () => {
    const arr = [1,2,3]
  return (
    <div>
        <div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>order id</th>
                        <th>order date</th>
                        <th>order status</th>
                        <th>item qty</th>
                        <th>amount</th>
                        <th>payment Method</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
              
                       {
                        arr.map((i=>(
                            <tr>
                            <td>1</td>
                            <td>1/1/2020</td>
                            <td>pending</td>
                            <td>1</td>
                            <td>100</td>
                            <td>cash</td>
                            <td><Link to={`/order/${'sgy'}`}>{<AiOutlineEye /> }</Link></td>
                            </tr>
                        )))
                       }
                    
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default User