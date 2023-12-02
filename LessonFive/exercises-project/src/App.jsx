import { useState } from 'react'
import './App.css'

function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [inputEmoji, setInputEmoji] = useState("");

  let userName = "Neeraj";
  let color = "blue";
  
  const emojiDictionary = {
    "🙃": "Up-side Down Face",
    "😌": "Releived Face",
    "😕": "Confused Face",
    "😈": "Smiley Face With Horns",
  };

  let inputEmojiMeaning;

  if (inputEmoji === "") {
    inputEmojiMeaning = "";
  } else if (inputEmoji in emojiDictionary) {
    inputEmojiMeaning = emojiDictionary[inputEmoji];
  } else {
    inputEmojiMeaning = "Failure to recognize this emoji."
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}>Welcome {userName}!</h1>
      <button
        onClick={(e) => {
          e.preventDefault();

          setLikeCounter(likeCounter + 1);
        }}
      >
        Like
      </button>
      <input
        type="text"
        placeholder="Input emoji icon..."
        onChange={(e) => {
          setInputEmoji(e.target.value);
        }}
      />
      <div>
        { inputEmoji } { inputEmojiMeaning }
      </div>
    </div>
  );
}

export default App;
