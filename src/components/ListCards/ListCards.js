import React from 'react'
import Card from 'components/ListCards/Card/Card'
import { Draggable } from 'react-smooth-dnd'
function ListCards(props) {

  const { cards } = props

  return cards.map((card, index) => (
    <Draggable key={index}>
      <Card card={card} />
    </Draggable>
  ))

}

export default React.memo(ListCards)