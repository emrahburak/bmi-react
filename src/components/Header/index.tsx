import React from "react"
import "./style.css"
import classNames from "classnames"


export default function Header({ children, ...props }: {
  children: React.ReactNode
} & React.HtmlHTMLAttributes<HTMLDivElement>) {
  const headerCls = classNames('header-cls', props.className)
  return (
    <>
      <div className={headerCls}>
        {children}
      </div>
    </>
  )
}
