import React from 'react'
import style from './ShopImage.module.css'
import Vector from '../../Assets/Images/Vector.png'
import Vector1 from '../../Assets/Images/Vector1.png'
import Vector2 from '../../Assets/Images/Vector2.png'
import Line5 from '../../Assets/Images/Line5.png'

    // done

export default function ShopImage() {
  return (
    <div className='container-fluid  mb-5'>
        <div className={`${style.img} text-center `}>
            
        </div>

        <div className={style.overlay}>
            <h2 className='fs-1 fw-bold mt-5'>Shop</h2>
            <p className='mt-2'> <span className='fw-bold'>Home</span>{' >'} Shop</p>
        </div>

        <div className={`${style.title1} `}> 

                <div className="row">

                <div className="col-md-6">
            <div className={`${style.filter} ms-5`}>
                <img src={Vector} className='ms-3' alt="filter" />
                <h5 className='ms-3 mt-3'>Filter</h5>
                <img src={Vector1} className='ms-3' alt="vector" />
                <img src={Vector2} className='ms-3' alt="vector" />
                <img src={Line5} className={`${style.line} ms-4 `} alt="line" />
                <p className='ms-3 mt-4'>Showing 1–16 of 32 results</p>
            </div>
            </div>
          
                <div className="col-md-5">
            <div className={`${style.rightPart} d-flex flex-direction-row justify-content-end mt-3`}>
            <h5 className='mx-3 mt-2'>Show</h5>
            <input className={` ${style.input} text-center border-0 bg-white text-secondary `} type="text "placeholder='16' />
            <h5 className='mx-3 mt-2'> Short by</h5>
            <input className=' fs-5 text-center border-0 bg-white text-secondary'  type="text" placeholder='Default' />
            </div>
            </div>
            </div>
                
         </div>

    </div>
  )
}
