import React from "react";
import { Helmet } from "react-helmet";

// import "../styles/components/catagory.scss";
import "../styles/components/boxModel.scss";

import Catagory from "../components/Catagory";
import Products from "../components/Products";
import Blog from "../components/Blog";
import Promotions from "../components/Promotions";

function ProductPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Demo | Zaynax LTD</title>
        <link rel="canonical" href="https://zaynax-ltd-demo.web.app" />
      </Helmet>
      <div className="grid_parent mainBody">
        <div className="flex wrap">
          {/* category  */}
          <Catagory />

          {/* main products */}
          <Products style={{ flex: 1 }} />
        </div>
        <Blog />
        <Promotions />
      </div>
    </>
  );
}

export default ProductPage;
