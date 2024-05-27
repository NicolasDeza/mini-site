import { renderCard } from "/components/card";
import { renderFooter } from "/components/footer.js";
import { renderNav } from "/components/nav.js";
import "/reset.css";
import "/style.css";

const app = document.getElementById("app");

// importer les données via fetch
async function callUser() {
  const url = "/users.json";
  const callUrl = await fetch(url);
  const json = await callUrl.json();
  // bouce map sur le tableau en json
  const cardsHTML = json.map((user) => renderCard(user)).join("");

  app.innerHTML = `
  ${renderNav()}
  <div id="cards-container">${cardsHTML}</div>
  ${renderFooter()}

`;
}
// Appel de la fonction
callUser();
