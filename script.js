document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".quiz-question");

    questions.forEach((q) => {
        const options = q.querySelectorAll(".quiz-option");
        const correct = q.dataset.correct;

        options.forEach((opt, index) => {
            opt.addEventListener("click", () => {
                options.forEach(o => o.classList.remove("correct", "wrong"));

                if (index == correct) opt.classList.add("correct");
                else opt.classList.add("wrong");
            });
        });
    });
});
