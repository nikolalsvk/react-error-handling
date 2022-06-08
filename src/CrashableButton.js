import { useState } from 'react'

const CrashableButton = () => {
  const [error, setError] = useState(null)

  const handleClick = () => {
    try {
      throw Error('Oh no :(')
    } catch (error) {
      setError(error)
    }
  }


  if (error) {
    return <span>Caught an error.</span>
  }

  return <button onClick={handleClick}>Click Me To Throw Error</button>
}

export default CrashableButton
