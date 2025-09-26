import React from "react";
import Header from "./Header";
import oatsImage from "/images/oats.jpg";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="container">
      <Header />
      <h1>We love Oats</h1>
      <div className="md:flex basis-auto">
        <div className="md:flex flex-1 justify-center items-center mt-8">
          <img
            className="w-48 h-48 mx-auto rounded-full shadow-lg md:w-60 md:h-60"
            src={oatsImage}
            alt="oats"
          />
        </div>
        <p className="mt-8 md:flex flex-1">
          Many people enjoy them as oatmeal for breakfast, but they are also
          used in cookies, granola, smoothies, and even bread. Oats are very
          healthy because they are rich in fiber, protein, vitamins, and
          minerals. The special fiber in oats, called beta-glucan, is known to
          help lower cholesterol and keep you feeling full for longer. Besides
          being a nutritious food, oats are sometimes used in skincare products,
          such as oatmeal baths, because they can soothe the skin.
        </p>
      </div>

      <div className="text-center mt-8 md:mt-24">
        <Link to="/loveoats" className="button">
          Love Oats?
        </Link>
      </div>
    </div>
  );
}
