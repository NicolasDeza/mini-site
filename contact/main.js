import { renderFooter } from "/components/footer.js";
import { renderForm } from "/components/form";
import { renderNav } from "/components/nav.js";
import "/reset.css";
import "/style.css";

const app = document.getElementById("app");

app.innerHTML = `
  ${renderNav()}
 <h2>Contactez-nous via ce formulaire</h2>
 ${renderForm()}
<p></p>
${renderFooter()}

`;
