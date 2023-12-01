import { useState } from 'react'
import './App.css'

function App() {

  let userName = 'Neeraj';
  const [likeCouter, setLikeCounter] = useState(0);
  const [ inputText, setInputText ] = useState("");

  const handleClick = (event) => {
    event.preventDefault();

    setLikeCounter(likeCouter + 1);
    console.log('liked');
    console.log('total number of clicks: ' + likeCouter);
  }

  return (
    <>
      <h1 style={{ color: 'blue' }}>Welcome { userName }!</h1>
      <button onClick={ handleClick }>Like</button>
      <input type="text" placeholder="type whatever you want..." onChange={ (e) => setInputText(e.target.value) }/>
      <div>{ inputText }</div>
    </>
  )
}

export default App
