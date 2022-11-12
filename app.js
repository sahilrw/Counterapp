let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const events = e.currentTarget.classList;
    if (events.contains("reset")) {
      count = 0;
    } else if (events.contains("decrease")) {
      count--;
    } else {
      count++;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#000000";
    }
    value.textContent = count;
  });
});
