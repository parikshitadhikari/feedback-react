import React from 'react'
import { FaTimes } from "react-icons/fa"

import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem(props) {
  
  return (
    <Card>
        <div className='num-display'>{props.item.rating}</div>
        <button onClick={()=>props.handleDelete(props.item.id)} className="close">
          <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{props.item.text}</div>
    </Card>
  )
}
FeedbackItem.propTypes={
  item: PropTypes.object.isRequired
}

export default FeedbackItem