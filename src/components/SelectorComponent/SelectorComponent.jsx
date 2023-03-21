import React from "react";

function SelectorComponent(props) {
  return (
    <div
      className={`flex overflow-hidden justify-center items-center ${props.hover} ${props.circle} ${props.shadow} ${props.outerShadow} rounded-full ${props.position} ${props.color} ${props.location}`}
    >
      <div
        data-id={props.id}
        onClick={props.onClick}
        className={`flex justify-center bg-kindaWhite items-center ${props.innerCircle} ${props.innerShadow} rounded-full `}
      >
        <props.image onClick={props.onClick} />
        <props.imageTwo onClick={props.onClick} />
        <props.imageThree onClick={props.onClick} />
      </div>
    </div>
  );
}

export default SelectorComponent;
