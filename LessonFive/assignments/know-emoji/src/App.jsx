import { useState } from 'react';
import './App.css';

const emojisDictionary = {
	"💌": "Love Letter",
	"💞": "Revolving Hearts",
	"💥": "Collision",
	"💢": "Anger Symbol",
	"💦": "Sweat Droplets",
	"🤍": "White Heart",
	"💔": "Broken Heart",
	"💝": "Heart with Ribbon",
	"☢️": "Radioactive",
	"🛜": "Wireless",
	"🕉️": "Om",
	"⚕️": "Medical Symbol"
}

const emojisAsList = Object.keys(emojisDictionary);

function App() {
	const [ emojiInput, setEmojiInput ] = useState("");
	const [ emojiMeaning, setEmojiMeaning ] = useState("emoji info will shown here...");

	const handlerEmojiInputChange = (e) => {
		console.log(e.target.value);
		const emojiInput = e.target.value;
		setEmojiInput(emojiInput);

		if (emojiInput === undefined) {
			setEmojiMeaning("Emoji not found in database.");
		} else if (emojiInput in emojisDictionary) {
			setEmojiMeaning(emojisDictionary[emojiInput]);
		} else {
			setEmojiMeaning("Failure to recognize emoji");
		}
	}

	const handleEmojiClick = (emoji) => {
		console.log(emoji);
		setEmojiMeaning(emojisDictionary[emoji]);
	}

	return (
		<>
			<div className="app">
				<header>
					<h1>know symbols emojis!</h1>
				</header>
				<main>
					<input 
						type="text" 
						placeholder="Search symbols emoji"
						onChange={ handlerEmojiInputChange }
					/>
					<div className="emoji-info-container">
						<div style={{ marginBottom: "1rem", fontSize: "1.4rem" }}>
							{ emojiInput }
						</div>
						<div>
							{ emojiMeaning }
						</div>
					</div>
				</main>
				<footer>
					{ emojisAsList.map(emojiItem => {
						return (
							<span
								key={ emojiItem }
								className="emojis-list-item"
								onClick={ () => handleEmojiClick(emojiItem) }	
							>
								{ emojiItem }
							</span>
						)
					}) }
				</footer>
			</div>
		</>
	)
}

export default App
