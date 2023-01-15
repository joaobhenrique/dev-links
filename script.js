function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if (img) {
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/avatar-light.png");
      img.setAttribute("alt", "Foto 2 de João Henrique.");
    } else {
      img.setAttribute("src", "./assets/avatar.png");
      img.setAttribute("alt", "Foto 1 de João Henrique.");
    }
  }
}
