const inputSubmit = document.querySelector('input[type="submit"]');

if (window.location.pathname === '/') {
    const inputText = document.querySelectorAll('fieldset input[type="text"]');
    inputSubmit.addEventListener('click', (event) => {
        if (inputText[0].value.length <= 0) {
            inputText[0].classList.add('error');
            alert('Je hebt je naam niet ingevuld');
        } else if (inputText[1].value.length <= 0 || !isNum(inputText[1].value)) {
            inputText[1].classList.add('error');
            alert('Je hebt je studentennummer niet correct ingevuld of verkeerd ingevuld');
        } else {
            inputText[0].classList.remove('error');
            inputText[1].classList.remove('error');
        }
    });
}

if (window.location.pathname !== '/' || window.location.pathname !== '/results') {
    const checkbox = document.querySelectorAll(".single-teacher > input[name='teacher']");
    const inputNumber = document.querySelectorAll('input[type="number"]');
    const inputFieldText = document.querySelectorAll('textarea');

    const teacherBlock = document.querySelector('.teachers');
    const dates = document.querySelector('.dates');
    const beoordeling = document.querySelector('.beoordeling');
    const lesstof = document.querySelector('.lesstof');
    const uitleg = document.querySelector('.uitleg');
    const inzicht = document.querySelector('.inzicht');

    checkbox.forEach((check) => {
        check.addEventListener('click', (event) => {
            if (!checkCheckboxes(checkbox)) {
                teacherBlock.classList.add('error');
                inputSubmit.disabled = true;
            } else {
                inputSubmit.disabled = false;
                teacherBlock.classList.remove('error');
            }
        });
    });

    inputNumber.forEach((input) => {
        input.addEventListener('click', (event) => {
            if (!isNum(input.value)) {
                dates.classList.add('error');
                beoordeling.classList.add('error');
                inputSubmit.disabled = true;
            } else {
                dates.classList.remove('error');
                beoordeling.classList.remove('error');
                inputSubmit.disabled = false;
            }
        });
    });

    inputNumber.forEach((input) => {
        input.addEventListener('keyup', (event) => {
            if (!isNum(input.value)) {
                dates.classList.add('error');
                beoordeling.classList.add('error');
                inputSubmit.disabled = true;
            } else {
                dates.classList.remove('error');
                beoordeling.classList.remove('error');
                inputSubmit.disabled = false;
            }
        });
    });

    inputFieldText.forEach((text) => {
        text.addEventListener('keyup', (event) => {
            if (text.textLength <= 0) {
                lesstof.classList.add('error');
                uitleg.classList.add('error');
                inzicht.classList.add('error');
                inputSubmit.disabled = true;
            } else {
                lesstof.classList.remove('error');
                uitleg.classList.remove('error');
                inzicht.classList.remove('error');
                inputSubmit.disabled = false;
            }
        });
    });
}

function isNum(value) {
    return /^\d+$/.test(value);
}

function checkCheckboxes(checkbox) {
    let checked = false;
    checkbox.forEach((check) => {
        if (check.checked) {
            checked = true;
        }
    });
    return checked;
}
