import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import avatarImage from '../../assets/images/avatar.png'

function Cards({ headerTitle, content }: InferProps<typeof Cards.propTypes>) {
  return (
    <div className="card">
      
    </div>
  )
}

Cards.propTypes = {
  headerTitle: PropTypes.string,
  content: PropTypes.string,
}

export default Cards
