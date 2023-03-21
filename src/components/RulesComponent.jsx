import React from "react";

function RulesComponent(props) {
  return (
    <div
      onClick={props.onClick}
      className={`mouse-click text-headerOneish ${props.onHover} footer no-abs flex justify-center items-center h-11 tracking-widest font-barlow w-32`}
    >
      RULES
    </div>
  );
}

export default RulesComponent;
