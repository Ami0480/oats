import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Recipes() {
  return (
    <div className="container">
      <Header />
      <h1>Oat Recipes</h1>
      <div className="mb-5">
        <Link to="/granola">
          <h2 className="mb-2">Granola with Berries</h2>
          <img src="images/granola.jpg" alt="granola" />
          <p className="underline underline-offset-4 decoration-1">
            Jump to recipe
          </p>
        </Link>
      </div>
      <div className="mb-5">
        <Link to="/pancake">
          <h2 className="mb-2">Oat Pancake</h2>
          <img src="images/pancake.jpg" alt="pancake" />
          <p className="underline underline-offset-4 decoration-1">
            Jump to recipe
          </p>
        </Link>
      </div>
      <div className="mb-5">
        <Link to="/blissbites">
          <h2 className="mb-2">No-Bake Bliss Bites</h2>
          <img src="images/bliss-balls.jpg" alt="bliss-balls" />
          <p className="underline underline-offset-4 decoration-1">
            Jump to recipe
          </p>
        </Link>
      </div>
    </div>
  );
}
