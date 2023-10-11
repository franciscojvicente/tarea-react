import React from 'react'

const HelloWorld = (props) => {
  return (
    <>
<div className='todoContainer'>
  <div>
    <h1>{props.title}{props.msg}</h1>
    <button className="buttonCreate">Click me</button>
  </div>
</div>
    </>
  )
}

export default HelloWorld