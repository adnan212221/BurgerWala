import React from 'react'

const Contact = () => {
  return (
    <>
    <div>
        <div>
        <input type="text" placeholder='name' className='name' name='name' />
        <input type="text" placeholder='email' className='email' name='email' />
        <input type="text" placeholder='message' className='message' name='message' />
        </div>
<div>
    <button className='btn' type='button'>submit</button>
</div>

    </div>
    </>
  )
}

export default Contact