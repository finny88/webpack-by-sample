// Let's use some ES6 features
const averageScore = "90";
const messageToDisplay = `average score ${averageScore}`;

new Promise((resolve, reject) =>
  window.setTimeout(() => {
    document.write(messageToDisplay);
    resolve();
  }, 2000)
);
