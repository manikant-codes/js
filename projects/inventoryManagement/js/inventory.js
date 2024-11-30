const productsContainer = document.getElementById("products-container");

function renderInventory() {
  const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

  let html = "";

  inventory.forEach((product, index, array) => {
    html += `
            <div class="product-card">
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}" />
                    <button class="edit-btn" onclick="handleEdit(${
                      product.id
                    })"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete-btn" onclick="handleDelete(${
                      product.id
                    })"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="product-desc">
                    <div class="product-title-price">
                        <h3>${product.name}</h3>
                        <p class="product-price">₹${product.price.toLocaleString(
                          "en-in"
                        )}</p>
                    </div>
                    <p class="desc">${product.desc}</p>
                    <div class="actions">
                        <button onclick="handleRestock(${
                          product.id
                        })" class="btn-small">Restock</button>
                        <p>${product.qty}</p>
                        <button onclick="handleSell(${
                          product.id
                        })" class="btn-small">Sell</button>
                    </div>
                </div>
            </div>
        `;
  });

  productsContainer.innerHTML = html;
}

function handleRestock(id) {
  const inventory = JSON.parse(localStorage.getItem("inventory"));

  const foundProduct = inventory.find((product) => {
    return product.id === id;
  });

  foundProduct.qty++;

  localStorage.setItem("inventory", JSON.stringify(inventory));

  renderInventory();
}

function handleSell(id) {
  const inventory = JSON.parse(localStorage.getItem("inventory"));
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const foundProductInventory = inventory.find((product) => {
    return product.id === id;
  });

  if (foundProductInventory.qty > 0) {
    foundProductInventory.qty--;
  }

  const product = { ...foundProductInventory };
  product.qty = 1;
  product.orderDate = new Date();
  orders.push(product);

  localStorage.setItem("inventory", JSON.stringify(inventory));
  localStorage.setItem("orders", JSON.stringify(orders));

  renderInventory();
}

function handleDelete(id) {
  const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
  const updatedInventory = inventory.filter(function (product, index, array) {
    if (product.id === id) {
      return false;
    }
    return true;
  });
  localStorage.setItem("inventory", JSON.stringify(updatedInventory));
  renderInventory();
}

function handleEdit(id) {
  navigation.navigate(
    `http://127.0.0.1:5501/projects/inventoryManagement/addUpdateForm.html?id=${id}`
  );
}

renderInventory();

// handle del btn click
// get product id
// delete that product form local storage
// re-render the list

// handle edit click
// load add update inventory form
// fill the form with product details
// store the updated product in local storage
