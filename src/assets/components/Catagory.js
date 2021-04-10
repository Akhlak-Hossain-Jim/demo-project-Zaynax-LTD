import React from "react";

import "../styles/components/catagory.scss";
import "../styles/components/boxModel.scss";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import StarIcon from "@material-ui/icons/Star";

function FilterName({ name }) {
  return (
    <div className="filter_name flex">
      <h4>{name}</h4>
      <ExpandMoreIcon />
    </div>
  );
}

const ActiveCategoryBox = ({ name }) => {
  return (
    <div className="catagory_active_box flex">
      <span>{name}</span> <CancelOutlinedIcon className="icon" />
    </div>
  );
};

function Catagory() {
  return (
    <div>
      <div
        className="resp"
        id="catagory"
        onClick={() => {
          document.querySelector("#catagoryList").classList.toggle("fly");
        }}
      >
        Catagory
      </div>
      <div id="catagoryList" className="catagories grid_parent">
        <div className="filters_list b_border_das grid_parent">
          <FilterName name="Filters" />
          <ActiveCategoryBox name="Out of Stock" />
          <ActiveCategoryBox name="Size: XL" />
          <div className="catagory_active_box green flex">
            <span>Clear all</span>
          </div>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Catagory" />
          <p>Men's Clothing</p>
          <strong>&nbsp;&nbsp;&nbsp;&nbsp;Casual Wear</strong>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shirts</p>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Brand" />
          <form className="grid_parent" action="" method="get">
            <div className="search_option flex">
              <input type="text" placeholder="Search by Brand" />
              <SearchOutlinedIcon />
            </div>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Aeropostale
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Antony Morato
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Arrow
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Arrow Blue Jeans
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Arrow Sport
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Mufti
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Raymond
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}United Colors of Benetton
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>
          </form>
          <p className="t_c_g">235 more</p>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Country" />
          <form className="grid_parent" action="" method="get">
            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}USA
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Germany
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Italy
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}UK
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Bangladesh
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>
          </form>
          <p className="t_c_g">2 more</p>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Size" />
          <div className="flex">
            <div className="sizes">XS</div>
            <div className="sizes">S</div>
            <div className="sizes">M</div>
            <div className="sizes">L</div>
            <div className="sizes">XL</div>
            <div className="sizes">XXL</div>
          </div>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Color" />
          <div className="flex">
            <div className="colorsInp bla"></div>
            <div className="colorsInp brown"></div>
            <div className="colorsInp wheat"></div>
            <div className="colorsInp ass"></div>
            <div className="colorsInp white"></div>
            <div className="colorsInp blue"></div>
          </div>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Discount" />
          <from className="grid_parent">
            <label className="t_c_da">
              <input type="radio" name="" id="" />
              {"  "}10%-30%
            </label>
            <label className="t_c_da">
              <input type="radio" name="" id="" />
              {"  "}30%-50%
            </label>
            <label className="t_c_da">
              <input type="radio" name="" id="" />
              {"  "}50%-70%
            </label>
          </from>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Price" />
          <form action="" className="flex">
            <input className="pricerange" type="text" placeholder="Min" />-
            <input className="pricerange" type="text" placeholder="Max" />
          </form>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Rating" />
          <from className="grid_parent">
            <label className="ratings t_c_dg flex">
              <input type="radio" name="" id="" />
              {"  "}
              <span className="flex">
                <StarIcon className="rotated_ico" />
                <StarIcon className="rotated_ico" />
                <StarIcon className="rotated_ico" />
                <StarIcon className="rotated_ico" />
                <StarIcon className="rotated_ico" />
              </span>
            </label>
            <label className="ratings t_c_dg flex">
              <input type="radio" name="" id="" />
              {"  "}
              <span className="flex">
                <StarIcon className="rotated_ico" />
                <StarIcon className="rotated_ico" />
                <StarIcon className="rotated_ico" />
                <StarIcon className="rotated_ico" />
              </span>
            </label>
            <label className="ratings t_c_dg flex">
              <input type="radio" name="" id="" />
              {"  "}
              <span className="flex">
                <StarIcon className="rotated_ico" />
                <StarIcon className="rotated_ico" />
                <StarIcon className="rotated_ico" />
              </span>
            </label>
            <label className="ratings t_c_dg flex">
              <input type="radio" name="" id="" />
              {"  "}
              <span className="flex">
                <StarIcon className="rotated_ico" />
                <StarIcon className="rotated_ico" />
              </span>
            </label>
            <label className="ratings t_c_dg flex">
              <input type="radio" name="" id="" />
              {"  "}
              <span className="flex">
                <StarIcon className="rotated_ico" />
              </span>
            </label>
          </from>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Fabric" />
          <form className="grid_parent" action="" method="get">
            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Cotton Blend
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Cotton Linen Blend
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Cotton Silk
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Linen Blend
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Nylon Blend
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Poly Silk
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Polycotton
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Pure Cotton
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Rayon
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>
          </form>
          <p className="t_c_g">5 more</p>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Pattern" />
          <form className="grid_parent" action="" method="get">
            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Checkered
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Chevron/Zig Zag
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Color Block
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Floral Print
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Houndstooth
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Polka Print
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Printed
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Self Design
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}Solid
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>

            <label>
              <input type="radio" value="" id="" name="" />
              {"  "}
            </label>
          </form>
          <p className="t_c_g">26 more</p>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Service" />
          <from className="grid_parent">
            <label className="t_c_da">
              <input type="radio" name="" id="" />
              {"  "}Cash on Delivery
            </label>
            <label className="t_c_da">
              <input type="radio" name="" id="" />
              {"  "}Free Shipping
            </label>
          </from>
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Clothing Style" />
        </div>
        <div className="filters_list b_border_das">
          <FilterName name="Men's Trend" />
        </div>
        <div className="filters_list">
          <FilterName name="Fit Type" />
        </div>
      </div>
    </div>
  );
}

export default Catagory;
