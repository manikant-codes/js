function storeToLocalStorage(product) {
  let inventory = JSON.parse(localStorage.getItem("inventory"));

  if (!inventory) {
    inventory = [];
  }

  inventory.push(product);

  localStorage.setItem("inventory", JSON.stringify(inventory));
}

function updateToLocalStorage(product) {
  let inventory = JSON.parse(localStorage.getItem("inventory"));
  if (!inventory) {
    inventory = [];
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  inventory = inventory.map((value, index) => {
    if (value.id === Number(id)) {
      return product;
    }
    return value;
  });

  localStorage.setItem("inventory", JSON.stringify(inventory));
}

function handleSubmit(event) {
  event.preventDefault();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const product = {};

  product.id = id || Date.now();
  product.img = event.target["img"].value;
  product.name = event.target["name"].value;
  product.desc = event.target["desc"].value;
  product.price = Number(event.target["price"].value);
  product.qty = Number(event.target["qty"].value);

  if (id) {
    updateToLocalStorage(product);
  } else {
    storeToLocalStorage(product);
  }

  alert("Added Successfully!");

  event.target.reset();
}

function populateForm() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id) {
    const inventory = JSON.parse(localStorage.getItem("inventory"));
    const foundProduct = inventory.find((value, index) => {
      return value.id === Number(id);
    });

    if (foundProduct) {
      const inventoryForm = document.getElementById("inventory-form");
      inventoryForm["img"].value = foundProduct.img;
      inventoryForm["name"].value = foundProduct.name;
      inventoryForm["desc"].value = foundProduct.desc;
      inventoryForm["price"].value = foundProduct.price;
      inventoryForm["qty"].value = foundProduct.qty;
    }
  }
}

populateForm();
