// four-project
const textareaEl = document.getElementById("textarea");
const totalCounterSpan = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");


textareaEl.addEventListener('keyup', () => {

    updateCounterSpan();

});

updateCounterSpan();

function updateCounterSpan() {
    totalCounterSpan.innerText = textareaEl.value.length;
    remainingCounter.innerText =  textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}