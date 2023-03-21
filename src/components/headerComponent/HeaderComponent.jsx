import React from "react";

function HeaderComponent({ score }) {
  return (
    <div className="flex header-height items-center pr-8 justify-between mt-12 h-44 w-full border-4 align-center rounded-l-2xl rounded-r-2xl border-solid border-header text-white">
      <div className="w-1/4 ml-headerPad">
        <h2 className="m-0 text-rps leading-rpsh header-font font-barlow font-bold">
          ROCK PAPER SCISSORS
        </h2>
      </div>
      <div className="flex justify-center header-score bg-white h-28 w-36 rounded-l-lg rounded-r-lg shadow-sm">
        <div className="inline-block">
          <h4 className="m-0 text-scoreText font-barlow tracking-widest text-xl">
            score
          </h4>
          <h1 className="m-0 text-darkText block text-6xl text-center font-barlow font-bold">
            {score}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
