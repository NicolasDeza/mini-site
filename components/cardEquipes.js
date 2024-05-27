export function renderCardEquipes(equipe) {
  return `
    
 
    <div class="equipe-container">
    <img src="${equipe.image}" alt="${equipe.name}" class="card-img">
    <h3 class="card-title">${equipe.name}</h3>
    <h4 class="card-poste">${equipe.poste}</h4>
    <p class="card-info">${equipe.description}</p>
        <div class="partie-inferieure">
        <i class="fab fa-instagram"></i>
         <i class="fab fa-twitter"></i>
         <i class="fab fa-facebook"></i>

        </div>
    </div>

    `;
}
