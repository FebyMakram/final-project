import React from 'react'
import img1 from '../../Assets/Images/img1.png'
import img2 from '../../Assets/Images/img2.png'
import img3 from '../../Assets/Images/img3.png'
import img4 from '../../Assets/Images/img4.png'
import img5 from '../../Assets/Images/img5.png'
import img6 from '../../Assets/Images/img6.png'
import img7 from '../../Assets/Images/img7.png'
import img8 from '../../Assets/Images/img8.png'
import img9 from '../../Assets/Images/img9.png'
import style from './FuniroFurniture.module.css'



        //  done 10000000000000//////

export default function FuniroFurniture() {
  return (
    <div className='container-fluid text-center mb-5'>

      <h5 className='text-secondary mt-5'>Share your setup with</h5>
      <h2 className='fw-bolder fs-1' >#FuniroFurniture</h2>

        {/* images */}
        
        <div className="row">

            {/* left part */}
                        {/* 1st row */}
            <div className="col-md-1">
                <img src={img1} className={`${style.img1} mb-5`} alt="imges" />
            </div>

                <div className="col-md-4">
                    <img src={img2} className={`${style.img2} w-100  mt-5 ms-0 mb-5`} alt="images" />
                </div>

                <div className="col-md-2">
                    <img src={img3} className={`${style.img3} mb-5 h-100`} alt="images" />
                 </div>    

                <div className="col-md-2">
                    <img src={img4} className={`${style.img4}  h-75 ms-4 mt-5 mb-5`} alt="images" />    
                </div> 

                <div className="col-md-2">
                    <img src={img5} className={`${style.img5}  mb-5`} alt="images" />    
                </div>   

        </div>
                {/* 2nd row */}
            <div className="row">

                <div className="col-md-2">
                    <img src={img6} className={`${style.img6} `} alt="images" />
                </div>

                <div className="col-md-3">
                    <img src={img7} className={`${style.img7}  `} alt="images" />
                </div>

               <div className="col-md-2">
                <img src={img8} className={`${style.img8} `} alt="images" />
              </div> 

            <div className="col-md-2">
                <img src={img9} className={`${style.img9} `} alt="images" /> 
             </div> 

            </div>

    </div>
  )
}
