import {
    getGender
} from './main.js'

export const UI_ELEMENTS = {
    FORM: document.querySelector('.form'),
    INPUT: document.querySelector('.name'),
    OUTPUT_FIELD: document.querySelector('.result')
}

UI_ELEMENTS.FORM.addEventListener('submit', clearOutputField);
UI_ELEMENTS.FORM.addEventListener('submit', getGender);

export function resetInputText() {
    UI_ELEMENTS.INPUT.value = '';
}

export function clearOutputField() {
    if (UI_ELEMENTS.OUTPUT_FIELD.classList.contains('show')) {
        UI_ELEMENTS.OUTPUT_FIELD.classList.remove('show');
    }
}

export function showResult() {
    UI_ELEMENTS.OUTPUT_FIELD.classList.toggle('show');
}