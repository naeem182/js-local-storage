const handleaddproduct = () => {
    const productField = document.getElementById('productN');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    console.log(product, quantity);
    productField.value = '';
    quantityField.value = '';
    showProduct(product, quantity)
    saveToLocalStorage(product, quantity)
}
const showProduct = (product, quantity) => {
    const ul = document.getElementById('product_container');;
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    ul.appendChild(li)
}

const storeShoopingCart = () => {
    let cart = {}
    const storeCart = localStorage.getItem('cart')
    if (storeCart) {
        cart = JSON.parse(storeCart)
    }
    return cart
}

const saveToLocalStorage = (product, quantity) => {

    const cart = storeShoopingCart()
    cart[product] = quantity;
    const cartStrigified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStrigified)

    console.log(cartStrigified)

}
const displayProductFromLocalStorage = () => {
    const savecart = storeShoopingCart()
    console.log(savecart)
    for (product in savecart) {
        console.log(product, savecart[product])//quantity=savecart[product]
        showProduct(product, savecart[product])
    }

}

displayProductFromLocalStorage()