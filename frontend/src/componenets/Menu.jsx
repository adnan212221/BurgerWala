import React from 'react'
import '../styles/menu.scss'
import MenuCard from './MenuCard'
import burger1 from '../assets/burger1.jpg'
import burger2 from '../assets/burger2.jpg'
import burger3 from '../assets/burger3.jpg'
import burger4 from '../assets/burger4.jpg'


const Menu = () => {

    const handler= (itemNum)=>{

    }
    
    // const buger = [1,2,3,4,5,6];

  return (
    <>
    <div id='menu'>
    <h1>Menu</h1>
    
    <div className='cardflex'>
        <MenuCard burgsrc={burger1} title={'Burger with coke'} price={2000} itemNum={1} />
        <MenuCard burgsrc={burger2} title={'Burger with coke'} price={2000} itemNum={2} />
        <MenuCard burgsrc={burger3} title={'Burger with coke'} price={2000} itemNum={3} />
        <MenuCard burgsrc={burger4} title={'Burger with coke'} price={2000} itemNum={4} />
        <MenuCard burgsrc={burger1} title={'Burger with coke'} price={2000} itemNum={5} />
        <MenuCard burgsrc={burger3} title={'Burger with coke'} price={2000} itemNum={6} />
        <MenuCard burgsrc={burger4} title={'Burger with coke'} price={2000} itemNum={7} />
        <MenuCard burgsrc={burger3} title={'Burger with coke'} price={2000} itemNum={8} />
        <MenuCard burgsrc={burger1} title={'Burger with coke'} price={2000} itemNum={9} />
        <MenuCard burgsrc={burger3} title={'Burger with coke'} price={2000} itemNum={10} />
        <MenuCard burgsrc={burger1} title={'Burger with coke'} price={2000} itemNum={11} handler={handler} />
        {/* <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard /> */}

    </div>
    </div>

    </>
  )
}

export default Menu