import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Loveoats() {
  return (
    <div className="container">
      <Header />
      <h1>Why Oats?</h1>
      <h2>Healthy and nutritious</h2>
      <p className="mt-4 mb-6">
        High in fiber, keeps you full and helps lower cholesterol. Good source
        of protein, vitamins, and minerals. Supports heart health, digestion,
        and stable energy levels.
      </p>
      <h2>Versatile in food</h2>
      <p className="mt-4 mb-6">
        Breakfast: oatmeal, porridge, overnight oats. Baking: cookies, muffins,
        granola bars, bread. Smoothies or savory dishes: added for texture and
        nutrition.
      </p>
      <h2>Even used outside food</h2>
      <p className="mt-4 mb-6">
        Skincare: oatmeal baths, face masks — soothes irritated skin.
      </p>
      <div className="my-8 text-center">
        <Link to="/recipes" className="button">
          Recipes
        </Link>
      </div>
    </div>
  );
}
