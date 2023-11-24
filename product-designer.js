let productData = []; // Initialize as an empty array

// Fetch data from the JSON file
fetch('design-product-data.json')
    .then(response =>
        response.json()
    )
    .then(data => {
        // Store the fetched data in the productData array
        productData = data;

        // Call the generateHtml function after the data has been loaded
        generateHtml();
    })
    .catch(error => console.error('Error fetching data:', error));

function generateHtml() {
    // Select the container where you want to append the HTML
    const containerProductWrap = document.querySelector('.productlist-toselect');
    let innerHtml = ''
    for (i = 0; i < productData.length; i++)
        innerHtml += `
    <div class="product-wrap-container" onclick="startEdit()">
        <div class="productimage-pwc">
            <img src="${productData[i].image}" alt="unable to load image">
        </div>
        <p class="producttitle-pwc">${productData[i].productname}</p>
    </div>`
    containerProductWrap.innerHTML = innerHtml;
}

function startEdit() {
    const hideContainer = document.querySelector('.divwrap-tocenter')
    hideContainer.classList.add('hide')
}