import * as React from "react";
import { nutritionFacts } from "../../constants";
import "./NutritionalLabel.css";

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">
        {/* WRITE CODE HERE */}

        {nutritionFacts.map((element) => (
          <NutritionalLabelFact
            label={element.label}
            attribute={element.attribute}
            key={element.id}
            item={props.item}
          />
        ))}
      </ul>
    </div>
  );
}

export function NutritionalLabelFact(props) {
  var onReq= function renderElement() {
    if (props.attribute == "calories")
      return <span className="fact-value">{props.item.calories}</span>;
    else if (props.attribute == "dietary_fiber")
      return <span className="fact-value">{props.item.dietary_fiber}
        {console.log("fiber")}</span>;
    else if (props.attribute == "item_description")
      return <span className="fact-value">{props.item.item_description}</span>;
    else if (props.attribute == "cholesterol")
      return <span className="fact-value">{props.item.cholesterol}
        {console.log("choke")}</span>;
    else if (props.attribute == "sodium")
      return <span className="fact-value">{props.item.sodium}</span>;
    else if (props.attribute == "sugar")
      return <span className="fact-value">{props.item.sugar}</span>;
    else if (props.attribute == "total_fat")
      return <span className="fact-value">{props.item.total_fat}</span>;
    else if (props.attribute == "saturated_fat")
      return <span className="fact-value">{props.item.saturated_fat}</span>;
    else if (props.attribute == "trans_fat")
      return <span className="fact-value">{props.item.trans_fat}</span>;
    else {
      return null
    }
  }
  return (
    <li className="nutrition-fact">
      <span className="fact-label">
        {props.label}
        
        {/* WRITE CODE HERE */}
      </span>{" "}

   
      {onReq()}
     
      {}
    </li>
  );
}

export default NutritionalLabel;
