let icon = document.querySelector("#icon");
icon.onclick = () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./images/sun.png";
  } else {
    icon.src = "./images/moon.png";
  }
};
