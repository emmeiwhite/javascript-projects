const form = document.querySelector('.questions-form');
const correctAnswers = ['A', 'B', 'A', 'B', 'B'];
const result = document.querySelector('.score-wrapper');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const answersubmitted = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

  let score = 0;
  console.log(answersubmitted);

  answersubmitted.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  window.scrollTo(0, 0);

  let initialScore = 0;

  const interval = setInterval(() => {

    if (initialScore <= score) {
      result.querySelector('span').textContent = initialScore;
      initialScore += 1;
      console.log("setInterval setInterval setInterval");
    } else {
      clearInterval(interval);
      console.log("intervalClosed intervalClosed intervalClosed");
    }

  }, 20);
  // Adding and removing the classes  | Here we are adding the class
  result.classList.remove('d-none');

});