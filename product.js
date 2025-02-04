window.addEventListener("load", getData);

const productGrid = document.querySelector("#product_grid");
const id = new URLSearchParams(window.location.search).get("id");

let url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getData() {
  console.log("getData");
  fetch(url).then((response) => response.json().then((data) => show(data)));
}

function show(data) {
  console.log(data);
  productGrid.innerHTML = `<img
          class="product_big_picture"
          src="${`https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`}"
          alt="picture of black fleece jacket"
        />
        <h3 class="product_title">${data.productdisplayname}</h3>
        <h3 class="product_price">${data.price} DKK</h3>
         <h4 class="product_size">SIZE</h4>
        <div id="sizebox_flex">
          <div class="sizebox">
            <p>34</p>
          </div>
          <div class="sizebox">
            <p>36</p>
          </div>
          <div class="sizebox">
            <p>38</p>
          </div>
          <div class="sizebox">
            <p>40</p>
          </div>
          <div class="sizebox">
            <p>42</p>
          </div>
          <div class="sizebox">
            <p>44</p>
          </div>
        </div>
        <div id="add_to_bag">
          <p>ADD TO BAG</p>
        </div>
        <div id="product_description">
          <p>${data.description}</p>
        </div>
        `;
}
