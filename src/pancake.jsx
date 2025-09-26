import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Pancake() {
  return (
    <div className="container">
      <Header />
      <h1>Oat Pancake</h1>
      <h2 className="mb-3">Ingredients</h2>
      <ul>
        <li className="mb-2">1 cup old-fashioned rolled oats</li>
        <li className="mb-2">1 cup milk, regular or non-dairy</li>
        <li className="mb-2">2 large eggs</li>
        <li className="mb-2">1 tablespoon unsalted butter</li>
        <li className="mb-2">1 tablespoon sugar</li>
        <li className="mb-2">2/3 cup all-purpose flour</li>
        <li className="mb-2">2 teaspoons baking powder</li>
        <li className="mb-2">1/4 teaspoon kosher salt</li>
      </ul>
      <h2 className="mt-5 mb-3">Instructions</h2>
      <p className="mb-3">
        1.Whisk rolled oats and milk together in a large bowl. Let stand for 10
        minutes for the oats to soften. Meanwhile, melt butter and set it aside
        to cool.
      </p>
      <p className="mb-3">
        2.Add the butter, eggs, and sugar to the oats, and to combine. Add
        flour, baking powder, salt, and cinnamon. Let stand for 5 minutes more.
      </p>
      <p className="mb-3">
        3.Add butter to the pan and swirl to coat. Cook till the bottoms are
        golden-brown. Flip the pancakes and cook until the other side is
        golden-brown.
      </p>
      <div className="mt-8 md:mt-20">
        <Link to="/recipes" className="button">
          Back to Recipes
        </Link>
      </div>
    </div>
  );
}
