import React from 'react'
import error from'../../Assets/Images/error.svg'


// done
export default function NotFound() {
  return (
    <div>
      <h2>
        This page is not foung
      </h2>
      <img src={error} alt="error" />

    </div>
  )
}
