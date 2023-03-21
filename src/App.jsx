import React from "react";
import "./index.css";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import SelectionComponnt from "./components/selectionComponent/SelectionComponnt";
import RulesComponent from "./components/RulesComponent";
import BackdropComponent from "./components/BackdropComponent";
import { useState } from "react";
import Rules from "./svg/Rules";
import { createContext } from "react";
import { Routes, Route } from "react-router";
import ResultComponent from "./components/ResultComponent/ResultComponent";

export const UserContext = createContext(null);

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <BackdropComponent onClick={() => setIsOpen(false)} open={isOpen} />
      <div className=" ov-flow mobile:h-screen -z-40 flex justify-center bg-rad from-xx to-xy w-full h-screen overflow-auto">
        <UserContext.Provider value={{ isOpen, setIsOpen }}>
          <Rules open={isOpen} />
        </UserContext.Provider>
        <div className="width-header grid main-grid w-1/2 gap-y-16">
          <div className="header w-full h-fit">
            <HeaderComponent score={score} />
          </div>
          <div className="relative main w-full">
            <div className="h-26 flex items-center justify-center">
              <Routes>
                <Route
                  path="/"
                  element={<SelectionComponnt setMyChoice={setMyChoice} />}
                />

                <Route
                  path="/result"
                  element={
                    <ResultComponent
                      myChoice={myChoice}
                      score={score}
                      setScore={setScore}
                      scissors={`Scissors`}
                      paper={`Paper`}
                      rock={`Rock`}
                      positionTop={`top-79 tab:top-78 bigMob:-top-6 mob:-top-rippleTop`}
                      positionLeft={`-left-53 tab:-left-36 bigMob:-left-6 mob:-left-rippleTop`}
                      positionLeftTwo={`left-leftTo lap:left-leftTwo tab:left-52 bigMob:left-seventy mob:left-20  `}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
          <div className="flex relative">
            <div className="rules-position mob:-top-4 w-80 width-header justify-end top-8 absolute tab:top-28 flex width-rules">
              <RulesComponent
                onHover={`hover:bg-headerOneish hover:text-hovRules`}
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
