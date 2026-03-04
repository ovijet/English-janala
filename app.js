let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let input = document.getElementById("input");
  let inputValue = input.value;
  // console.log(inputValue);
  let password = document.getElementById("password");
  let passV = password.value;
  // console.log(passV);
  if (inputValue === "ovijit" && passV === "1234") {
    alert("login successful");
  } else {
    alert("tu gar mara ga");
  }
});

let dataLode = () => {
  let url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data.data));
};
let display = (label) => {
  let labelContainer = document.getElementById("label-container");
  // labelContainer.innerHTML=''
  label.forEach((element) => {
    // console.log(element);
    let div = document.createElement("div");
    div.innerHTML = `
    <button onclick='lodeLabel(${element.level_no})' class="btn text-blue-600 border border-blue-500">
            learn -${element.level_no}
          </button>
    `;
    labelContainer.appendChild(div);
  });
};
// card
let lodeLabel = (id) => {
  let url = `https://openapi.programming-hero.com/api/level/ ${id}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((lod) => displayCard(lod.data));
};
let displayCard = (card) => {
  let wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  card.forEach((element) => {
    let p = document.createElement("div");
    p.innerHTML = `
        <div class="bg-white px-2.5 py-7 text-center rounded-lg space-y-3">
        <h1 class="text-2xl font-bold">${element.word}</h1>
        <p>Meaning /Pronounciation</p>
        <p class="text-xl font-bold">"${element.meaning} / ${element.pronunciation}"</p>
        <div class="flex justify-between items-center">
          <button class="btn bg-[#1A91FF10]"><i class="fa-solid fa-info"></i></button>
          <button class="btn bg-[#1A91FF10]"><i class="fa-solid fa-m"></i></button>
        </div>
      </div>
        `;
    wordContainer.appendChild(p);
  });
};

dataLode();
