
import classnames from 'classnames'
import React from "react"
import "./style.css"


export default function Button({ children, btnType, handleClick, ...props }: {
  children: React.ReactNode,
  btnType: string,
  handleClick: () => void,
} & React.HtmlHTMLAttributes<HTMLDivElement>) {
  const btnCls = classnames(null, props.className)
  return (
    <>
      <button type="button" onClick={handleClick} className={btnCls}>
        {children}
      </button>
    </>
  )
}


