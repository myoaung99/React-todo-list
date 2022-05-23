import React from "react";

const Button = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <button onClick={clickHandler} style={props.style} className={"button"}>
      {props.children}
    </button>
  );
};

export default React.memo(Button);
