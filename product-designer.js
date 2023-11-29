let productData = []; // Initialize as an empty array

//Declaring the value dynamically
let arrayNu;
let productname = '';
let productIntPrice = '';
let productTitle = '';
let selectedColor = '';
let selectedSize = '';

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
    <div class="product-wrap-container" onclick="startEdit(${i})" key="${productData[i].key}">
        <div class="productimage-pwc">
            <img src="${productData[i].image}" alt="unable to load image">
        </div>
        <p class="producttitle-pwc">${productData[i].productname}</p>
    </div>`
    containerProductWrap.innerHTML = innerHtml;
}

function startEdit(i) {
    const hideContainer = document.querySelector('.divwrap-tocenter')
    hideContainer.classList.add('hide')
    document.querySelector('.product-designer').classList.remove('hide')
    console.log(document.querySelector('.product-designer'))
    arrayNu = productData[i]
    productname = arrayNu.productname;
    productIntPrice = arrayNu.price;
    console.log(productname)
    document.querySelector('.titleproduct-fs14').innerText = `${productname}`
    document.querySelector('.pice-fs15').innerText = `${productIntPrice}`
    changeimage()
    genrateColor()
    genrateSize()
    console.log("Current Color is : " + selectedSize);
}

const side = document.querySelectorAll('.selectside-fs14');
side.forEach((item) => item.addEventListener('click', selectSide))

function selectSide() {
    const valSide = this.innerText;
    side.forEach((item) => item.classList.remove('active1'))
    this.classList.toggle('active1');
    console.log(valSide);
    if (valSide == 'Front') {
        const imagePlace = document.querySelectorAll('.image-fs14');

        for (let i = 0; i < imagePlace.length; i++) {
            imagePlace[i].style.transform = `translateX(${i * 100}%)`;
        }
    } else if (valSide == 'Left') {
        const imagePlace = document.querySelectorAll('.image-fs14');

        for (let i = 0; i < imagePlace.length; i++) {
            imagePlace[i].style.transform = `translateX(${i * 100 - 100}%)`;
        }
    } else if (valSide == 'Right') {
        const imagePlace = document.querySelectorAll('.image-fs14');

        for (let i = 0; i < imagePlace.length; i++) {
            imagePlace[i].style.transform = `translateX(${i * 100 - 200}%)`;
        }
    } if (valSide == 'Back') {
        const imagePlace = document.querySelectorAll('.image-fs14');

        for (let i = 0; i < imagePlace.length; i++) {
            imagePlace[i].style.transform = `translateX(${i * 100 - 300}%)`;
        }
    }
}
function changeimage() {
    const imagePlace = document.querySelectorAll('.image-fs14');

    for (let i = 0; i < imagePlace.length; i++) {
        imagePlace[i].style.transform = `translateX(${i * 100}%)`;
    }
}

function proceedFinalOrder() {
    console.log("Current Color is : " + selectedSize);

    const input_title = document.querySelector('.enterproductname').value;
    productname = input_title;
    console.log(productname)
    alert(productname + 'Make a new function');
}

const sizeDiv = document.querySelectorAll('.sizecollection-fs14');
console.log(sizeDiv);
sizeDiv.forEach((size) => size.addEventListener('click', sizeOnClick));

// color swatching

function genrateColor() {
    const divColor = document.querySelector('.colorrectangle');
    let innerhtml = "";
    const locate = arrayNu.color;
    locate.forEach((item) => {
        innerhtml += `
        <button class="colorswatch-fs14" style="--bg: ${item}"></button>
        `;
    });
    divColor.innerHTML = innerhtml;

    const colorButtons = document.querySelectorAll('.colorswatch-fs14');
    colorButtons.forEach((colorButton) => {
        colorButton.addEventListener('click', colorOnClick);
    });
}

console.log(colorDiv);
// colorDiv.forEach((color) => color.addEventListener('click', colorOnClick));

// color swatching
function colorOnClick() {
    console.log('Color clicked');

    // Remove activeColor from all color swatches
    const allColorSwatches = document.querySelectorAll('.colorswatch-fs14');
    allColorSwatches.forEach(colorSwatch => {
        colorSwatch.classList.remove('activeColor');
    });

    // Add activeColor to the clicked color swatch
    this.classList.add('activeColor');

    // Now, you can get the selected color
    var computedStyle = window.getComputedStyle(this);
    selectedColor = computedStyle.backgroundColor;
    console.log(selectedColor);
}
function genrateSize() {
    const divSize = document.querySelector('.sizecollection');
    let innerhtml = "";
    const locate = arrayNu.size;
    locate.forEach((item) => {
        innerhtml += `
        <button class="sizecollection-fs14" onclick="sizeOnClick(event)">${item}</button>
        `;
    });
    divSize.innerHTML = innerhtml;

}
// size swatching
function sizeOnClick(event) {
    // console.log('Size clicked');

    // Remove activeSize from all size swatches
    const allSizeSwatches = document.querySelectorAll('.sizecollection-fs14');
    allSizeSwatches.forEach(sizeSwatch => {
        sizeSwatch.classList.remove('activeSize');
        // console.log("Class removed");
    });

    // Add activeSize to the clicked size swatch
    event.currentTarget.classList.toggle('activeSize');

    // Now, you can get the selected size
    selectedSize = event.currentTarget.innerText;
    if (selectedSize == "S") {
        return selectedSize = "Small"
    } else if (selectedSize == "M") {
        return selectedSize = "Medium"
    } else if (selectedSize == "L") {
        return selectedSize = "Large"
    } else if (selectedSize == "Xl") {
        return selectedSize = "Extra Large"
    } else {
        return selectedSize = "Double Extra Large"
    };

    // console.log(selectedSize);
}
console.log(selectedSize);