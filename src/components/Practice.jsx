import React, { useState } from "react";

const Practice = () => {

  const [myFavoriteThings, setMyFavoriteThings] = useState([]);

  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];

  function addFavoriteThing() {
    setMyFavoriteThings((prevFav) => [
      ...prevFav,
      allFavoriteThings[prevFav.length],
    ]);
  }

  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
};

export default Practice;
