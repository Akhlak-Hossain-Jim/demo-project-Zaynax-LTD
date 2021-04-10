import React from "react";

import "../styles/components/blog.scss";
import "../styles/components/boxModel.scss";

// blog image importation
import blogImg1 from "../media/posters/26801830821918.png";
import blogImg2 from "../media/posters/26824312324126.png";
import blogImg3 from "../media/posters/Hair-Care.png";
import blogImg4 from "../media/posters/Image 117.png";

function Blog() {
  return (
    <div className="blogSection grid_parent">
      <h3>LATEST BLOGS</h3>
      <p>
        This is a place devoted to giving you deeper insight into the news,
        <br />
        trends, people and technology behind Bing.
      </p>
      <div className="flex">
        <img src={blogImg1} alt="" />
        <img src={blogImg2} alt="" />
        <img src={blogImg3} alt="" />
        <img src={blogImg4} alt="" />
      </div>
      <div className="flex">
        <span className="indicators active"></span>
        <span className="indicators"></span>
        <span className="indicators"></span>
        <span className="indicators"></span>
        <span className="indicators"></span>
      </div>
    </div>
  );
}

export default Blog;
