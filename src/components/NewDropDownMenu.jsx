import { useState } from "react"

export default function DropDownMenu({children,title}){

  const [isOpen, setIsOpen] = useState(false)

  return(
    <>
    <div>
      <h2>{title}</h2>
      <button 
        className="button"
        type="button"
        onClick={()=>setIsOpen(!isOpen)}>
        {isOpen? "Close" : "Open"}</button>
      <div>
        {isOpen && children }
      </div>
    </div>
    </>
  )
}