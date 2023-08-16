function getInputValueById(id) {
    const element = document.querySelector("#"+id);
    const elementString = element.value;
    element.value = '';
    const value = parseFloat(elementString);
    return value;
}

function getElementValueById(id) {
    const element = document.querySelector("#"+id);
    const elementString = element.innerText;
    const value = parseFloat(elementString);
    return value;
}

function setTextElementValueById(id, value) {
    const element = document.querySelector("#"+id);
    element.innerText = value;
    
}