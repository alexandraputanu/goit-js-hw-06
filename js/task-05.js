// Selectați elementele relevante din DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Funcție pentru actualizarea interfeței cu valoarea curentă din input
const updateNameOutput = () => {
  // Dacă input-ul este gol, se afișează "Anonymous"
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    // Altfel, se afișează valoarea curentă din input
    nameOutput.textContent = nameInput.value;
  }
};

// Adăugați un handler de input pe câmpul de text
nameInput.addEventListener("input", updateNameOutput);
