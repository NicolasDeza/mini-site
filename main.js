import { renderFooter } from "/components/footer.js";
import { renderNav } from "/components/nav.js";
import "/style.css";

const app = document.getElementById("app");

app.innerHTML = `
  ${renderNav()}
  <div id="cover"></div>
  <section>
  <h2>Innovons pour un avenir durable</h2>
  </section>
  <section id="about">
    <h2>À Propos de Nous</h2>
    <p>EcoNexa Solutions se consacre à la création de technologies écologiques innovantes pour promouvoir un avenir durable. Nous croyons fermement que chaque petite action peut avoir un grand impact sur notre planète.</p>
  </section>


  
  ${renderFooter()}
`;
