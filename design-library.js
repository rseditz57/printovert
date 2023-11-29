const libraryArr = [
];

function libraryCreate() {
    const library = document.querySelector('.image-designlibrary-container');
    let innerhtml = "";
    for (let i = 0; i < libraryArr.length; i++) {
        innerhtml += `
            <div class="image-designlibrary-child" key="${i + 1}">
                <div class="image--fs16">
                    <img src="${libraryArr[i].image}" alt="Image Load Error">
                </div>
                <div class="title-image--fs16">
                    ${libraryArr[i].title}
                </div>
            </div>
        `;
    }
    library.innerHTML = innerhtml;
}

function getImageUrl() {
    var input = document.getElementById('imageInput');

    // Check if a file is selected
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Add the new image to the libraryArr
            libraryArr.push({
                image: e.target.result,
                title: "", // You can set a default title or leave it empty
            });

            // Update the library UI
            libraryCreate();

            // Log the updated libraryArr to the console
            console.log(libraryArr);
        };

        // Read the data URL of the selected file
        reader.readAsDataURL(input.files[0]);
    } else {
        alert('Please Re-Enter')
    }
}

// Initial library creation
libraryCreate();

function uploadToggle() {
    document.querySelector('.uploadDiving').classList.toggle('hide')
}