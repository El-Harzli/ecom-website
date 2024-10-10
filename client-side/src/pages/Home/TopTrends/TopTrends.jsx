import React, { useState, useRef, useEffect } from "react";
import "./TopTrends.css";
import { my_products } from "@assets/all_product";

import HomeSectionWithSwiper from '@UI/HomeSectionWithSwiper/HomeSectionWithSwiper/HomeSectionWithSwiper'


function TopTrends() {
  const [topTrendsActiveCategory, setTopTrendsActiveCategory] = useState("Polo");

  const limitedProducts = my_products
    .filter((product) => product.sub_category === topTrendsActiveCategory)
    .slice(0, 5);

  const topTrendsCategories = ["Polo", "T-shirt", "Shirt", "Jeans", "Shoes"];

  return (
    <section className="top-trends">
      <div className="top-trends-header">Top Trendings</div>
      <nav className="top-trends-category">
        <ul className="top-trends-category-items">
          {topTrendsCategories.map((category, index) => (
            <li
              key={index}
              onClick={() => setTopTrendsActiveCategory(category)}
              className={`top-trends-category-item ${
                topTrendsActiveCategory === category ? "active" : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <HomeSectionWithSwiper
            title={null}
            data={limitedProducts}
            destination={"/Top-Trends"}
        />

    </section>
  );
}

export default TopTrends;
