const correctAnswers = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');



form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    result.classList.remove('d-none');
    //result.querySelector('span').textContent = `${score}%`;

    let i = 0;
    const animasyon = setInterval(() => {

        result.querySelector('span').textContent = `${i}%`;
        if (i == score) clearInterval(animasyon);
        i++;
    }, 10);

});



