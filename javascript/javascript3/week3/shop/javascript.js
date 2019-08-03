const modal = document.querySelector ('.modal');
const closeButton = document.querySelector ('.close-button');
const allProducts = [];
const errorMessage = document.querySelector ('.not-found-span');
const searchInput = document.querySelector ('input');
const purchaseButton = document.querySelector ('.purchase-button');
const inputButton = document.querySelector ('.input-button');
purchaseButton.addEventListener ('click', purchaseClicked);
inputButton.addEventListener ('click', openModalBySearchInput);
closeButton.addEventListener ('click', toggleModal);
window.addEventListener ('click', windowOnClick);
class Product {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }
}
function addProductsToArray () {
  const fathi = new Product (
    'Fathi',
    50,
  );
  const hygge = new Product (
    'hygge',
    3400,
  );
  const ons = new Product (
    'ons',
    450,
    
  );
  const onsons5 = new Product (
    'onsons5',
    643850,
  
  );
  const hackyourfuture= new Product (
    'hackyourfuture',
    5076,
  );
  const onsons = new Product (
    'onsons',
    58954698,
  );
  allProducts.push (onsons, hackyourfuture, onsons5, ons, hygge, fathi);
  return allProducts;
}
addProductsToArray ();

class ShoppingCart {
  constructor (products) {
    this.products = products;
  }

  addProduct (productName, productPrice) {
    let exists = Boolean;
    for (let i = 0; i < this.products.length; i++) {
      console.log (this.products[i].name);
      if (this.products[i].name === productName) {
        exists = true;
      }
    }

    if (exists === true) {
      alert ('det vil blive fordoblet Monseur');
    } else {
      this.products.push ({
        name: productName,
        price: productPrice,
      });
      this.renderProducts (productName, productPrice);
    }
  }

  removeProduct (productName, event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove ();
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === productName) {
        this.products.splice (i, 1);
      }

      if (!this.products[i]) {
        purchaseButton.style.display = 'none';
      }
    }
    updateCartTotal ();
  }

  removeAllProducts () {
    this.products = [];
    console.log (this.producst);
  }
  getTotal () {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      const priceElement = this.products[i].price;
      const priceInNumbers = parseInt (priceElement);
      total += priceInNumbers;
    }
    return total;
  }

  renderProducts (itemName, itemPrice, itemUrl) {
    const newShoppingCart = this;
    const nameOfItem = itemName;
    const li = document.createElement ('li');
    const cartRowContents = `
            <div class="cart-item cart-column">
                <img class ="cart-item-image" alt="img" src="${itemUrl}" >
                <span class="cart-item-title">${itemName}</span>
                <span class="cart-item-price">${itemPrice}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="1">
                    <button class="btn btn-danger" type="button">Slet</button>
                </div>
                
            </div>`;
    li.innerHTML = cartRowContents;
    const shoppingcartUl = document.querySelector ('.shoppingcart-ul');
    shoppingcartUl.appendChild (li);
    li
      .getElementsByClassName ('btn-danger')[0]
      .addEventListener ('click', function () {
        newShoppingCart.removeProduct (nameOfItem, event);
      });
    li
      .getElementsByClassName ('cart-quantity-input')[0]
      .addEventListener ('change', quantityChanged);

    const cartTotal = document.querySelector('.cart-total');
    cartTotal.style.display = 'block';
    updateCartTotal ();
    this.getUser ();
  }
 getUser () {
    let userName;
    const usernameDisplay = document.querySelector ('.username');
    fetch ('https://jsonplaceholder.typicode.com/users/1')
      .then (response => response.json ())
      .then (json => {
        userName = json.username;
        return userName;
      })
      .then (userName => {
        if (!userName) {
          console.log ('nemjó');
        } else {
          usernameDisplay.innerHTML = 'kurven af Fathi' + userName;
        }
      })
      .catch (error => {
        console.log (error);
        usernameDisplay.innerHTML = 'ingen profilnavn.';
      });
  }
}

let newShoppingCart = new ShoppingCart ([]);

function renderProducts (products) {
  for (let i = 0; i < products.length; i++) {
    const shopItem = document.createElement ('li');
    const allProductsUl = document.querySelector ('.all-products');
    allProductsUl.appendChild (shopItem);
    
    const itemContainer = document.createElement ('div');
    itemContainer.className = 'product-item-container';
    shopItem.appendChild (itemContainer);
    
    const itemImage = document.createElement ('img');
    itemImage.className = 'item-image';
    itemImage.src = products[i].url;
    itemContainer.appendChild (itemImage);

    const itemName = document.createElement ('span');
    itemName.className = 'item-name';
    itemName.innerText = products[i].name;
    itemContainer.appendChild (itemName);
    
    
    const itemPrice = document.createElement ('span');
    itemPrice.className = 'item-price';
    itemPrice.innerText = products[i].price;
    itemContainer.appendChild (itemPrice);
    const itemCurrency = document.createElement('span');
    itemCurrency.innerHTML = 'DKK';
    itemCurrency.className = 'item-currency';
    itemContainer.appendChild(itemCurrency);
  
    const addItemToCartButton = document.createElement ('button');
    addItemToCartButton.className = 'add-item-button'
    addItemToCartButton.innerHTML = 'tilføj';
    itemContainer.appendChild (addItemToCartButton);
    addItemToCartButton.addEventListener ('click', addToCartClicked);
  }
}

renderProducts (allProducts);


function addToCartClicked (event) {
  const button = event.target;
  const shopItem = button.parentElement.parentElement;
  const title = shopItem.getElementsByClassName ('item-name')[0].innerText;
  const price = shopItem.getElementsByClassName ('item-price')[0].innerText;
  const imageSrc = shopItem.getElementsByClassName ('item-image')[0].src;
  
  newShoppingCart.addProduct (title, price, imageSrc);
  updateCartTotal ();
  
  purchaseButton.style.display = 'block';
}

function quantityChanged (event) {
  const input = event.target;
  if (isNaN (input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal ();
}

function updateCartTotal () {
  const newPrice = newShoppingCart.getTotal ();
  const cartTotalPrice = document.querySelector ('.cart-total-price');
  cartTotalPrice.innerText = newPrice;
}


function purchaseClicked () {
  alert ('vi takker');
  const cartItems = document.querySelector ('.cart-items');
  while (cartItems.hasChildNodes ()) {
    cartItems.removeChild (cartItems.firstChild);
  }
  newShoppingCart.removeAllProducts ();
  updateCartTotal ();
}


function openModalBySearchInput () {
  const searchInputValue = document.querySelector ('input').value;
  let matchedProductDescription;
  let matchedProduct;
  let matchedProductPriceInModal;
  const addToCartButtonInProductInfo = document.querySelector (
    '#add-to-cart-in-product-info'
  );

  for (let i = 0; i < allProducts.length; i++) {
    if (searchInputValue === allProducts[i].name) {
      matchedProduct = allProducts[i].name;
      matchedProductDescription = allProducts[i].description;
      matchedProductPriceInModal = allProducts[i].price;
      addedProduct = allProducts[i];
      productUrl = allProducts[i].url;
    }

    if (!searchInputValue || searchInputValue !== allProducts[i].name) {
      errorMessage.style.display = 'inline-block';
    }
  }

  addToCartButtonInProductInfo.addEventListener ('click', function () {

    newShoppingCart.addProduct (
      matchedProduct,
      matchedProductPriceInModal,
      productUrl
    );
  });

  const imageUrl = document.querySelector ('.modal img');
  imageUrl.src = productUrl;

  const productTitle = document.querySelector ('h4');
  productTitle.innerHTML = matchedProduct.toUpperCase ();

  const productDescription = document.querySelector ('p');
  productDescription.innerHTML = matchedProductDescription;

  const productPriceInModal = document.querySelector ('h5');
  productPriceInModal.innerHTML = 'Price: ' + matchedProductPriceInModal;


  toggleModal ();
}


searchInput.addEventListener ('keypress', function () {
  errorMessage.style.display = 'none';
});


function toggleModal () {
  modal.classList.toggle ('show-modal');
}

function windowOnClick (event) {
  if (event.target === modal) {
    toggleModal ();
  }
}


function closeModal (modal) {
  modal.style.display = 'none';
}