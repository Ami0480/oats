import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <p className="w-10 h-10">
        <Link to="/">
          <img src="images/oats.png" />
        </Link>
      </p>
    </div>
  );
}
