function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const controls = document.getElementById("controls");
  const boxes = document.getElementById("boxes");
  const input = controls.querySelector("input");
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");

  createButton.addEventListener("click", () => {
    const amount = Number(input.value);
    createBoxes(amount);
  });

  destroyButton.addEventListener("click", destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes();
    const fragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.marginTop = "10px";
      fragment.appendChild(div);
      size += 10;
    }

    boxes.appendChild(fragment);
  }

  function destroyBoxes() {
    boxes.innerHTML = "";
  }
});
