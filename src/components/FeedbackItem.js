import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem(props) {

  return (
    <Card>
        <div className='num-display'>{props.item.rating}</div>
        <div className='text-display'>{props.item.text}</div>
    </Card>
  )
}
FeedbackItem.propTypes={
  item: PropTypes.object.isRequired
}

export default FeedbackItem