import React from "react";
import style from "./RoomInspiration.module.css";
import Slider from 'react-slick';
import Room1 from "../../Assets/Images/Room1.png";
import Room2 from "../../Assets/Images/Room2.png";
import Room3 from "../../Assets/Images/Room3.png";

// hover of the image not done yet//////

export default function RoomInspiration() {
  var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,

  //     responsive: [
  //         {
  //           breakpoint: 1024,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 3,
  //             infinite: true,
  //             dots: true,
  //           }
  //         },
  //         {
  //           breakpoint: 600,
  //           settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 2,
  //             initialSlide: 2
  //           }
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1
  //           }
  //         }
  //       ],
  //       appendDots: dots => (
  //         <div
  //           style={{
  //             backgroundColor: "#fcf8f3",
  //             // margin:'10px',
  //             // borderRadius: "50%",
  //             // padding: "10px"
  //           }}
  //         >
  //           <ul style={{ margin: "0px" }}> {dots} </ul>
  //         </div>
  //       ),
  //       customPaging: i=> (
  //         <div
  //           style={{
  //             width: "30px",
  //             color: "#b88e2f",
  //             border:"1px solid #b88e2f",
  //             borderRadius: "50%",

  //           }}
  //         >
  //           {i+1 }
  //         </div>
  //       )
    };

  return (
    <div className={`${style.container} container mt-5 `}>
      <div className="row">
        {/* left part */}
        <div className={`${style.leftPart} col-md-5 mt-5 `}>
          <h2 className="fs-1 fw-bolder">
            50+ Beautiful rooms <br />
            inspiration
          </h2>

          <p className="text-secondary my-3">
            Our designer already made a lot of beautiful <br />
            prototipe of rooms that inspire you
          </p>

          <button className={`${style.btn}   text-white border-0 my-3 `}>
            Explore More
          </button>
        </div>

        {/* right part */}
        <div className={`${style.image} col-md-6 mt-5 ms-5 `}>
          {/* react slick */}
          
         <Slider {...settings}>

            <div>
                <img src={Room1}  alt="rooms" />
            </div>
              <div>
                 <img src={Room2}  alt="rooms" />
             </div>
             <div>
                 <img src={Room3}  alt="rooms" />
            </div>
           </Slider>
    

          {/* <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators ">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                className={`w-25 h-25 bg-black  ${style.indicat}`}
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Room1} alt="Room." />
              </div>
              <div className="carousel-item">
                <img src={Room2} alt="Room" />
              </div>
              <div className="carousel-item">
                <img src={Room3} alt="Room" />
              </div>
            </div>

            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon  "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden ">Next</span>
            </button>
          </div> */}
        </div>

      </div>
    </div>

  );
}
