import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const content = document.querySelector("#content");

const renderHome = document.createElement("div");
renderHome.setAttribute("id", "render");
document.body.appendChild(renderHome);

class siteTabes {
  constructor(tabName, tabLink, tabClass) {
    this.tabName = tabName;
    this.tabLink = tabLink;
    this.tabClass = tabClass;
  }
}

const tabes = [
  new siteTabes("Home", createHome, "home"),
  new siteTabes("Menu", createMenu, "menu"),
  new siteTabes("Contact", createContact, "contact"),
]

for (let i = 0; i < tabes.length; i++) {
  const button = document.createElement("button");
  button.textContent = tabes[i].tabName;
  button.classList.add(tabes[i].tabClass);
  button.addEventListener("click", tabes[i].tabLink);
  content.appendChild(button)
}

createHome();
