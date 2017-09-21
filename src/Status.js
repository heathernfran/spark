import React from 'react';

const Status = (props) => {
  const {statusCode, statusMessage} = props
  return (
    <span className={
      statusCode === 200 ? 'success' : 'danger'
    }>{statusMessage}</span>
  )
}

export default Status
