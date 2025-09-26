import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Recipes() {
  return (
    <div className="container">
      <Header />
      <h1>Oat Recipes</h1>
      <div className="flex flex-wrap place-content-around">
        <div className="mb-5 md:mt-8">
          <Link to="/granola">
            <h2 className="mb-2">Granola with Berries</h2>
            <p className="w-md">
              <img src="images/granola.jpg" alt="granola" />
            </p>

            <p className="underline underline-offset-4 decoration-1">
              Jump to recipe
            </p>
          </Link>
        </div>
        <div className="mb-5 md:mt-8">
          <Link to="/pancake">
            <h2 className="mb-2">Oat Pancake</h2>
            <p className="w-md">
              <img src="images/pancake.jpg" alt="pancake" />
            </p>

            <p className="underline underline-offset-4 decoration-1">
              Jump to recipe
            </p>
          </Link>
        </div>

        <div className="mb-5 md:mt-8">
          <Link to="/porridge">
            <h2 className="mb-2">Savoury Porridge</h2>
            <p className="w-md">
              <img src="images/porridge.jpg" alt="porridge" />
            </p>

            <p className="underline underline-offset-4 decoration-1">
              Jump to recipe
            </p>
          </Link>
        </div>

        <div className="mb-5 md:mt-8">
          <Link to="/blissbites">
            <h2 className="mb-2">No-Bake Bliss Bites</h2>
            <p className="w-md">
              <img src="images/blissbites.jpg" alt="bliss bites" />
            </p>

            <p className="underline underline-offset-4 decoration-1">
              Jump to recipe
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
