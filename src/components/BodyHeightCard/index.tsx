import React, { useContext, useEffect } from "react"
import classNames from "classnames";
import "./style.css"
import { AppContext } from "../Provider";

export default function BodyHeightCard({ children, ...props }: {
  children: React.ReactNode
} & React.HtmlHTMLAttributes<HTMLDivElement>) {

  const context = useContext(AppContext)

  if (!context) {
    throw new Error("useContext must be used within a CountProvider");
  }

  const { heightValue, setHeightValue, setResult } = context;
  const cardCls = classNames(null, props.className);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeightValue(parseInt(event.target.value, 10))
    setResult("")
  }

  useEffect(() => {
    setHeightValue(178)
  },[setHeightValue])

  return (
    <>
      <div className={cardCls}>
        {children}
        <div>
          <div>
            <span className="number-cls">{heightValue}</span>
          </div>
          <input
            type="range"
            id="myRange"
            min="50"
            max="300"
            value={heightValue}
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
