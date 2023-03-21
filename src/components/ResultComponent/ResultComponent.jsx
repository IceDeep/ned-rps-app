import React from "react";
import { useState, useEffect } from "react";
import SelectorComponent from "../SelectorComponent/SelectorComponent";
import BigPaper from "../../svg/BigPaper";
import BigRock from "../../svg/BigRock";
import BigScissors from "../../svg/BigScissors";
import { Link } from "react-router-dom";
import MidPaper from "../../svg/MidPaper";
import MidRock from "../../svg/MidRock";
import MidScissors from "../../svg/MidScissors";
import SmallPaper from "../../svg/SmallPaper";
import SmallRock from "../../svg/SmallRock";
import SmallScissors from "../../svg/SmallScissors";

function ResultComponent({
  myChoice,
  setScore,
  score,
  scissors,
  rock,
  paper,
  positionTop,
  positionLeft,
  positionLeftTwo
}) {
  const [computerChoice, setComputerChoice] = useState("");
  // const [playerWin, setPlayerWin] = useState(false);

  const win = "YOU WIN";
  const draw = "A TIE";
  const loss = "YOU LOSE";

  const setCompChoice = () => {
    const choices = ["Paper", "Scissors", "Rock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);
  };

  const setPlayerScore = () => {
    if (computerChoice == scissors && myChoice == rock) {
      setScore(score + 1);
    } else if (computerChoice == paper && myChoice == scissors) {
      setScore(score + 1);
    } else if (computerChoice == rock && myChoice == paper) {
      setScore(score + 1);
    }
  };

  useEffect(setCompChoice, []);
  useEffect(setPlayerScore, [myChoice, computerChoice]);

  if (myChoice == scissors && computerChoice == scissors) {
    // setScore(score);
    return (
      <div className="text-white flex mob:w-22 bigMob:w-101 tab:w-105 tab:justify-between justify-center tab:top-0 absolute">
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mb-14 mob:text-xl font-barlow tracking-widest text-2xl">
              YOU PICKED
            </h4>
          </div>

          <SelectorComponent
            shadow={`shadow-darkYellow`}
            color={`bg-secondRad`}
            image={BigScissors}
            imageTwo={MidScissors}
            imageThree={SmallScissors}
            id={`Scissors`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
        <div className="self-center play-width tab:absolute mob:top-22 tab:top-101 bigMob:w-full tab:w-105 w-96">
          <h3 className="block text-center you-lose text-6xl font-barlow">
            {draw}
          </h3>
          <div className="flex justify-center">
            <div className="bg-white w-56 border-black mt-7 border-solid tab:mt-8 rounded-xl">
              <Link to="/">
                <h3 className="text-playLoss text-shadow text-center tracking-widest font-barlow p-3">
                  PLAY AGAIN
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mob:text-xl mb-14 font-barlow tracking-widest text-2xl">
              HOUSE PICKS
            </h4>
          </div>
          <SelectorComponent
            shadow={`shadow-darkYellow`}
            color={`bg-secondRad`}
            image={BigScissors}
            imageTwo={MidScissors}
            imageThree={SmallScissors}
            id={`Scissors`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
      </div>
    );
  } else if (myChoice == scissors && computerChoice == "Paper") {
    return (
      <div className="flex justify-center absolute text-white mob:w-22 bigMob:w-101 tab:w-105 tab:justify-between tab:top-0 ">
        <div
          className={`self-start ${positionTop} ${positionLeft} z-30 flex justify-center items-center absolute div-circle circle1 rounded-full`}
        >
          <div className="-z-20 flex items-center justify-center div circle circle2 rounded-full">
            <div className="-z-10 div-circle circle3 rounded-full"></div>
          </div>
        </div>
        <div className="z-40 selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mb-14 mob:text-xl font-barlow tracking-widest text-2xl">
              YOU PICKED
            </h4>
          </div>

          <SelectorComponent
            shadow={`shadow-darkYellow`}
            color={`bg-secondRad`}
            image={BigScissors}
            imageTwo={MidScissors}
            imageThree={SmallScissors}
            id={`Scissors`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
        <div className="self-center z-40 play-width tab:absolute mob:top-22 tab:top-101 bigMob:w-full tab:w-105 w-96">
          <h3 className="block text-center you-lose text-6xl font-barlow">
            {win}
          </h3>
          <div className="flex z-50 justify-center">
            <div className="bg-white w-56 border-black mt-7 border-solid tab:mt-8 rounded-xl">
              <Link to="/">
                <h3 className="text-playWin text-shadow text-center tracking-widest font-barlow p-3">
                  PLAY AGAIN
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mob:text-xl mb-14 font-barlow tracking-widest text-2xl">
              HOUSE PICKS
            </h4>
          </div>
          <SelectorComponent
            shadow={`shadow-darkBlue`}
            color={`bg-firstRad`}
            image={BigPaper}
            imageTwo={MidPaper}
            imageThree={SmallPaper}
            id={`Paper`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
      </div>
    );
  } else if (myChoice == scissors && computerChoice == "Rock") {
    return (
      <div className="flex justify-center absolute text-white mob:w-22 bigMob:w-101 tab:w-105 tab:justify-between tab:top-0 ">
        <div
          className={`self-start ${positionTop} ${positionLeftTwo} z-30 flex justify-center items-center absolute div-circle circle1 rounded-full`}
        >
          <div className="-z-20 flex items-center justify-center div circle circle2 rounded-full">
            <div className="-z-10 div-circle circle3 rounded-full"></div>
          </div>
        </div>
        <div className="z-50 selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mb-14 mob:text-xl font-barlow tracking-widest text-2xl">
              YOU PICKED
            </h4>
          </div>

          <SelectorComponent
            shadow={`shadow-darkYellow`}
            color={`bg-secondRad`}
            image={BigScissors}
            imageTwo={MidScissors}
            imageThree={SmallScissors}
            id={`Scissors`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
        <div className="self-center z-40 play-width tab:absolute mob:top-22 tab:top-101 bigMob:w-full tab:w-105 w-96">
          <h3 className="block text-center you-lose text-6xl font-barlow">
            {loss}
          </h3>
          <div className="flex z-50 justify-center">
            <div className="bg-white w-56 border-black mt-7 border-solid tab:mt-8 rounded-xl">
              <Link to="/">
                <h3 className="text-playLoss text-shadow text-center tracking-widest font-barlow p-3">
                  PLAY AGAIN
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mob:text-xl mb-14 font-barlow tracking-widest text-2xl">
              HOUSE PICKS
            </h4>
          </div>
          <SelectorComponent
            shadow={`shadow-darkRed`}
            color={`bg-thirdRad`}
            image={BigRock}
            imageTwo={MidRock}
            imageThree={SmallRock}
            id={`Rock`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
      </div>
    );
  }

  if (myChoice == paper && computerChoice == "Paper") {
    return (
      <div className="text-white flex mob:w-22 bigMob:w-101 tab:w-105 tab:justify-between justify-center tab:top-0 absolute">
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mb-14 mob:text-xl font-barlow tracking-widest text-2xl">
              YOU PICKED
            </h4>
          </div>

          <SelectorComponent
            shadow={`shadow-darkBlue`}
            color={`bg-firstRad`}
            image={BigPaper}
            imageTwo={MidPaper}
            imageThree={SmallPaper}
            id={`Paper`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
        <div className="self-center play-width tab:absolute mob:top-22 tab:top-101 bigMob:w-full tab:w-105 w-96">
          <h3 className="block text-center you-lose text-6xl font-barlow">
            {draw}
          </h3>
          <div className="flex justify-center">
            <div className="bg-white w-56 border-black mt-7 border-solid tab:mt-8 rounded-xl">
              <Link to="/">
                <h3 className="text-playLoss text-shadow text-center tracking-widest font-barlow p-3">
                  PLAY AGAIN
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mob:text-xl mb-14 font-barlow tracking-widest text-2xl">
              HOUSE PICKS
            </h4>
          </div>
          <SelectorComponent
            shadow={`shadow-darkBlue`}
            color={`bg-firstRad`}
            image={BigPaper}
            imageTwo={MidPaper}
            imageThree={SmallPaper}
            id={`Paper`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
      </div>
    );
  } else if (myChoice == paper && computerChoice == "Scissors") {
    return (
      <div className="flex justify-center absolute text-white mob:w-22 bigMob:w-101 tab:w-105 tab:justify-between tab:top-0 ">
        <div
          className={`self-start ${positionTop} ${positionLeftTwo} z-30 flex justify-center items-center absolute div-circle circle1 rounded-full`}
        >
          <div className="-z-20 flex items-center justify-center div circle circle2 rounded-full">
            <div className="-z-10 div-circle circle3 rounded-full"></div>
          </div>
        </div>
        <div className="z-50 selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mb-14 mob:text-xl font-barlow tracking-widest text-2xl">
              YOU PICKED
            </h4>
          </div>

          <SelectorComponent
            shadow={`shadow-darkBlue`}
            color={`bg-firstRad`}
            image={BigPaper}
            imageTwo={MidPaper}
            imageThree={SmallPaper}
            id={`Paper`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
        <div className="self-center z-40 play-width tab:absolute mob:top-22 tab:top-101 bigMob:w-full tab:w-105 w-96">
          <h3 className="block text-center you-lose text-6xl font-barlow">
            {loss}
          </h3>
          <div className="flex z-50 justify-center">
            <div className="bg-white w-56 border-black mt-7 border-solid tab:mt-8 rounded-xl">
              <Link to="/">
                <h3 className="text-playLoss text-shadow text-center tracking-widest font-barlow p-3">
                  PLAY AGAIN
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mob:text-xl mb-14 font-barlow tracking-widest text-2xl">
              HOUSE PICKS
            </h4>
          </div>
          <SelectorComponent
            shadow={`shadow-darkYellow`}
            color={`bg-secondRad`}
            image={BigScissors}
            imageTwo={MidScissors}
            imageThree={SmallScissors}
            id={`Scissors`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
      </div>
    );
  }

  if (myChoice == paper && computerChoice == rock) {
    return (
      <div className="flex justify-center absolute text-white mob:w-22 bigMob:w-101 tab:w-105 tab:justify-between tab:top-0 ">
        <div
          className={`self-start ${positionTop} ${positionLeft} z-30 flex justify-center items-center absolute div-circle circle1 rounded-full`}
        >
          <div className="-z-20 flex items-center justify-center div circle circle2 rounded-full">
            <div className="-z-10 div-circle circle3 rounded-full"></div>
          </div>
        </div>
        <div className="z-50 selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mb-14 mob:text-xl font-barlow tracking-widest text-2xl">
              YOU PICKED
            </h4>
          </div>

          <SelectorComponent
            shadow={`shadow-darkBlue`}
            color={`bg-firstRad`}
            image={BigPaper}
            imageTwo={MidPaper}
            imageThree={SmallPaper}
            id={`Paper`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
        <div className="self-center z-40 play-width tab:absolute mob:top-22 tab:top-101 bigMob:w-full tab:w-105 w-96">
          <h3 className="block text-center you-lose text-6xl font-barlow">
            {win}
          </h3>
          <div className="flex z-50 justify-center">
            <div className="bg-white w-56 border-black mt-7 border-solid tab:mt-8 rounded-xl">
              <Link to="/">
                <h3 className="text-playWin text-shadow text-center tracking-widest font-barlow p-3">
                  PLAY AGAIN
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mob:text-xl mb-14 font-barlow tracking-widest text-2xl">
              HOUSE PICKS
            </h4>
          </div>
          <SelectorComponent
            shadow={`shadow-darkRed`}
            color={`bg-thirdRad`}
            image={BigRock}
            imageTwo={MidRock}
            imageThree={SmallRock}
            id={`Rock`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
      </div>
    );
  }
  if (myChoice == rock && computerChoice == rock) {
    return (
      <div className="text-white flex mob:w-22 bigMob:w-101 tab:w-105 tab:justify-between justify-center tab:top-0 absolute">
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mb-14 mob:text-xl font-barlow tracking-widest text-2xl">
              YOU PICKED
            </h4>
          </div>

          <SelectorComponent
            shadow={`shadow-darkRed`}
            color={`bg-thirdRad`}
            image={BigRock}
            imageTwo={MidRock}
            imageThree={SmallRock}
            id={`Rock`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
        <div className="self-center play-width tab:absolute mob:top-22 tab:top-101 bigMob:w-full tab:w-105 w-96">
          <h3 className="block text-center you-lose text-6xl font-barlow">
            {draw}
          </h3>
          <div className="flex justify-center">
            <div className="bg-white w-56 border-black mt-7 border-solid tab:mt-8 rounded-xl">
              <Link to="/">
                <h3 className="text-playLoss text-shadow text-center tracking-widest font-barlow p-3">
                  PLAY AGAIN
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mob:text-xl mb-14 font-barlow tracking-widest text-2xl">
              HOUSE PICKS
            </h4>
          </div>
          <SelectorComponent
            shadow={`shadow-darkRed`}
            color={`bg-thirdRad`}
            image={BigRock}
            imageTwo={MidRock}
            imageThree={SmallRock}
            id={`Rock`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
      </div>
    );
  } else if (myChoice == rock && computerChoice == paper) {
    return (
      <div className="flex justify-center absolute text-white mob:w-22 bigMob:w-101 tab:w-105 tab:justify-between tab:top-0 ">
        <div
          className={`self-start ${positionTop} ${positionLeftTwo} z-30 flex justify-center items-center absolute div-circle circle1 rounded-full`}
        >
          <div className="-z-20 flex items-center justify-center div circle circle2 rounded-full">
            <div className="-z-10 div-circle circle3 rounded-full"></div>
          </div>
        </div>
        <div className="z-50 selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mb-14 mob:text-xl font-barlow tracking-widest text-2xl">
              YOU PICKED
            </h4>
          </div>

          <SelectorComponent
            shadow={`shadow-darkRed`}
            color={`bg-thirdRad`}
            image={BigRock}
            imageTwo={MidRock}
            imageThree={SmallRock}
            id={`Rock`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
        <div className="self-center z-40 play-width tab:absolute mob:top-22 tab:top-101 bigMob:w-full tab:w-105 w-96">
          <h3 className="block text-center you-lose text-6xl font-barlow">
            {loss}
          </h3>
          <div className="flex z-50 justify-center">
            <div className="bg-white w-56 border-black mt-7 border-solid tab:mt-8 rounded-xl">
              <Link to="/">
                <h3 className="text-playLoss text-shadow text-center tracking-widest font-barlow p-3">
                  PLAY AGAIN
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mob:text-xl mb-14 font-barlow tracking-widest text-2xl">
              HOUSE PICKS
            </h4>
          </div>
          <SelectorComponent
            shadow={`shadow-darkBlue`}
            color={`bg-firstRad`}
            image={BigPaper}
            imageTwo={MidPaper}
            imageThree={SmallPaper}
            id={`Paper`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
      </div>
    );
  } else if (myChoice == rock && computerChoice == scissors) {
    return (
      <div className="flex justify-center absolute text-white mob:w-22 bigMob:w-101 tab:w-105 tab:justify-between tab:top-0 ">
        <div
          className={`self-start ${positionTop} ${positionLeft} z-30 flex justify-center items-center absolute div-circle circle1 rounded-full`}
        >
          <div className="-z-20 flex items-center justify-center div circle circle2 rounded-full">
            <div className="-z-10 div-circle circle3 rounded-full"></div>
          </div>
        </div>
        <div className="z-50 selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mb-14 mob:text-xl font-barlow tracking-widest text-2xl">
              YOU PICKED
            </h4>
          </div>

          <SelectorComponent
            shadow={`shadow-darkRed`}
            color={`bg-thirdRad`}
            image={BigRock}
            imageTwo={MidRock}
            imageThree={SmallRock}
            id={`Rock`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
        <div className="self-center z-40 play-width tab:absolute mob:top-22 tab:top-101 bigMob:w-full tab:w-105 w-96">
          <h3 className="block text-center you-lose text-6xl font-barlow">
            {win}
          </h3>
          <div className="flex z-50 justify-center">
            <div className="bg-white w-56 border-black mt-7 border-solid tab:mt-8 rounded-xl">
              <Link to="/">
                <h3 className="text-playWin text-shadow text-center tracking-widest font-barlow p-3">
                  PLAY AGAIN
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="selector-res">
          <div className="tab:absolute mob:top-48 tab:top-64 bigMob:mt-0 tab:mt-10">
            <h4 className="text-center mob:text-xl mb-14 font-barlow tracking-widest text-2xl">
              HOUSE PICKS
            </h4>
          </div>
          <SelectorComponent
            shadow={`shadow-darkYellow`}
            color={`bg-secondRad`}
            image={BigScissors}
            imageTwo={MidScissors}
            imageThree={SmallScissors}
            id={`Scissors`}
            circle={`big-selector-circle`}
            innerCircle={`big-selector-inner_circle`}
            innerShadow={"shadow-innerOneBig"}
            outerShadow={`shadow-innerTwoBig`}
          />
        </div>
      </div>
    );
  } else return null;
}

export default ResultComponent;
