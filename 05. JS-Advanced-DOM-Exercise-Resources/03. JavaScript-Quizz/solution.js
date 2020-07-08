function solve() {
  let quizzie = document.getElementById('quizzie');
  let sections = document.getElementsByTagName('section');
  let result = document.querySelector('.results-inner h1');

  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let userAnswers = 0;
  let currentStep = 0;

  let handler = (e) => {

    if (e.target.className === 'answer-text') {
      sections[currentStep].style.display = "none";

      let isAnswerCorrect = correctAnswers.includes(e.target.innerHTML);

      if (isAnswerCorrect) {
        userAnswers++;
      }

      currentStep++;

      if (currentStep < correctAnswers.length) {
        sections[currentStep].style.display = "block";
      }

      if (currentStep === correctAnswers.length) {
        quizzie.removeEventListener('click', handler)

        document.querySelector('#results').style.display = "block";
        if (correctAnswers.length === userAnswers) {
          result.innerHTML = "You are recognized as top JavaScript fan!"
        } else {
          result.innerHTML = `You have ${userAnswers} right answers`
        }
      }
    }
  }

  quizzie.addEventListener('click', handler)
}
