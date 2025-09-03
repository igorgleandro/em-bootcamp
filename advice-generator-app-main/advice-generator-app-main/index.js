async function fetchAdvice() {
  const api = 'https://api.adviceslip.com/advice';
  const response = await fetch(api);
  const data = await response.json();
  return data.slip; 
}

async function getApiAdvice() {
  const data = await fetchAdvice();

  const idAdvice = document.getElementById("idAdvice")
  idAdvice.innerHTML = "Advice # " + data.id;

  const adAdvice = document.getElementById("adAdvice");
  adAdvice.innerHTML = '"' + data.advice + '"';
}

getApiAdvice();

diceButton.addEventListener('click', () => {
  location.reload();
});


