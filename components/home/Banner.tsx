import React from "react";
import { APP_NAME } from "../../lib/utils/constant";


const Banner = () => (
  <div className="banner-container">
        <img src="images/60028.jpg" style={{width: "100%", height: "100%", float: "left"}}/>

    <div className="banner">
        <h1 className="logo-font">{APP_NAME.toUpperCase()}</h1>
        <p>A Bee &amp; Honey Company</p>

    </div>

  </div>
);

export default Banner;