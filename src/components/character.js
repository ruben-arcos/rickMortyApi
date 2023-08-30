import React from 'react'
import '../App.css'

export default function character(props) {
  return (
    <li className="char-info">
      <img src={props.character.image} alt={props.character.name} />
      <h3>{props.character.name}</h3>
      <p>{props.character.location.name}</p>
    </li>
  )
}


