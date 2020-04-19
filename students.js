// Let's use some ES6 features
import { getAvg, getTotalScore } from "./averageService";

$("body").css("background-color", "lightSkyBlue");

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);
const totalScore = getTotalScore(scores);

const messageToDisplayAvg = `average score ${averageScore} `;
const messageToDisplayTotal = `total score ${totalScore}`;

new Promise((resolve, reject) =>
  window.setTimeout(() => {
    document.write(messageToDisplayAvg);
    document.write(messageToDisplayTotal);
    resolve();
  }, 2000)
);
