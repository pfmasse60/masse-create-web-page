import './App.css'
import React, {useState, useRef} from 'react'

function App() {
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const internalRef = useRef(null)

  const handleStart = () => {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(internalRef.current)
    internalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  const handleStop = () => {
    clearInterval(internalRef.current)
  }

  let secondsPassed = 0
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <>
      <h1>Time elapsed: {
        secondsPassed.toFixed(3)
      }</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}
export default App
