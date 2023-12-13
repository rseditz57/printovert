function generateWallet() {
    const x = document.querySelector('#table--wallet')
    innertext = ""

    for (let i = 0; i < transactions_history.length; i++) {
        innertext += `
        <tr class="tdtr-ticket">
        <td>${transactions_history[i].transaction_id}</td>
        <td>${transactions_history[i].date_t}</td>
        <td>${transactions_history[i].time_t}</td>
        <td>${transactions_history[i].amount}</td>
        <td><button class="${transactions_history[i].status == 'pending' ? 'pending-table' : 'responded-table'}">${transactions_history[i].status}</button></td>
        <td>
                    ${transactions_history[i].response !== "" ? `<button style="color: var(--primary-color); background-color: transparent; border: none; text-decoration: underline;" onclick="transactionResponse(${i})">view</button>` : "--"}
                </td>
    </tr>
        `
    }
    x.innerHTML = innertext
}
function transactionResponse(index) {
    alert(transactions_history[index].response)
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
function addbalance_pop() {
    document.querySelector('.wllt-add-cntainer').classList.toggle('hide')
}