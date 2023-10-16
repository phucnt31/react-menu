import React from "react";

const Title = ({ text }) => {
  return (
    <div className="title">
      <h3>{text}</h3>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
