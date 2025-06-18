setInterval(setCounter, 1000
);

function setCounter() {
  // Your code here
  // Parameters are purely optional.
  const counterHtml = document.getElementById("counter");
  counterHtml.innerHTML = Number(counterHtml.textContent) + 1;
};
