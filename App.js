import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🦍": "Gorilla",
  "🐶": "Dog Face",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🐅": "Tiger",
  "🦁": "Lion",
  "🐆": "Leopard",
  "🐎": "Horse",
  "🦄": "Unicorn"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't have this in our data base!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Please enter your emoji here!"
      />
      <div
        style={{ fontSize: "2rem", color: "navy", fontFamily: "Bree Serif" }}
      >
        {meaning}
      </div>

      <h3> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
