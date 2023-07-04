function createContact() {
  const render = document.getElementById("render");
  render.innerHTML = ''

  const h1 = document.createElement('header');
  h1.textContent = "negga3";
  render.appendChild(h1)
}

export { createContact }
