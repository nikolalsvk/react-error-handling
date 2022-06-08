import { useState } from 'react'

const SetTimeoutButton = () => {
  const [error, setError] = useState(null)

  const handleClick = () => {
    setTimeout(() => {
      try {
        throw Error('Oh no, an error :(')
      } catch (error) {
        setError(error)
      }
    }, 1000)
  }


  if (error) {
    return <span>Caught a delayed error.</span>
  }

  return <button onClick={handleClick}>Click Me To Throw a Delayed Error</button>
}

export default SetTimeoutButton
