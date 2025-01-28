import { useState } from 'react'
import './style.css'


export default function CurrentResult() {
  const [result,setResult] = useState(0)
  return (
    <>
      <div className='card'>
        <p>BMI Results</p>
        <span>{result}</span>
      </div>
    </>
  )
}
