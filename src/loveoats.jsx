import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Loveoats() {
  return (
    <div className="container">
      <Header />
      <h1>Why Oats?</h1>
      <div className="md:flex basis-auto">
        <h2 className="md:flex flex-1 mt-4 mr-4">Healthy and nutritious</h2>
        <p className="mt-4 mb-6 md:flex flex-2">
          High in fiber, keeps you full and helps lower cholesterol. Good source
          of protein, vitamins, and minerals. Supports heart health, digestion,
          and stable energy levels.
        </p>
      </div>
      <div className="md:flex basis-auto">
        <h2 className="md:flex flex-1 mt-4 mr-4">Versatile in food</h2>
        <p className="mt-4 mb-6 md:flex flex-2">
          Breakfast: oatmeal, porridge, overnight oats. Baking: cookies,
          muffins, granola bars, bread. Smoothies or savory dishes: added for
          texture and nutrition.
        </p>
      </div>
      <div className="md:flex basis-auto">
        <h2 className="md:flex flex-1 mt-4 mr-4">Even used outside food</h2>
        <p className="mt-4 mb-6 md:flex flex-2">
          Skincare: oatmeal baths, face masks — soothes irritated skin.
        </p>
      </div>

      <div className="my-8 text-center md:mt-24">
        <Link to="/recipes" className="button">
          Recipes
        </Link>
      </div>
    </div>
  );
}
