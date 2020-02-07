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