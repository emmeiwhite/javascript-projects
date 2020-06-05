const form = document.querySelector('.questions-form');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const answersubmitted = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
  const correctAnswers = ['A', 'B', 'A', 'B', 'B'];
  const scoreHolder = document.querySelector('.score-wrapper');
  const scoreSpan = document.querySelector('.score-wrapper .score');


  let score = 0;
  console.log(answersubmitted);

  answersubmitted.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  scoreSpan.textContent = score;
  scoreHolder.style.display = 'block';

});