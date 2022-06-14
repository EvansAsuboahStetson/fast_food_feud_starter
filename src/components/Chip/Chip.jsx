import * as React from "react"
import { useState } from "react"
import "./Chip.css"
export function Chip({ label="", isActive = false ,onClick = () => {} ,onClose = () => {}}) {
 

  
  
  return (
    <button className={`chip ${!isActive ? "":"active"}`} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close " role="button" onClick={(evt) => {
        onClose();
        evt.stopPropagation()
      }}>{`X`}</span>

    </button>
  )
}

export default Chip
