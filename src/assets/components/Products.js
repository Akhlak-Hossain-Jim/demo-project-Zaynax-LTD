import React from "react";

import "../styles/components/product.scss";
import "../styles/components/boxModel.scss";

import bag from "../media/Products/1a-300x300.png";
import headPhone from "../media/Products/4a-300x300.png";
import shirt from "../media/Products/8e-300x300.png";
import watch from "../media/Products/11a-300x300.png";

function Product({ image, name, price, oldPrice, off }) {
  return (
    <div className="product flex">
      <img src={image} alt="" className="productImage" />
      <h5 className="productName">{name}</h5>
      <h4 className="productPrice">BDT. {price}</h4>
      <div className="flex">
        <p className="oldPrice">BDT. {oldPrice}</p>
        <p className="productOff">{off}% off</p>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="products flex">
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={shirt}
        name="Multicolor Cotton long"
        price="7,850"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={headPhone}
        name="GAP Stylish long sleeve shirt"
        price="5,550"
        oldPrice="5,580"
        off="34"
      />
      <Product
        image={bag}
        name="Firstly Comfortable Shoes
for Men"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
      <Product
        image={watch}
        name="Microsoft Game controller
for Xbox"
        price="5,580"
        oldPrice="7,850"
        off="34"
      />
    </div>
  );
}

export default Products;
