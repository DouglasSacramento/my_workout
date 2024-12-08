/* VARIÁVEIS */
const workouts = document.querySelector(".hide");
const goBack = document.getElementById("icon-home");
const pageHome = document.getElementById("page-home");
const pageFullbody = document.getElementById("page-fullbody");
const goWorkout = document.getElementById("btn-ok");
let select = document.querySelector("#workout-select");
const itens = document.querySelectorAll(".workouts i");

/* FUNÇÔES */
function startWorkout(event) {/* VARIÁVEIS */
const workouts = document.querySelector(".hide");
const goBack = document.getElementById("icon-home");
const pageHome = document.getElementById("page-home");
const pageFullbody = document.getElementById("page-fullbody");
const goWorkout = document.getElementById("btn-ok");
let select = document.querySelector("#workout-select");
const itens = document.querySelectorAll(".workouts i");

/* FUNÇÔES */
function startWorkout(event) {
  const idValue = event.target.id;
  const value = event.target;
  const numberWorkout = `ph-number-circle-${idValue}`;

  if (value.classList.contains(numberWorkout)) {
    yesChecked(value, numberWorkout);
  } else if (value.classList.contains("ph-check-fat")) {
    noChecked(value, numberWorkout);
  }
}

function yesChecked(value, numberWorkout) {
  value.classList.remove(numberWorkout);
  value.classList.add("ph-check-fat");
}

function noChecked(value, numberWorkout) {
  value.classList.remove("ph-check-fat");
  value.classList.add(numberWorkout);
}

/* EVENTOS */
workouts.addEventListener("click", function (event) {
  startWorkout(event);
});

goBack.addEventListener("click", () => {
  pageFullbody.classList.remove("card");
  pageFullbody.classList.add("hide");

  pageHome.classList.remove("hide");
  pageHome.classList.add("card");
});

goWorkout.addEventListener("click", (event) => {
  if (select.value === "fullbody") {
    pageHome.classList.remove("card");
    pageHome.classList.add("hide");

    pageFullbody.classList.remove("hide");
    pageFullbody.classList.add("card");
  }
});

  const idValue = event.target.id;
  const value = event.target;
  const numberWorkout = `ph-number-circle-${idValue}`;

  if (value.classList.contains(numberWorkout)) {
    yesChecked(value, numberWorkout);
  } else if (value.classList.contains("ph-check")) {
    noChecked(value, numberWorkout);
  }
}

function yesChecked(value, numberWorkout) {
  value.classList.remove(numberWorkout);
  value.classList.add("ph-check");
}

function noChecked(value, numberWorkout) {
  value.classList.remove("ph-check");
  value.classList.add(numberWorkout);
}

/* EVENTOS */
workouts.addEventListener("click", function (event) {
  startWorkout(event);
});

goBack.addEventListener("click", () => {
  pageFullbody.classList.remove("card");
  pageFullbody.classList.add("hide");

  pageHome.classList.remove("hide");
  pageHome.classList.add("card");
});

goWorkout.addEventListener("click", (event) => {
  if (select.value === "fullbody") {
    pageHome.classList.remove("card");
    pageHome.classList.add("hide");

    pageFullbody.classList.remove("hide");
    pageFullbody.classList.add("card");
  }
});
