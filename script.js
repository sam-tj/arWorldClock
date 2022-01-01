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
  const l1 = new Date().toLocaleString("en-UK", {
    timeZone: "Europe/Berlin",
  });
  const l2 = new Date().toLocaleString("en-UK", {
    timeZone: "Asia/Kolkata",
  });
  const l3 = new Date().toLocaleString("en-UK", {
    timeZone: "Australia/Sydney",
  });
  document.getElementById("location1").textContent = "Berlin\n" + l1;
  document.getElementById("location2").textContent = "Delhi\n" + l2;
  document.getElementById("location3").textContent = "Sydney\n" + l3;
  // console.log(d1);
}
setInterval(function () {
  getData();
}, 1000);
