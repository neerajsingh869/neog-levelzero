import { useState } from 'react';
import './App.css';

const animeSuggestions = {
  action: [
    {
      name: "Jujutsu Kaisen",
      description: `"Jujutsu Kaisen" follows Yuji Itadori, a high schooler drawn into battling curses after a cursed object's awakening threatens his world.`,
      rating: "4.5 / 5"
    },
    {
      name: "My Hero Academia",
      description: `"My Hero Academia" portrays Izuku Midoriya's journey in a world where people have superpowers, aiming to become the greatest hero.`,
      rating: "4.5 / 5"
    },
    {
      name: "Demon Slayer",
      description: `"Demon Slayer" follows Tanjiro Kamado's quest to save his sister and eradicate demons in a beautifully animated supernatural world.`,
      rating: "4.5 / 5"
    },
    {
      name: "Chainsaw Man",
      description: `"Chainsaw Man" follows Denji, a chainsaw-wielding devil hunter, navigating a gruesome world to eliminate demons. Dark, action-packed, and unpredictable.`,
      rating: "4 / 5"
    }
  ],
  adventure: [
    {
      name: "Fullmetal Alchemist: Brotherhood",
      description: `"Fullmetal Alchemist: Brotherhood" follows brothers Edward and Alphonse Elric on their quest for the Philosopher's Stone, exploring morality and sacrifice.`,
      rating: "4.7 / 5"
    },
    {
      name: "Naruto",
      description: `"Naruto" chronicles Naruto Uzumaki's journey from outcast to ninja hero, seeking acceptance and aspiring to become the strongest Hokage.`,
      rating: "4.5 / 5"
    },
    {
      name: "Vinland Saga",
      description: `"Vinland Saga" chronicles Thorfinn's epic journey from vengeance-seeking warrior to explorer, set in Viking age, blending history, action, and drama.`,
      rating: "4.2 / 5"
    },
    {
      name: "Jobless Reincarnation",
      description: `"Jobless Reincarnation" follows a NEET reborn as Rudy in a magical world, navigating growth, adventure, and redemption with sorcery and humor.`,
      rating: "4 / 5"
    }
  ],
  comedy: [
    {
      name: "Gintama",
      description: `"Gintama" is a comedic and action-packed anime about Gintoki Sakata and his odd jobs crew in an alternate-history Edo period.`,
      rating: "4.75 / 5"
    },
    {
      name: "Kaguya-sama: Love Is War",
      description: `"Kaguya-sama: Love Is War" explores the humorous mind games between Kaguya Shinomiya and Miyuki Shirogane, navigating high school romance dynamics.`,
      rating: "4.5 / 5"
    },
    {
      name: "Shin Chan",
      description: `"Shin Chan" hilariously follows the misadventures of a cheeky kindergarten boy, Shinnosuke Nohara, creating chaos with his innocent yet naughty antics.`,
      rating: "4.25 / 5"
    },
    {
      name: "Great Teacher Onizuka",
      description: `"Great Teacher Onizuka" follows Eikichi Onizuka, an unconventional teacher, transforming troubled students' lives through humor, compassion, and unorthodox methods in high school.`,
      rating: "4 / 5"
    }
  ],
  romance: [
    {
      name: "Kimi Ni Todoke: From Me To You",
      description: `"Kimi Ni Todoke" depicts Sawako Kuronuma's journey from misunderstood loner to cherished friend and love, navigating high school relationships with warmth.`,
      rating: "4.5 / 5"
    },
    {
      name: "Love, Chunibyo & Other Delusions!",
      description: `"Love, Chunibyo & Other Delusions!" follows Yuuta and Rikka's quirky romance, navigating the blend of fantasy and reality with humor and heartwarming moments.`,
      rating: "4.2 / 5"
    },
    {
      name: "Ouran High School Host Club!",
      description: `"Ouran High School Host Club" humorously explores Haruhi Fujioka's misadventures as a scholarship student in a quirky high school host club.`,
      rating: "4 / 5"
    },
    {
      name: "The Pet Girl Of Sakurasou",
      description: `"The Pet Girl of Sakurasou" revolves around Mashiro Shiina, a talented artist, and her chaotic but endearing friends in Sakurasou dorm.`,
      rating: "3.75 / 5"
    }
  ],
  fantasy: [
    {
      name: "Made In Abyss",
      description: `"Made in Abyss" follows Riko's perilous journey into a mysterious abyss, uncovering secrets and facing challenges in this visually stunning anime.`,
      rating: "4.75 / 5"
    },
    {
      name: "Black Clover",
      description: `"Black Clover" tracks Asta's journey to become the Wizard King, displaying magic battles, camaraderie, and determination in a fantastical world.`,
      rating: "4.5 / 5"
    },
    {
      name: "Fate/Zero",
      description: `"Fate/Zero" portrays a dark battle royale among mages and heroic spirits, exploring complex morality and destiny in a supernatural war.`,
      rating: "4.3 / 5"
    },
    {
      name: "Mononoke",
      description: `"Mononoke" follows the Medicine Seller, solving supernatural mysteries by confronting malevolent spirits, unveiling their Mononoke, in a unique, visually stunning style.`,
      rating: "4 / 5"
    }
  ]
};

let animeGenres = Object.keys(animeSuggestions);

function App() {
  let [ animeGenre, setAnimeGenre ] = useState('action');

  const handleGenreBtnClick = (e) => {
    e.preventDefault();

    const genre = e.target.textContent.trim();
    setAnimeGenre(genre);
  }

  return (
    <>
      <div className="app">
        <header>
          <h1>My Anime Recommendations</h1>
        </header>
        <main>
          <section id="anime-genres">
            { animeGenres.map(genre => {
              return (
                <button 
                key={ genre }  
                className="anime-genre-btn" 
                  id={genre + "-btn"}
                  onClick={ handleGenreBtnClick }
                >
                  <div className="bg"></div>
                  { genre }
                </button>
              )
            }) }
          </section>
          <section id="anime-cards">
            { animeSuggestions[animeGenre].map(anime => {
              return (
                <div 
                  key={ anime.name }  
                  className="anime-card"
                >
                  <div className="anime-name">
                    { anime.name }
                  </div>
                  <div className="anime-description">
                    { anime.description }
                  </div>
                  <div className="anime-rating">
                    { anime.rating }
                  </div>
                </div>
              )
            }) }
          </section>
        </main>
      </div>
    </>
  )
}

export default App
