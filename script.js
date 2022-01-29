console.log("hello world");

const solution = "git commit";
const feedback = document.querySelector("#feedback");

document.quiz.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAnswer = document.quiz.answer.value;
  if (userAnswer.toLowerCase() == solution.toLocaleLowerCase()) {
    feedback.textContent = "you solved our quiz congrats!!";
  } else {
    feedback.textContent = " wrong answer ! try again";
  }
});
