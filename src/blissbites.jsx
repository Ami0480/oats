import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Blissbites() {
  return (
    <div className="container">
      <Header />
      <h1>No-Bake Bliss Bites</h1>
      <h2 className="mb-3">Ingredients</h2>
      <ul>
        <li className="mb-2">1 cup peanut butter </li>
        <li className="mb-2">1/4 cup honey</li>
        <li className="mb-2">1/2 cup rolled oats</li>
        <li className="mb-2">1/4 cup desiccated coconut</li>
        <li className="mb-2">1/2 cup protein powder</li>
        <li className="mb-2">1/2 cup desiccated coconut</li>
      </ul>
      <h2 className="mt-5 mb-3">Instructions</h2>
      <p className="mb-3">
        1.Place the peanut butter and honey in a large bowl and use a spoon to
        mix them together a little.
      </p>
      <p className="mb-3">
        2.Add the oats, desiccated coconut and protein powder to the bowl.
      </p>
      <p className="mb-3">
        3.Combine all of the ingredients together. Once the mixture has largely
        come together, you can test it by rolling a bit into a ball.
      </p>
      <p className="mb-3">
        4.Roll heaped tablespoons of the dough into balls, and then roll in the
        extra desiccated coconut to coat.
      </p>
      <p className="mb-3">
        5.Place the balls in the fridge to firm up a little. Leave them stored
        in the fridge in an airtight container.
      </p>
      <div className="mt-8">
        <Link to="/recipes" className="button">
          Back to Recipes
        </Link>
      </div>
    </div>
  );
}
