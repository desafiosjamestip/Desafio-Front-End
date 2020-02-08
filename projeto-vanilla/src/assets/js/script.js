//Será executada automaticamente
(function() {
    randomID()
})();

function randomID() {
    //Generates random iD
    var rand = Math.floor(Math.random()*(1000002 - 1 + 1)) + 1;
    
    document.getElementById('productCode').value = rand
}

function addProduct() {
    var frm = document.getElementById('formAddProduct');
    const productCode = document.querySelector('#productCode').value
    const category = document.querySelector('#category').value
    const productname = document.querySelector('#productname').value
    const providersname = document.querySelector('#providerName').value
    const productPrice = document.querySelector('#productPrice').value

    const product = {
        id: productCode,
        category,
        productname,
        providersname,
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
    frm.reset()
    randomID()
    alertify.success('Registered Product!')
}
