function getInputValueById(id) {
    const element = document.querySelector("#"+id);
    const elementString = element.value;
    element.value = '';
    const value = parseFloat(elementString);
    return value;
}

function getInnerTextValueById(id) {
    const element = document.querySelector("#"+id);
    const elementString = element.innerText;
    const value = parseFloat(elementString);
    return value;
}

function setInnerTextValueById(id, value) {
    const element = document.querySelector("#"+id);
    element.innerText = value;
    
}