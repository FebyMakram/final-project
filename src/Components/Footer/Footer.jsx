import React from 'react'
import style from'./Footer.module.css'

// underline of button and input should be space between them and the color of title should be change
              // semi done
              
export default function Footer() {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-md-3">
          <h3>Funiro.</h3>
          <p className='mt-5 lh-5 text-secondary'>400 University Drive Suite 200 Coral <br/> Gables,<br/>
          FL 33134 USA</p>
        </div>
        <div className="col-md-3  ">
          <h3 className='h5 text-secondary'> Links</h3>
          <h3 className='h5 mt-5 mb-5'>Home</h3>
          <h3 className='h5 mt-5 mb-5'>Shop</h3>
          <h3 className='h5 mt-5 mb-5'>About</h3>
          <h3 className='h5 mt-5 '>Contact</h3>

        </div>

        <div className="col-md-3 ">
          <h5 className='text-secondary'>Help</h5>
          <h3 className='h5 mt-5 '>Payment Options</h3>
          <h3 className='h5 mt-5 mb-5'>Returns</h3>
          <h3 className='h5'>Privacy Policies</h3>

        </div>

        <div className="col-md-3">

        <h3 className='h5 text-secondary'>Newsletter</h3>

        <input className='border-0 text-decoration-underline mt-5' type="text" placeholder='Enter Your Email Address' />
        <button className='border-0 text-decoration-underline  bg-white pb-3 line'   >SUBSCRIBE</button>

        </div>

      </div>
      <hr/>
      <div className="row">
        <div className="col-md-12 mb-4">
        <h5> 2023 furino. All rights reverved </h5>
        </div>
      </div>
      
    </div>
  )
}
