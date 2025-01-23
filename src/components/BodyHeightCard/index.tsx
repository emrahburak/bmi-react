import React, { useState } from "react"
import classNames from "classnames";
import "./style.css"

export default function BodyHeightCard({ children, ...props }: {
  children: React.ReactNode
} & React.HtmlHTMLAttributes<HTMLDivElement>) {

  const [rangeValue, setRangeValue] = useState(178);
  const cardCls = classNames(null, props.className);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(event.target.value, 10))
  }


  return (
    <>
      <div className={cardCls}>
        {children}
        <div>
          <div>
            <span className="number-cls">{rangeValue}</span>
          </div>
          <input
            type="range"
            id="myRange"
            min="50"
            max="300"
            value={rangeValue}
            onChange={handleRangeChange}
          />
          <div>
            <div className="flex items-center justify-between">
              <span>50 cm</span>
              <span>300 cm</span>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
