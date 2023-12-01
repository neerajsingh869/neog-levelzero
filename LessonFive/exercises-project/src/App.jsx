import { useState } from 'react'
import './App.css'

function App() {

  let userName = 'Neeraj';
  // let likeCouter = 0;
  const [likeCouter, setLikeCounter] = useState(0);

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
    </>
  )
}

export default App
