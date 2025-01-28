import classNames from "classnames"
import React, { useContext, useEffect } from "react"
import "./style.css"
import { AppContext } from "../Provider"

export default function CardCounter({ children, cardType, ...props }: {
  children: React.ReactNode,
  cardType: string
} & React.HtmlHTMLAttributes<HTMLDivElement>) {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useContext must be used within a CountProvider");

  }
  const { weightValue, setWeightValue, setResult } = context;

  const cardCls = classNames(null, props.className)

  const handleIncrement = () => {
    if (cardType === "age" && weightValue < 101) {
      setWeightValue(weightValue + 1)
    }
    else if (cardType === "weight" && weightValue < 500) {
      setWeightValue(weightValue + 1)
    }
    setResult("")
  }

  const handleDecrement = () => {
    if (weightValue > 1) {
      setWeightValue(weightValue - 1)
      setResult("")
    }
  }


  useEffect(() => {
    if (cardType == "age") {
      setWeightValue(30)
    }
    if (cardType === "weight") {
      setWeightValue(78)
    }
  }, [cardType, setWeightValue,setResult])


  return (
    <>
      <div className={cardCls}>
        <p>{children}</p>
        <span className="number-cls">{weightValue}</span>
        <input type="hidden" name="counter" value={weightValue} />
        <div className="btn-container">
          <button type="button" className="counter-btn" name="dec" onClick={handleDecrement}></button>
          <button type="button" className="counter-btn" name="inc" onClick={handleIncrement}></button>
        </div>
      </div>
    </>
  )
}
