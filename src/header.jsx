import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <p className="w-10 h-10 md:w-16 md:w-16">
        <Link to="/">
          <img src="images/oats.png" alt="Oats Logo" />
        </Link>
      </p>
    </div>
  );
}
