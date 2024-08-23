document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#container");

  const pRed = document.createElement("p");
  pRed.style.color = "red";
  pRed.textContent = "Hey I'm red!";

  const h3Blue = document.createElement("h3");
  h3Blue.style.color = "blue";
  h3Blue.textContent = "I'm a blue h3!"

  const div = document.createElement("div");
  div.style.cssText = "border: black; background: pink;";
  const h1 = document.createElement("h1");
  h1.textContent = "I'm in a div";
  const p = document.createElement("p");
  p.textContent = "ME TOO!";
  div.appendChild(h1);
  div.appendChild(p);


  container.appendChild(pRed);
  container.appendChild(h3Blue);
  container.appendChild(div);

  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    alert("Hello World");
  });
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}