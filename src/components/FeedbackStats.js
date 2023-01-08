import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbactStats() {
  const {feedback}=useContext(FeedbackContext)
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  //0 is default for accumulator 'acc'
  average = average.toFixed(1).replace(/[.,]0$/, "");
  //the o/p will be upto 1 decimal place due to toFixed(1)
  //.replace() will make sure that when average is 9.0 then remove .0 and just show 9
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbactStats;
