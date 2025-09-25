import React from "react";
import { Link } from "react-router-dom";

export default function Loveoats() {
  return (
    <div className="container">
      <h1>Why Oats?</h1>
      <h2 className="text-left">Healthy and nutritious</h2>
      <p className="font-light text-left">
        High in fiber, keeps you full and helps lower cholesterol. Good source
        of protein, vitamins, and minerals. Supports heart health, digestion,
        and stable energy levels.
      </p>
      <h2 className="text-left">Versatile in food</h2>
      <p className="font-light text-left">
        Breakfast: oatmeal, porridge, overnight oats. Baking: cookies, muffins,
        granola bars, bread. Smoothies or savory dishes: added for texture and
        nutrition.
      </p>
      <h2 className="text-left">Even used outside food</h2>
      <p className="font-light text-left">
        Skincare: oatmeal baths, face masks — soothes irritated skin.
      </p>
      <Link
        to="/loveoats"
        className="inline-flex items-center justify-center w-28 h-10 bg-[#623412] rounded-lg text-white hover:opacity-90 transition ease-in-out duration-300 "
      >
        Oats Recipes
      </Link>
    </div>
  );
}
