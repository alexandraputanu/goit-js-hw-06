// Selectați elementul input relevant din DOM
const validationInput = document.getElementById("validation-input");

// Funcție pentru a verifica lungimea textului din input
const validateInput = () => {
  // Obțineți lungimea dorită din atributul data-length
  const requiredLength = parseInt(
    validationInput.getAttribute("data-length"),
    10
  );

  // Verificați dacă lungimea textului introdus corespunde lungimii dorite
  if (validationInput.value.length === requiredLength) {
    // Adăugați clasa valid și eliminați clasa invalid
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    // Adăugați clasa invalid și eliminați clasa valid
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};

// Adăugați un handler pentru evenimentul blur pe câmpul de input
validationInput.addEventListener("blur", validateInput);
