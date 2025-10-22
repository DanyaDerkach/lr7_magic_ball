document.addEventListener('DOMContentLoaded', () => {

    const topWrap = document.createElement('div');
    topWrap.className = 'top-wrap';

    const input = document.createElement('input');
    input.className = 'input';
    input.type = 'text';
    input.placeholder = 'Введіть запитання...';

    topWrap.appendChild(input);
    document
        .body
        .appendChild(topWrap);

    const stage = document.createElement('div');
    stage.className = 'stage';

    const backball = document.createElement('div');
    backball.className = 'backball';

    const ball = document.createElement('div');
    ball.className = 'ball';

    const ballText = document.createElement('span');
    ballText.textContent = 'Введіть запитання та натисніть';
    ball.appendChild(ballText);
    stage.appendChild(backball);
    stage.appendChild(ball);
    document
        .body
        .appendChild(stage);

    ball.addEventListener('click', () => {
        ball.animate([
            {
                transform: 'scale(1)',
                offset: 0
            }, {
                transform: 'scale(1.06)',
                offset: 0.35
            }, {
                transform: 'scale(.98)',
                offset: 0.7
            }, {
                transform: 'scale(1)',
                offset: 1
            }
        ], {
            duration: 420,
            easing: 'cubic-bezier(.2,.9,.3,1)'
        });

        const question = input
            .value
            .trim();

        if (!question) {
            ballText.textContent = '❗ Введіть запитання!';
            return;
        } else if (!question.endsWith('?')) {
            ballText.textContent = 'Це не схоже на запитання ❗';
            return;
        }

        const answers = ['Так ✅', 'Ні ❌', 'Можливо 🤔'];
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

        ballText.textContent = '...';
        ballText.style.opacity = '0.7';

        setTimeout(() => {
            ballText.textContent = randomAnswer;
            ballText.style.opacity = '1';
        }, 700);
    });
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            ball.click();
        }
    });
});
