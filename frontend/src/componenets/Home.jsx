import React from 'react'
import '../styles/home.scss'
import {delay, motion} from 'framer-motion'
import {HashLink} from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Home = () => {

  const option = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      delay:0.4   
     }
  };

  return (
    <>
    <div className="container-fluid  home">
      <div>
        <motion.h1 {...option} >Buger Wala</motion.h1>
        <motion.p {...option}>Give Yourself a tasty burger</motion.p>
      </div>

      <motion.a href='#menu' initial={{y: '-100%',
          opacity: 0,
         }}  whileInView={{y: 0,
          opacity: 1,
         }}  > Explore now</motion.a>
    </div>

    <Menu />
    </>
  )
}

export default Home