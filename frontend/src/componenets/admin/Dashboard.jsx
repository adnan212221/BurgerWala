import React from 'react'
import { Link } from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2'
import {Chart as Chartjs, Tooltip,ArcElement,Legend} from 'chart.js'


Chartjs.register(Tooltip, ArcElement,Legend)


const Box =({title,value})=>{
    return(
        <div>
            <h3>
                {title=== 'income' && '$'}
                {value}
            </h3>
            <p>
                {title}
            </p>
        </div>
    )
}

const Dashboard = () => {
    const data = {
        labels: ['preparing','shipped','delivered'],
        datasets: [
            {
                labels : '# of orders',
        data: [2,3,4],
        backgroundColor:['rgba(159,63,176,0.1)', 'rgba(78,63,176,0.2)','rgba(156,0,60, 0.3)'],
        borderColor:['rgb(159,63,176)', 'rgb(78,63,176)','rgb(156,0,60)'],
        borderWidth:1
            }]
    }
  return (
    <div>
        <div>
            <Box title='users' value={213}/>
            <Box title='orders' value={23}/>
            <Box title='income' value={21}/>
        </div>
        <div>
            <Link to={'/admin/orders'}>View Orders</Link>
            <Link to={'admin/users'}>View users</Link>
        </div>

        <div>
            <Doughnut data={data} />
        </div>
    </div>
  )
}

export default Dashboard