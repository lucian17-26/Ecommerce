import React from 'react'
import "./button.css"

export default function Button( props ) {
  return (
    <div >
        <button className='style-button' >{props.button}</button>
    </div>
  )
}
