import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Porridge() {
  return (
    <div className="container">
      <Header />
      <h1>Savoury Porridge</h1>
      <h2 className="mb-3">Ingredients</h2>
      <ul>
        <li className="mb-2">1 cup of Oats</li>
        <li className="mb-2">1 teaspoon of Olive oil</li>
        <li className="mb-2">1 clove of Garlic</li>
        <li className="mb-2">Your favourite Herbs and spices</li>
      </ul>
      <h2 className="mt-5 mb-3">Instructions</h2>
      <p className="mb-3">
        1.Heat the pot and add olive oil and cook the garlic until fregrance.
      </p>
      <p className="mb-3">
        2.Add the spices if using, then stir in the oats and toast for a minute
        or so, stirring.
      </p>
      <p className="mb-3">
        3.Add the spices if using, then stir in the oats and toast for a minute
        or so, stirring. Cooking, stirring frequently, until the oats have
        absorbed the water, about five minutes.
      </p>
      <p className="mb-3">4.Topping your favourite veggies, eggs, seeds.</p>
      <div className="mt-8 md:mt-20">
        <Link to="/recipes" className="button">
          Back to Recipes
        </Link>
      </div>
    </div>
  );
}
