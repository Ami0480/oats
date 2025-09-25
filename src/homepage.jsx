import React from "react";
import oatsImage from "/images/oats.jpg";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="container">
      <h1 className="text-[40px]">We love Oats</h1>
      <img
        className="w-48 h-48 mx-auto rounded-full shadow-lg"
        src={oatsImage}
        alt="oats"
      />
      <p className="font-light text-left">
        Many people enjoy them as oatmeal for breakfast, but they are also used
        in cookies, granola, smoothies, and even bread. <br />
        Oats are very healthy because they are rich in fiber, protein, vitamins,
        and minerals. The special fiber in oats, called beta-glucan, is known to
        help lower cholesterol and keep you feeling full for longer. Besides
        being a nutritious food, oats are sometimes used in skincare products,
        such as oatmeal baths, because they can soothe the skin.
      </p>
      <Link
        to="/loveoats"
        className="inline-flex items-center justify-center w-28 h-10 bg-[#623412] rounded-lg text-white hover:opacity-90 transition ease-in-out duration-300 "
      >
        Love Oats?
      </Link>
    </div>
  );
}
