import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.items}</h4>

      <ul className="fact-list">
        {/* WRITE CODE HERE */}

        {nutritionFacts.map((element) => (
          <NutritionalLabelFact label={element.label} attribute={element.attribute} key={element.id} item={props.items}/>
        ))}

      
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">
        {props.label}
        {/* WRITE CODE HERE */}</span>{" "}
      <span className="fact-value">
        {props.attribute}
        {/* WRITE CODE HERE */}</span>
    </li>
  )
}

export default NutritionalLabel
