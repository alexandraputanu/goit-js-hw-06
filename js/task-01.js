// Selectăm toate elementele li cu clasa .item din ul#categories
const categories = document.querySelectorAll("ul#categories li.item");

// Afișăm în consolă numărul total de categorii
console.log("Number of categories:", categories.length);

// Parcurgem fiecare categorie și afișăm titlul și numărul de elemente din acea categorie
categories.forEach((category) => {
  // Selectăm titlul categoriei (elementul h2)
  const categoryTitle = category.querySelector("h2").textContent;

  // Selectăm toate elementele <li> din categoria curentă și numărăm câte sunt
  const elementsCount = category.querySelectorAll("ul li").length;

  // Afișăm în consolă titlul categoriei și numărul de elemente
  console.log("Category:", categoryTitle);
  console.log("Elements:", elementsCount);
});
