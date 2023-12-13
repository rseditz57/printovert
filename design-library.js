
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
    console.log(libraryArr);
}

function getImageUrl() {
    var input = document.getElementById('imageInput');
    var titleHere;
    // Check if a file is selected
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        titleHere = prompt("Set a Image Title:");
        reader.onload = function (e) {
            // Add the new image to the libraryArr
            if (titleHere !== null && titleHere != "") {
                libraryArr.unshift({
                    image: e.target.result,
                    title: titleHere, // You can set a default title or leave it empty
                });
                let imgpp = e.target.result
                console.log(reader);
            } else {
                return alert('Please Try Again and Input the Title')
            }


            // Update the library UI
            libraryCreate();

            // Log the updated libraryArr to the console
            // console.log(libraryArr);
        };

        // Read the data URL of the selected file
        reader.readAsDataURL(input.files[0]);
    } else {
        alert('Please Re-Enter')
    }
}

// Initial library creation
// libraryCreate();

function uploadToggle() {
    document.querySelector('.uploadDiving').classList.toggle('hide')
}
