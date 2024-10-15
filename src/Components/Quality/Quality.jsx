import React from "react";
import style from "./Quality.module.css";
import trophy1 from "../../Assets/Images/trophy1.png";
import customersupport from "../../Assets/Images/customersupport.png";
import guarantee from "../../Assets/Images/guarantee.png";
import shipping from "../../Assets/Images/shipping.png";


    // done /////

export default function Quality() {
  return (
    <div className={`container-fluid mt-5  ${style.container}`}>
      <div className="row w-100 ">
        <div className="col-md-3 ">

          <div className="row">
            <div className="col-md-3 ">
              <img src={trophy1} alt="trophy" />
            </div>

            <div className="col-md-9">
              <h4>High Quality</h4>
              <p className="text-secondary fs-5">crafted from top materials</p>
            </div>
          </div>
        </div>

          
        <div className="col-md-3 ">

         <div className="row">
            <div className="col-md-3 ">
            <img src={guarantee} alt="guarantee" />
            </div>

            <div className="col-md-9">
              <h4>Warranty Protection</h4>
              <p className="text-secondary fs-5">Over 2 years</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">

        <div className="row">
            <div className="col-md-3">
          <img src={shipping} alt="" />
        
            </div>

            <div className="col-md-9">
              <h4>Free Shipping</h4>
              <p className="text-secondary fs-5">Order over 150 $</p>
            </div>
          </div>

        </div>

          
        <div className="col-md-3">
        <div className="row">
            <div className="col-md-3">
            <img src={customersupport} alt="customer-support" />
        
            </div>

            <div className="col-md-9">
              <h4>24 / 7 Support</h4>
              <p className="text-secondary fs-5">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
