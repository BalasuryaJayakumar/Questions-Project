
/* const btns = document.querySelectorAll(".question_btn")

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const question = event.currentTarget.parentElement.parentElement;
        question.classList.toggle("showText");
    });
}); */

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {

    const btn = question.querySelector(".question_btn");
    btn.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("showText");
            }
        });
        question.classList.toggle("showText");
    });
});