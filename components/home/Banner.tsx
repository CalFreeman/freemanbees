import React from "react";
import Construction from '../public/images/60028.png';

import { APP_NAME } from "../../lib/utils/constant";

type srcType = {
    Construction: any;
};

const Banner = () => (
  <div className="banner">
      <h1 className="logo-font">{APP_NAME.toUpperCase()}</h1>
      <p>A Bee &amp; Honey Business</p>

  </div>
);

export default Banner;