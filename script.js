let input = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  if (input.value.trim() != "") {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
    result.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(span);

    li.innerText = input.value;
    input.value = "";
    ul.addEventListener("click", () => {
      li.style.color = "red";
      li.style.textDecoration = "line-through";
    });
    span.addEventListener("click", () => {
      result.removeChild(ul);
    });
  } else {
    alert("please enter your to-do!");
  }
});
