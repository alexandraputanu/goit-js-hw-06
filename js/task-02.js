const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Selectăm lista <ul> cu id-ul "ingredients"
const ingredientsList = document.getElementById("ingredients");

// Creăm un fragment de document pentru a adăuga toate <li>-urile
const fragment = document.createDocumentFragment();

// Parcurgem fiecare ingredient din matrice
ingredients.forEach((ingredient) => {
  // Creăm un element <li> pentru fiecare ingredient
  const li = document.createElement("li");

  // Setăm conținutul text al elementului <li> ca fiind numele ingredientului
  li.textContent = ingredient;

  // Adăugăm clasa "item" la elementul <li>
  li.classList.add("item");

  // Adăugăm elementul <li> la fragment
  fragment.appendChild(li);
});

// Adăugăm toate elementele <li> din fragment la lista <ul> dintr-o singură operație
ingredientsList.appendChild(fragment);
