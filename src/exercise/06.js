// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).

  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(null);
  const [disable, setDisable] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value
    onSubmitUsername(inputValue)
  }

  const handleChange = (e) => {
    const changedValue = e.target.value;
    const isValid = changedValue === changedValue.toLowerCase();
    setError(isValid ? null : "Username must be lowercase")
    setDisable(isValid ? false : true)
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor ='input-text'>Username:</label>
        <input onChange={handleChange} id = "input-text" type ="text" ref={inputRef} disabled={disable} />
        <div>{error}</div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
