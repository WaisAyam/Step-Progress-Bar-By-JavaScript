const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const finishButton = document.getElementById('finishButton');
const content = document.getElementById('content');
const bullets = document.querySelectorAll('.bullet');

let currentStep = 1;
let maxSteps = 4;

nextButton.addEventListener('click', () => {
    const currentBullet = bullets[currentStep - 1];
    currentBullet.classList.add('active');
    currentStep++;
    prevButton.disabled = false;

    if(currentStep === maxSteps){
        nextButton.disabled = true;
        finishButton.disabled = false;
    }

    content.innerText = `Step Numer ${currentStep}`;
});

prevButton.addEventListener('click', () => {
    const prevBullet = bullets[currentStep - 2];
    prevBullet.classList.remove('active');
    currentStep--;
    nextButton.disabled = false;
    finishButton.disabled = true;

    if(currentStep === maxSteps){
        prevButton.disabled = true;
    }

    content.innerText = `Step Numer ${currentStep}`;
});

finishButton.addEventListener('click', () => {
    location.reload();
})
