import React from "react";
import Catagory from "../components/Catagory";
import Products from "../components/Products";

function ProductPage() {
  return (
    <div>
      {/* category  */}
      <Catagory />

      {/* main products */}
      <Products />
    </div>
  );
}

export default ProductPage;
