import React from "react";
import style from "./BrowseTheRange.module.css";
import dining from "../../Assets/Images/dining.png";
import living from "../../Assets/Images/living.png";
import bedroom from "../../Assets/Images/bedroom.png";


            // done ///////

export default function BrowseTheRange() {
  return (
    <div className="container">
      <div className="text-center mt-5 mb-4">
        <h2>Browse The Range</h2>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
     
        <div className={`${style.pic} row text-center mb-5 mt-5`}>
          <div className="col-md-4 ">
            <img src={dining} alt="dining room" />
            <h4 className="mt-3">Dining</h4>
          </div>

          <div className="col-md-4 ">
            <img src={living}  alt="living room" />
            <h4 className="mt-3">Living</h4>
          </div>

          <div className="col-md-4 ">
            <img src={bedroom} alt="bedroom room" />
            <h4 className="mt-3">Bedroom</h4>
          </div>

        </div>

        <h2 className='text-center fw-bolder fs-1 mt-5 mb-4'>Our Products</h2>


      </div>
    
  );
}
