import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    // <div className={`card ${props.reverse && 'reverse'}`}>{props.children}</div>
    //props.reverse && 'reverse' is same as props.reverese?reverse:null
    <div
      className="card"
      style={{
        backgroundColor: props.reverse ? "#000" : "#fff",
        color: props.reverse ? "#fff" : "#000",
      }}
    >
      {props.children}
    </div>
  );
};
Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
