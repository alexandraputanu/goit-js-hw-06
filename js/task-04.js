// Declarați variabila counterValue și inițializați-o cu 0
let counterValue = 0;

// Selectați elementele relevante din DOM
const valueSpan = document.getElementById("value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

// Funcție pentru actualizarea interfeței cu noua valoare a counterValue
const updateUI = () => {
  valueSpan.textContent = counterValue;
};

// Adăugați click handler pe butonul de decrementare
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateUI();
});

// Adăugați click handler pe butonul de incrementare
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateUI();
});
