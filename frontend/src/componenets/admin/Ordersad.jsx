import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
import {GiArmoredBoomerang} from 'react-icons/gi'

const Ordersad = () => {
  const arr = [1,2,3,4]
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
                        <th>user</th>
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
                            <td>Adnan</td>
                            <td>cash</td>
                            <td><Link to={`/order/${'sgy'}`}>{<AiOutlineEye /> }</Link></td>
                            <button className='btn'><GiArmoredBoomerang /></button>
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

export default Ordersad