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
                <tr class="product-row" data-index="${index}" data-editing="false">
                    <td>${id}</td>
                    <td class="product-category editable">${category}</td>
                    <td class="product-name editable">${name}</td>
                    <td class="product-provider editable">${provider}</td>
                    <td class="product-price editable">R$ ${price}</td>
                    <td class="row-buttons">
                        <div>
                            <button class='edit-product-btn' onclick="Update(${index})"><i class="fas fa-edit"></i>Editar</button>
                            <button class='delete-product-btn' onclick="deleteProduct(${index})"><i class="fas fa-trash-alt"></i>Deletar</button>
                        </div>
                    </td>
                </tr>`
            return line
        }).join('')
    }
}

function Update(index) {
    const tableRow = document.querySelector(`#product-items tr[data-index="${index}"]`);
    const isEditing = !(tableRow.dataset.editing === 'false' ? false : true);
    tableRow.dataset.editing = isEditing.toString();
  
    tableRow
      .querySelectorAll(`.editable`)
      .forEach((el) => el.contentEditable = isEditing ? 'true' : 'false');
  
   const editBtn = tableRow.querySelector('.edit-product-btn');
   editBtn.innerHTML = `<i class="fas fa-${isEditing ? 'save' : 'edit'}"></i> ${isEditing ? 'Salvar' : 'Editar'}`;
   editBtn.onclick = () => {
     if (isEditing) {
        saveProducts(index);
     } else {
       Update(index);
     }
   }
}

function saveProducts(index) {
    const products = JSON.parse(localStorage.getItem('products'))

    const productname = document.querySelector(`tr[data-index="${index}"] .product-name`).innerHTML
    const providersname = document.querySelector(`tr[data-index="${index}"] .product-provider`).innerHTML
    const productPrice = document.querySelector(`tr[data-index="${index}"] .product-price`).innerHTML

    
    products[index]['productname'] = productname
    products[index]['providersname'] = providersname
    products[index]['productPrice'] = productPrice

    localStorage.setItem('products', JSON.stringify(products))
    console.log(products[index])
    Update(index);
    alertify.success('Product Updated!')
}

function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem('products'))

    products.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(products))

    alertify.error('Product Deleted!')
    readProducts()
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
          tr[i].style.display = ""
        } else {
          tr[i].style.display = "none"
        }
      }       
    }
}