export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const highscoresKey = "highscores";

export function saveNewHighscore(newHighscore) {
  let today = new Date();

  const currentDate = today.toLocaleDateString("en-US");
  const highscores = getHighscores();
  highscores.push({
    date: currentDate,
    score: newHighscore,
  });
  highscores.sort((a, b) => b.score - a.score);
  highscores.splice(5);
  localStorage.setItem(highscoresKey, JSON.stringify(highscores));
}

/**
 * Function that deletes all the highscores from the local storage.
 */
export function clearHighscores() {
  localStorage.setItem(highscoresKey, "[]");
}

export function getHighscores() {
  const highscores = localStorage.getItem(highscoresKey);
  if (highscores) {
    return JSON.parse(highscores);
  }
  return [];
}
