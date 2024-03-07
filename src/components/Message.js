import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww" alt="" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww" alt="" />
      </div>
    </div>
  )
}

export default Message