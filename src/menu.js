function createMenu() {
  const render = document.getElementById("render");
  render.innerHTML = ''

  const h1 = document.createElement('header');
  h1.textContent = "negga2";
  render.appendChild(h1)
}

export { createMenu }
