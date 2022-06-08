document.querySelector("#eraser").addEventListener("click", () => {
  document.querySelector("#groceryItems").textContent = "";
})

document.querySelector("#userInput").addEventListener("keydown", (event) => {
  if (event.key == "Enter")
    addItem();
});

addItem = () => {
  const item = document.createElement("h2")
  item.textContent = "- " + document.querySelector("#userInput").value;

  item.addEventListener("click", () => {
    item.style.textDecoration = item.style.textDecoration !== "line-through"
        ? "line-through"
        : "none";
  })

  document.querySelector("#groceryItems").appendChild(item);
  document.querySelector("#userInput").value = "";
}
