import classNames from "classnames"
import React from "react"
import './style.css'
import CurrentResult from "../CurrentResult"

export default function ResultCard({ children, ...props }: {
  children: React.ReactNode
} & React.HtmlHTMLAttributes<HTMLDivElement>) {

  const cardCls = classNames(null, props.className)

  return (
    <>
      <div className={cardCls}>
        {children}
        <CurrentResult/>
      </div>
    </>
  )
}
