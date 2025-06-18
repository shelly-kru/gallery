document.addEventListener("DOMContentLoaded", function () {
    const tableFields = document.querySelector("table .fields");
    const plant = document.querySelector(".plants-headline")

  
    // Use addEventListener to handle pointerover
    tableFields.addEventListener("mouseover", function () {
      alert(`${plant.textContent} info.`);
    });
  });

  setInterval(setCounter, 1000
  );

  function setCounter() {
    // Your code here
    // Parameters are purely optional.
    const counterHtml = document.getElementById("counter");
    counterHtml.innerHTML = Number(counterHtml.textContent) + 1;
  };
  