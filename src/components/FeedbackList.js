import React from "react";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList(props) {
  const {feedback}=useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={props.handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  //   return (
  //     <div className='feedback-list'>
  //         {props.feedback.map((item)=>(
  //             <FeedbackItem key={item.id} item={item} handleDelete={props.handleDelete}/>
  //         ))}
  //     </div>
  //   )
}

export default FeedbackList;
