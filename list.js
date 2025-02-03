window.addEventListener("load", getData);

const productlist = document.querySelector(".productlist_flex");
let url = `https://kea-alt-del.dk/t7/api/products/`;

function getData() {
  console.log("getData");
  fetch(url).then((response) => response.json().then((data) => showProducts(data)));
}

function showProducts(data) {
  // map = gør man kan loope oplysningerne, så det bliver én lang streg af html når man bruger join
  const markup = data
    .map(
      (product) =>
        `<a href="product.html?id=${product.id}">
          <div class="product_card">
            <img
              class="product_img_card"
              src="${`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`}"
            />
            <h3 class="product_title_card">${product.productdisplayname}</h3>
            <h3 class="product_price_card">${product.price} DKK</h3>
          </div>
        </a>`
    )
    .join("");

  productlist.innerHTML = markup;
}

// ${product.discount ? `<h3 class="product_sale_card">${product.discount} DKK</h3>`} : ""}
