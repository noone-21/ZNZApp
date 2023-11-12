import React from 'react'

function Button(props) {

    const {btnTitle,style} =props

  return (
    <>
        <button style={{...style}} > {btnTitle} </button>
    </>
  )
}

export default Button
