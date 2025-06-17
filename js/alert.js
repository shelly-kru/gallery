document.addEventListener("DOMContentLoaded", function () {
    const tableFields = document.querySelector("table .fields");
    const plant = document.querySelector(".plants-headline")

  
    // Use addEventListener to handle pointerover
    tableFields.addEventListener("pointerover", function () {
      alert(`${plant.textContent} info.`);
    });
  });