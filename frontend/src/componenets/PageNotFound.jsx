import React from 'react'
import {MdError} from 'react-icons/md'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h1>Page Not Found</h1>
        <MdError size={100} color="red" />
       
        <Link to={'/'}>Go to Home page</Link>
    </div>
  )
}

export default PageNotFound