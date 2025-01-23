import React from "react"
import classnames from 'classnames'
import "./style.css"


export default function GenderCard({ children, ...props }: {
  children: React.ReactNode
} & React.HtmlHTMLAttributes<HTMLDivElement>) {
  const cardCls = classnames(null, props.className)
  return (
    <>
      <div className={cardCls}>
        {children}
        <div className=" mx-auto input-wrp">
          <div>
            Erkek
          </div>
          <label htmlFor="gender" className="switch">
            <input type="checkbox" id="gender" />
            <span className="slider"></span>
          </label>
          <div>
            Kadın
          </div>
        </div>
      </div>
    </>
  )

}
