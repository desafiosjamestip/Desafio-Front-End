//Será executada automaticamente
(function() {
    randomID()
})();

function randomID() {
    //Generates random iD
    var rand = Math.random().toString(26).substring(2, 10) + Math.random().toString(26).substring(2, 10);
    
    document.getElementById('productCode').value = rand
}

function addProduct() {
    const productCode = document.querySelector('#productCode').value
    const category = document.querySelector('#category').value
    const productname = document.querySelector('#productname').value
    const productPrice = document.querySelector('#productPrice').value

    const product = {
        id: productCode,
        category,
        productname,
        productPrice
    }
    
    const store = localStorage.getItem('products')

    let productList = []

    if(!store) {
        productList.push(product)
        localStorage.setItem('products',JSON.stringify(productList))
    } else {
        productList = JSON.parse(store)
        productList.push(product)
        localStorage.setItem('products',JSON.stringify(productList))
    }
}

