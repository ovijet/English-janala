let click = document.getElementById("btn");
click.addEventListener("click", () => {
  // console.log(click);
  let input = document.getElementById("input");
  let pass = document.getElementById("password");
  let value = input.value;
  let passV = pass.value;
  //   console.log(value);
  //   console.log(passV);

  if (value === "ovijit" && passV === "1234") {
    alert("login-success");
  } else {
    alert("login kor bokacoda ");
  }
});

let dataLoad = () => {
  let url = "https://openapi.programming-hero.com/api/levels/all";

  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data.data));
};
let lodeLabel = (id) => {
  let url = `https://openapi.programming-hero.com/api/level/ ${id}`;

  fetch(url)
    .then((btn) => btn.json())
    .then((re) => displayLabel(re.data));
};

// icon lode

// let load = (id) => {
//   let url = `https://openapi.programming-hero.com/api/words/${id}`;

//   fetch(url)
//     .then((rr) => rr.json())
//     .then((dd) => dis(dd.id));
// };
// let dis = (xx) => {
//   xx.forEach((item) => {
//     console.log(item);
//   });
// };

let displayLabel = (event) => {
  let wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  if (event.length == 0) {
    wordContainer.innerHTML = `

  <div class="text-center col-span-full py-3.5 space-y-2">
      <p class='text-sm font-bold'>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
      <h1 class="text-3xl font-bold">নেক্সট Lesson এ যান</h1>
    </div>
  
  `;
  }
  //   "id": 4,
  // "level": 5,
  // "word": "Diligent",
  // "meaning": "পরিশ্রমী",
  // "pronunciation": "ডিলিজেন্ট"
  event.forEach((event) => {
    // console.log(event);
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="bg-white px-2.5 py-7 text-center rounded-lg space-y-3">
        <h1 class="text-2xl font-bold">${event.word}</h1>
        <p>Meaning /Pronounciation</p>
        <p class="text-xl font-bold">"${event.meaning} / ${event.pronunciation}"</p>
        <div class="flex justify-between items-center">
          <button class="btn bg-[#1A91FF10]" onclick="load(${event.id})"><i class="fa-solid fa-info"></i></button>
          <button class="btn bg-[#1A91FF10]"><i class="fa-solid fa-m"></i></button>
        </div>
      </div>
    `;
    wordContainer.appendChild(div);
  });
};

//learn err 7ta btn fetch diya korlam
let display = (lode) => {
  //1get the container
  let labelContainer = document.getElementById("label-container");
  //2into the event loop
  lode.forEach((element) => {
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

dataLoad();
