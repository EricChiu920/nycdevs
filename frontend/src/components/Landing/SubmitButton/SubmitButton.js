import React from 'react'

const submitButton = (props) => {

  return (
    <button 
      className="btn btn-info" 
      type="button"
      onClick={props.handleSubmitClick}><i style={{fontSize: '2rem'}} className="fas fa-search" ></i></button>
  )
}

export default submitButton;
