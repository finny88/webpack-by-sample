// Let's use some ES6 features
import { getAvg, getTotalScore } from "./averageService";
import logoImg from "./content/logo_1.png";

$("body").css("background-color", "lightSkyBlue");

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);
const totalScore = getTotalScore(scores);

const messageToDisplayAvg = `average score ${averageScore} `;
const messageToDisplayTotal = `total score ${totalScore}`;

new Promise((resolve, reject) =>
  window.setTimeout(() => {
    $("#avg").html(messageToDisplayAvg);
    $("#total").html(messageToDisplayTotal);
    resolve();
  }, 2000)
).then(() => {
  const img = document.createElement("img");
  img.src = logoImg;

  document.getElementById("imgContainer").appendChild(img);
});
