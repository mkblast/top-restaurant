function createHome() {
  const render = document.getElementById("render");
  render.innerHTML = ''

  const h1 = document.createElement('header');
  h1.textContent = "negga";
  render.appendChild(h1)
}

export { createHome }
