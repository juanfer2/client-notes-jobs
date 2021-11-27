import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

import Cards from '../cards'

function ListCard({ listCard }: InferProps<typeof ListCard.propTypes>) {
  return (
    <section className="card-list">
      {listCard &&
        listCard.map((cardItem: any, i: number) => (
          <Cards key={i} headerTitle={cardItem.date} content={cardItem.name} />
        ))}
    </section>
  )
}

ListCard.propTypes = {
  listCard: PropTypes.any,
}

export default ListCard
