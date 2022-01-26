// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
  } else {
    progressBar.classList.remove("hide");
    if (event.detail.totalProgress === 0) {
      event.target.querySelector(".center-pre-prompt").classList.add("hide");
    }
  }
};
document.querySelector("model-viewer").addEventListener("progress", onProgress);

function getData() {
  const l1 = new Date().toLocaleString("en-UK", { timeZone: "Europe/Berlin" });
  const l2 = new Date().toLocaleString("en-UK", { timeZone: "Asia/Kolkata" });
  const l3 = new Date().toLocaleString("en-UK", { timeZone: "Australia/Sydney" });
  const l4 = new Date().toLocaleString("en-UK", { timeZone: "America/Sao_Paulo" });
  const l5 = new Date().toLocaleString("en-UK", { timeZone: "America/New_York" });
  const l6 = new Date().toLocaleString("en-UK", { timeZone: "America/Mexico_City" });
  const l7 = new Date().toLocaleString("en-UK", { timeZone: "America/Los_Angeles" });
  const l8 = new Date().toLocaleString("en-UK", { timeZone: "America/New_York" });
  const l9 = new Date().toLocaleString("en-UK", { timeZone: "America/Denver" });
  const l10 = new Date().toLocaleString("en-UK", { timeZone: "Africa/Johannesburg" });
  const l11 = new Date().toLocaleString("en-UK", { timeZone: "Europe/Madrid" });
  const l12 = new Date().toLocaleString("en-UK", { timeZone: "Asia/Dubai" });
  const l13 = new Date().toLocaleString("en-UK", { timeZone: "Asia/Shanghai" });
  const l14 = new Date().toLocaleString("en-UK", { timeZone: "Europe/Moscow" });

  document.getElementById("location1").textContent = "Berlin\n" + l1;
  document.getElementById("location2").textContent = "Delhi\n" + l2;
  document.getElementById("location3").textContent = "Sydney\n" + l3;
  document.getElementById("location4").textContent = "Brasilia\n" + l4;
  document.getElementById("location5").textContent = "Quito\n" + l5;
  document.getElementById("location6").textContent = "Mexico City\n" + l6;
  document.getElementById("location7").textContent = "San Francisco\n" + l7;
  document.getElementById("location8").textContent = "New York\n" + l8;
  document.getElementById("location9").textContent = "Denver\n" + l9;
  document.getElementById("location10").textContent = "Pretoria\n" + l10;
  document.getElementById("location11").textContent = "Rabat\n" + l11;
  document.getElementById("location12").textContent = "Abu Dhabi\n" + l12;
  document.getElementById("location13").textContent = "Beijing\n" + l13;
  document.getElementById("location14").textContent = "Moscow\n" + l14;
}
setInterval(function () {
  getData();
}, 1000);

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var model_viewer_id = document.getElementById("model_viewer_element");

span.onclick = function () {
  modal.style.display = "none";
  model_viewer_id.classList.remove("blur_filter");
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    model_viewer_id.classList.remove("blur_filter");
  }
};

function openModal() {
  modal.style.display = "block";
}

var last_element = document.getElementById("location1");
var current_element;

function visibilityToggle(val) {
  last_element.style.display = "none";
  current_element = document.getElementById("location" + val.split("-")[1]);
  current_element.style.display = "block";
  last_element = current_element;
}
