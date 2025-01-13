// Sélection des éléments importants
const cartCountElement = document.querySelector('.cart-count');
const cartItems = [];

// Fonction pour ajouter un produit au panier
function addToCart(productCard) {
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('.price').textContent;
    const productSize = productCard.querySelector('p:nth-child(4)').textContent;
    const productImage = productCard.querySelector('img').src;

    // Création de l'objet produit
    const product = {
        name: productName,
        price: productPrice,
        size: productSize,
        image: productImage,
    };

    // Ajouter au tableau du panier
    cartItems.push(product);

    // Mettre à jour le compteur du panier
    updateCartCount();

    // Afficher un message de confirmation
    alert(`${productName} a été ajouté au panier !`);
}

// Fonction pour mettre à jour le compteur du panier
function updateCartCount() {
    cartCountElement.textContent = cartItems.length;
}

// Fonction pour afficher les détails du panier
function showCartDetails() {
    if (cartItems.length === 0) {
        alert("Votre panier est vide.");
        return;
    }

    let cartDetails = "Voici votre panier :\n\n";
    cartItems.forEach((item, index) => {
        cartDetails += `${index + 1}. ${item.name} - ${item.price} - ${item.size}\n`;
    });

    alert(cartDetails);
}

// Ajout des événements aux boutons "Commander"
document.querySelectorAll('.product-card button').forEach((button) => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        addToCart(productCard);
    });
});

// Ajout d'un événement au clic sur l'icône du panier pour afficher les détails
document.querySelector('.cart-icon').addEventListener('click', showCartDetails);
