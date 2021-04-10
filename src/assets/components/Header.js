import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/header.scss";
import "../styles/components/boxModel.scss";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import searchIcon from "../media/social icons/loupe.png";

function Header() {
  return (
    <header>
      <nav className="nav first__nav">
        <Link className="items nav__items active">Homepage</Link>
        <Link className="items nav__items second">All Product</Link>
      </nav>
      <nav className="nav flex secondery_nav">
        <div className="showing_products">
          Showing
          <span>{/* {from}*/}1</span> - {/* {to} */}40 of{" "}
          {/* {total products}*/}
          80,068 products
        </div>
        <div className="filter_by flex">
          <div className="resp_filter flex">
            <div
              className="item"
              onClick={() => {
                document.querySelector("#filters").classList.toggle("fly");
              }}
            >
              Filter
            </div>
          </div>
          <div className="filters flex" id="filters">
            <div className="rexp">
              <div className="refined_by flex">
                <span>Refine by | </span>&nbsp;&nbsp;&nbsp;Price{" "}
                <ArrowDropDownIcon />
              </div>
              <div className="short_by flex">
                <span>Sort by | </span>&nbsp;&nbsp;&nbsp;Best Seller{" "}
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
          <div className="search_bar flex">
            <div style={{ flexBasis: 1 }}></div>
            <div className="search flex">
              <input type="text" placeholder="Search" id="searchInput" />
              <div className="icon">
                <img
                  src={searchIcon}
                  alt=""
                  onClick={() => {
                    document
                      .querySelector("#searchInput")
                      .classList.toggle("fly");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
