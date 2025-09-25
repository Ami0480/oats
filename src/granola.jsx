import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Granola() {
  return (
    <div className="container">
      <Header />
      <h1>Granola with berries</h1>
      <h2 className="mb-3">Ingredients</h2>
      <ul>
        <li className="mb-2">1½ cups old fashioned oats</li>
        <li className="mb-2">½ tsp Kosher or fine sea salt</li>
        <li className="mb-2">¼ cup sliced almonds</li>
        <li className="mb-2">1 teaspoon vanilla extract</li>
        <li className="mb-2">¼ cup extra virgin olive oil</li>
        <li className="mb-2">¼ cup maple syrup</li>
        <li className="mb-2">¼ cup raspberry or strawberry jam</li>
        <li className="mb-2">1 cup freeze-dried berries</li>
      </ul>
      <h2 className="mt-5 mb-3">Instructions</h2>
      <p className="mb-3">
        1.Preheat the oven to 140°C. Line baking paper in the heatproof loaf.
      </p>
      <p className="mb-3">
        2.Mix all ingredients except the freeze-dried berries in a medium-sized
        bowl. Stir well to coat the ingredients.
      </p>
      <p className="mb-3">
        3.Pour the mixture onto the baking sheet and spread it out in a single
        layer. You want the mixture to touch so that it clumps together.
      </p>
      <p className="mb-3">
        4.Bake for 35-45 minutes, or until golden brown. Remove from the oven
        and allow the granola to cool in the pan. When it is cool to touch,
        break the sheet of granola with your hands. Add the freeze-dried fruit,
        and give it a quick toss.
      </p>
      <div className="mt-8">
        <Link to="/recipes" className="button">
          Back to Recipes
        </Link>
      </div>
    </div>
  );
}
