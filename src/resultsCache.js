export function getStats() {
  try {
    const stats = window.localStorage.getItem("stats");

    if (!stats) {
      const scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      let played = 0;
      let won = 0;
      let totalTimeWinning = 0;
      let fastestTime = 60;

      for (let i = 0; i < 10; i++) {
        const dailyResult = window.localStorage.getItem(`puzzle-${i}`);

        if (dailyResult) {
          const result = JSON.parse(dailyResult);
          const score = result.score;
          scores[score] = scores[score] + 1;

          played++;
          won = score === 10 ? won + 1 : won;
          totalTimeWinning =
            score === 10 ? totalTimeWinning + result.time : totalTimeWinning;
          fastestTime =
            score === 10
              ? result.time < fastestTime
                ? result.time
                : fastestTime
              : fastestTime;
        }
      }

      const data = {
        scores,
        gamesPlayed: played,
        gamesWon: won,
        averageWinTime: parseFloat((totalTimeWinning / won).toFixed(2)),
        fastestWinTime: fastestTime,
      };

      window.localStorage.setItem("stats", JSON.stringify(data));

      return data;
    } else {
      return JSON.parse(stats);
    }
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function getScores() {
  try {
    const scores = window.localStorage.getItem("alltimeResults");

    if (scores) {
      const scoresArray = scores.split(",").map((score) => parseInt(score));
      return scoresArray;
    }
  } catch (e) {
    console.error(e);
  }

  return null;
}
