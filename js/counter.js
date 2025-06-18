function setCounter() {
    const counterElement = document.getElementById("counter");
    counterElement.innerHTML = Number(counterElement.textContent) + 1;
  };
  
setInterval(setCounter, 1000);