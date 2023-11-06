const productCards = document.querySelector('.cards')
const basketCarts = document.querySelector('.basket_carts')
const subtotal = document.querySelector('.subtotal')

const baseUrl = 'http://localhost:3000/products'

//initial declaration
let basketArr = []
if (getLocalStorage('product')) {
  basketArr = getLocalStorage('product')
  // addBasketCart(basketArr)
  generateBasketCards()
}

//Local Storage functions
function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || []
}

//create Product Cart
function createProductCart(data) {
  data.forEach(productProperty => {
    const productCard = document.createElement('div')
    productCard.innerHTML = `
    <div class="product_card_content">
        <div class="card_img-actions">
            <div class="card_img"> 
                <img src=${productProperty.productImage} alt="">
            </div>
            <div class="product_action">
                <ul class="d-flex gap-1 ps-2" >
                    <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa-regular fa-eye"></i></a></li>
                    <li><a href="#" class="addCartBtn"><i class="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
            </div>
        </div>

        <div class="product_text_content">
            <div class="product_name">
                <a href="">${productProperty.productName}</a>
            </div>
            <div class="product_price">
                <span>$${productProperty.productPrice}</span>
            </div>
            <div class="product_rating">
                <ul class="d-flex text-center gap-2">
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                </ul>
            </div>
        </div>
    </div>
    `

    productCard.querySelector('.addCartBtn').addEventListener('click', e => {
      e.preventDefault()
      if (basketArr.find(item => item.id === productProperty.id)) {
        return
      }
      //   basketArr.push(productProperty);

      basketArr.push({
        id: productProperty.id,
        productImage: productProperty.productImage,
        productName: productProperty.productName,
        productPrice: productProperty.productPrice,
        productCount:1
      })

        bascetCount.textContent = parseInt(bascetCount.textContent) + 1


      setLocalStorage('product', basketArr)
      generateBasketCards()
    })

    // console.log(basketArr)

    productCard.classList.add(
      'product_card',
      'col-12',
      'col-sm-6',
      'col-md-4',
      'col-lg-3'
    )
    productCards.appendChild(productCard)
  })
}



function getSubtotal(locBasketArr) {
    let totalSum = 0;
    locBasketArr.forEach(productItem => {
        totalSum += productItem.productPrice * productItem.productCount;
    });
    return totalSum;
}

function updateSubtotal(locBasketArr) {
    const subtotalElement = document.querySelector('.subtotal');
    if (subtotalElement) {
        const total = getSubtotal(locBasketArr);
        subtotalElement.textContent = total.toFixed(2);
    } else {
        console.error('Subtotal element not found.');
    }
}

//addBasket
function addBasketCart(locBasketArr) {
  basketCarts.innerHTML = ''

  locBasketArr.forEach(productItem => {
    const basketCart = document.createElement('div')
    // console.log(productItem);
    basketCart.innerHTML = `
            <div class="cart_img">
                <img src=${productItem.productImage} alt="">
            </div>

            <div class="cart_content">
                <h6>${productItem.productName}</h6>
                <div>
                    <span class="item_count">${productItem.productCount}</span>
                    <span>x</span>
                    <span class="item_price">$${productItem.productPrice}</span>
                </div>
            </div>

            <div class="item_remove">
                <i class="fa-solid fa-x"></i>
            </div>
            `

    const removeButton = basketCart.querySelector('.item_remove')
    removeButton.addEventListener('click', e => {
      e.preventDefault()
      basketArr = basketArr.filter(x => x.id !== productItem.id)
      setLocalStorage('product', basketArr)
      basketCarts.innerHTML = ''
    //   generateBasketCards()
      addBasketCart(basketArr)
    })


    function getSubtotal() {
        let totalSum = 0
        totalSum += productItem.productPrice * productItem.count
       subtotal.textContent = Math.floor(totalSum)
    }

    getSubtotal()
    basketCart.classList.add('basket_cart')
    basketCarts.appendChild(basketCart)
  })

  updateSubtotal(locBasketArr);
}

// get product data
function getProductData() {
  axios
    .get(baseUrl)
    .then(response => {
      createProductCart(response.data)
    })
    .catch(error => {
      console.error('Error: ', error)
    })
}

function generateBasketCards() {
  addBasketCart(basketArr)
//   getSubtotal(basketArr)
}




getProductData()
generateBasketCards()