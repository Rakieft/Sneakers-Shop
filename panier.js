let panier = [];

// Fonction pour ajouter un produit au panier
function ajouterAuPanier(produit) {
    panier.push(produit);
    mettreAJourPanier();
}

// Fonction pour mettre à jour l'icône du panier
function mettreAJourPanier() {
    const panierCount = document.getElementById('panier-count');
    panierCount.textContent = panier.length;  // Mise à jour du nombre d'articles dans le panier
}

// Fonction appelée lorsque l'utilisateur clique sur "Commander"
document.querySelectorAll('.commander-btn').forEach(button => {
    button.addEventListener('click', function() {
        const produit = {
            nom: this.previousElementSibling.previousElementSibling.textContent,  // Nom du produit
            prix: this.previousElementSibling.textContent.split(": ")[1],  // Prix du produit
            taille: this.previousElementSibling.previousElementSibling.previousElementSibling.textContent.split(": ")[1]  // Taille
        };
        ajouterAuPanier(produit);
    });
});

// Fonction pour afficher le contenu du panier
function afficherPanier() {
    const panierDetails = document.getElementById('panier-details');
    panierDetails.innerHTML = '';  // Réinitialiser le panier avant d'ajouter les articles
    panier.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.nom} - ${item.taille} - ${item.prix}€`;
        panierDetails.appendChild(itemDiv);
    });
}

// Exemple d'ouverture du panier (en cliquant sur l'icône du panier)
document.querySelector('.panier').addEventListener('click', afficherPanier);
