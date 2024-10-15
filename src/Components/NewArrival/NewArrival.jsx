import React from 'react'
import NewArrivalPic from '../../Assets/Images/NewArrivalPic.png'
import style from './NewArrival.module.css'
            // done 100%////////////

export default function NewArrival() {
  return (
    <div className='container-fluid '>

      {/* pic */}
        <div >
      <img src={NewArrivalPic} className={style.pic} alt="Home Page Pic" />
      </div>
       
       {/* New Arrival */}

       <div className={` ${style.post}  h-auto p-5 ms-3`}>
          <h3 className='fs-6 g-2  mb-2 '>New Arrival</h3>
          <h2 className={`${style.title} mb-2`}>Discover Our <br/>New Collection</h2>
          <p className='fs-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/> elit tellus, luctus nec ullamcorper mattis.</p>
          <button className={` ${style.btn}  text-white w-25 h-25 mb-1  ms-1 p-3 fs-6 border-0`}>Buy Now</button>
       </div>

    </div>
  )
}
