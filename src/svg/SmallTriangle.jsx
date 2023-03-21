import React from "react";

function SmallTriangle() {
  return (
    <div className="hidden mobile:flex">
      <svg
        width="313"
        height="378"
        viewBox="-94 93 500 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="#000"
          strokeWidth="15"
          fill="none"
          opacity=".2"
          d="M156.5 262 300 8H13z"
        />
      </svg>
    </div>
  );
}

export default SmallTriangle;
