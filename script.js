document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".quiz-question");
    const resultBox = document.getElementById("resultBox");
    const resultText = document.getElementById("resultText");
    let score = 0;
    let answeredCount = 0;

    // Перевіряємо, чи ми на сторінці з тестами
    if (questions.length === 0) return;

    questions.forEach((q) => {
        const options = q.querySelectorAll(".quiz-option");
        const correct = q.dataset.correct;
        let answered = false;

        options.forEach((opt, index) => {
            opt.addEventListener("click", () => {
                if (answered) return;
                answered = true;
                answeredCount++;

                if (index == correct) {
                    opt.classList.add("correct");
                    score++;
                } else {
                    opt.classList.add("wrong");
                }

                // Якщо всі питання отримали відповідь
                if (answeredCount === questions.length) {
                    if (resultBox) {
                        resultBox.style.display = "block";
                        resultText.textContent = `Ваш результат: ${score} з ${questions.length}`;
                        resultBox.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    });
});
