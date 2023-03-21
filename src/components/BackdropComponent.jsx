import React from "react";

function BackdropComponent(props) {
  if (!props.open) return null;
  return (
    <div
      onClick={props.onClick}
      className="z-10 bg-black w-screen mobile:h-bDrop back h-screen opacity-50 absolute"
    ></div>
  );
}

export default BackdropComponent;
