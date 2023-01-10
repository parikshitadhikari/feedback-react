import React from "react";
import Loading from "../assets/loading.gif";

function Spinner() {
  return (
    <img
      src={Loading}
      alt="Loading....."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}
export default Spinner;
