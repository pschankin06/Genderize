'use strict';
import {
    UI_ELEMENTS,
    resetInputText,
    clearOutputField,
    showResult,
} from './view.js'

const SERVER_URL = 'https://api.genderize.io';

export function getGender() {
    const firstName = UI_ELEMENTS.INPUT.value;
    const url = `${SERVER_URL}?name=${firstName}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            UI_ELEMENTS.OUTPUT_FIELD.textContent = `${result.name} - ${result.gender}`;
        });
    showResult();
    resetInputText();
}