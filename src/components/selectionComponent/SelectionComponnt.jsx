import React from "react";
import MainTriangle from "../../svg/MainTriangle";
import SelectorComponent from "../SelectorComponent/SelectorComponent";
import "../../index.css";
import Rock from "../../svg/Rock";
import Paper from "../../svg/Paper";
import Scissors from "../../svg/Scissors";
import { Link } from "react-router-dom";
import ResultComponent from "../ResultComponent/ResultComponent";
import SmallTriangle from "../../svg/SmallTriangle";
import SmallPaper from "../../svg/SmallPaper";
import SmallRock from "../../svg/SmallRock";
import SmallScissors from "../../svg/SmallScissors";
import None from "../../svg/None";

function SelectionComponnt({ setMyChoice }) {
  const setChoiceHandler = (e) => setMyChoice(e.target.dataset.id);

  return (
    <div className="text-white">
      <div className="flex justify-center">
        <div className="absolute width-select top-0 flex justify-between w-102">
          <Link className="rounded-full" to="/result">
            <SelectorComponent
              shadow={`shadow-darkBlue`}
              color={`bg-firstRad`}
              image={Paper}
              imageTwo={SmallPaper}
              imageThree={None}
              id={`Paper`}
              onClick={setChoiceHandler}
              circle={`selector-circle`}
              innerCircle={`selector-inner_circle`}
              innerShadow={"shadow-innerOne"}
              outerShadow={`shadow-innerTwo`}
              hover={`hover:scale-105 overflow-hidden`}
            />
          </Link>
          <Link className="rounded-full" to="/result">
            <SelectorComponent
              shadow={`shadow-darkYellow`}
              color={`bg-secondRad`}
              image={Scissors}
              imageTwo={SmallScissors}
              imageThree={None}
              id={`Scissors`}
              onClick={setChoiceHandler}
              circle={`selector-circle`}
              innerCircle={`selector-inner_circle`}
              innerShadow={"shadow-innerOne"}
              outerShadow={`shadow-innerTwo`}
              hover={`hover:scale-105 overflow-hidden`}
            />
          </Link>
        </div>
        <Link
          className="rounded-full top-56 mobile:top-40 absolute"
          to="/result"
        >
          <SelectorComponent
            shadow={`shadow-darkRed`}
            color={`bg-thirdRad`}
            image={Rock}
            imageTwo={SmallRock}
            imageThree={None}
            location={`top-56`}
            id={`Rock`}
            onClick={setChoiceHandler}
            circle={`selector-circle`}
            innerCircle={`selector-inner_circle`}
            innerShadow={"shadow-innerOne"}
            outerShadow={`shadow-innerTwo`}
            hover={`hover:scale-105 overflow-hidden`}
          />
        </Link>
        <MainTriangle />
        <SmallTriangle />
      </div>
    </div>
  );
}

export default SelectionComponnt;
