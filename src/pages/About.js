import React from "react";
import aboutImg from "./../assets/images/about-img.png";

const About = () => {
  return (
    <div className="container">
      <h1 className="about-title mt-5 fw-bolder container ">About Us</h1>
      <hr className="text-danger" />
      <div className="d-flex ">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 align-items-center text-start ">
            <div className=" mt-sm-0 mt-lg-0 ">
              <div className="mt-4 p-2">
                <h2>The Best Travel Agency Company.</h2>
              </div>
              <div className="d-flex  about-text">
                <div className="p-2 ">
                  <p className="">
                    Founded in 1996 in Amsterdam, Travel Forest has grown from a
                    small Dutch start-up to one of the world’s leading digital
                    travel companies. Part of Travel Forest Holdings Inc. Travel
                    Forest mission is to make it easier for everyone to
                    experience the world.
                  </p>
                  <p className="">
                    By investing in technology that takes the friction out of
                    travel, Travel Forest seamlessly connects millions of
                    travelers to memorable experiences, a variety of
                    transportation options, and incredible places to stay – from
                    homes to hotels, and much more. As one of the world’s
                    largest travel marketplaces for both established brands and
                    entrepreneurs of all sizes, Travel Forest enables properties
                    around the world to reach a global audience and grow their
                    businesses.
                  </p>
                  <p>
                    Travel Forest is available in 43 languages and offers more
                    than 28 million reported accommodation listings, including
                    over 6.2 million homes, apartments, and other unique places
                    to stay. Wherever you want to go and whatever you want to
                    do, Travel Forest makes it easy and supports you with 24/7
                    customer support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="  col-sm-12 col-md-12 col-lg-6 about-img pt-md-2  mt-sm-0 pt-sm-0 ">
            <div className="d-flex align-items-end pt-md-5 mt-md-5  mt-sm-0 pt-sm-0">
              <div className=" border border-5 rounded">
                <img
                  src={aboutImg}
                  alt=""
                  className="w-100 mx-auto d-block rounded  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
