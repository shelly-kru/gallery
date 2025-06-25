function setCounter(setter = null) {
    const counterElement = document.getElementById("counter");
    if (setter === null) {
        counterElement.innerHTML = Number(counterElement.textContent) + 1;
    }
    else {
        counterElement.innerHTML = setter;
    }
  };

intervalCounter = setInterval(setCounter, 1000);

function stopCounter() {
    setCounter(0);
  };
