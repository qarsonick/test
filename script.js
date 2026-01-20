document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".quiz-question");
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");
  let score = 0;

  questions.forEach((q) => {
    const options = q.querySelectorAll(".quiz-option");
    const correct = q.dataset.correct;
    let answered = false;

    options.forEach((opt, index) => {
      opt.addEventListener("click", () => {
        if (answered) return;
        answered = true;

        if (index == correct) {
          opt.classList.add("correct");
          score++;
        } else {
          opt.classList.add("wrong");
        }

        if (document.querySelectorAll('.correct, .wrong').length === questions.length) {
          resultBox.style.display = "block";
          resultText.textContent = `Ваш результат: ${score} / ${questions.length}`;
        }
      });
    });
  });
});
