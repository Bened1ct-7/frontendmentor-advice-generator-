const toggler = document.querySelector(".toggler");
const quoteId = document.querySelector(".id");
const mainQuote = document.querySelector(".main-quote");

const display = (data) => {
  quoteId.textContent = data.slip.id;
  mainQuote.textContent = data.slip.advice;
};

const fetchAdvice = async () => {
  try {
    const request = new Request("https://api.adviceslip.com/advice");
    const response = await fetch(request);
    const result = await response.json();
    if (result) {
      display(result);
    }
  } catch (e) {
    console.log(e);
  }
};

toggler.addEventListener("click", fetchAdvice);
window.addEventListener("load", fetchAdvice);
