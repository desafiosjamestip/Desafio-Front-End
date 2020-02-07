//Será executada automaticamente
(function() {
    readProducts()
})();


function readProducts() {
    const products = JSON.parse(localStorage.getItem('products'))
    const table = document.querySelector('#product-items');

    //print the value of the local storage "database" key
    if (!products) {
        document.getElementById('product-items').innerHTML = "nothing stored"
    } else {
        table.innerHTML = products.map(function (product, index) {
            const id = product.id
            const category = product.category
            const name = product.productname
            const provider = product.providersname
            const price = product.productPrice

            const line = `
                <tr>
                    <td id="tdId">${id}</td>
                    <td id="tdCategory">${category}</td>
                    <td id="tdName">${name}</td>
                    <td id="tdProvider">${provider}</td>
                    <td id="tdPrice">R$ ${price}</td>
                    <td>
                        <div>
                            <button onclick="Update(${index})"><i class="fas fa-edit"></i>Editar</button>
                            <button onclick="Delete(${index})"><i class="fas fa-trash-alt"></i>Deletar</button>
                        </div>
                    </td>
                </tr>`
            return line
        }).join('')
    }
}


function filterProduct() {
    var input, filter, table, tr, td, i, txtValue

    input = document.getElementById("myInput")
    filter = input.value.toUpperCase()
    table = document.getElementById("product-items")
    tr = table.getElementsByTagName("tr")
    
    for (i = 0; i < tr.length; i++) {
        
      td = tr[i].getElementsByTagName("td")[2]
      
      if (td) {
        txtValue = td.textContent || td.innerText

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            console.log(txtValue.toUpperCase().indexOf(filter))
          tr[i].style.display = ""
        } else {
          tr[i].style.display = "none"
        }
      }       
    }
}