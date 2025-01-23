import classNames from "classnames"
import React, { useEffect, useState } from "react"
import "./style.css"

export default function CardCounter({ children, cardType, ...props }: {
  children: React.ReactNode,
  cardType: string
} & React.HtmlHTMLAttributes<HTMLDivElement>) {
  const [count, setCount] = useState(1)
  const cardCls = classNames(null, props.className)

  const handleIncrement = () => {
    if (cardType === "age" && count < 101) {
      setCount(count => count + 1)
    }
    else if (cardType === "weight" && count < 500) {
      setCount(count => count + 1)
    }
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count => count - 1)
    }
  }


  useEffect(() => {
    if (cardType == "age") {
      setCount(30)
    }
    if (cardType === "weight") {
      setCount(78)
    }
  }, [cardType])


  return (
    <>
      <div className={cardCls}>
        <p>{children}</p>
        <span className="number-cls">{count}</span>
        <div className="btn-container">
          <button type="button" className="counter-btn" name="dec" onClick={handleDecrement}></button>
          <button type="button" className="counter-btn" name="inc" onClick={handleIncrement}></button>
        </div>
      </div>
    </>
  )
}
