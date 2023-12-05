let ticketArr = []

let subject = "";
let callback_num = "";
let query_for = "";
let description = "";
let file_url = "";
let submitdate = ""
// Fetch data from the JSON file
fetch('ticket-data.json')
    .then(response =>
        response.json()
    )
    .then(data => {
        // Store the fetched data in the productData array
        ticketArr = data;

        // Call the generateHtml function after the data has been loaded
        generateTable();
    })
    .catch(error => console.error('Error fetching data:', error));


function cancelQuery() {
    const agree = confirm('Confirm the Exit?')
    if (agree) {
        window.location.reload()
        document.querySelector('#subject').value = ""
        document.querySelector('#callback').value = ""
        document.querySelector('#typequery').value = ""
        document.querySelector('#desc-area').value = ""
    }

}
function submitQuery() {


    subject = document.querySelector('#subject').value
    callback_num = document.querySelector('#callback').value
    query_for = document.querySelector('#typequery').value
    description = document.querySelector('#desc-area').value


    if (subject != "") {
        // Reset values of form fields
        // console.log('1');
        if (callback_num != "") {
            document.querySelector('#subject').value = "";
            document.querySelector('#callback').value = "";
            document.querySelector('#typequery').value = "";
            document.querySelector('#desc-area').value = "";
            // console.log('2');
            alert('Submited Successfully');
            ticketArr.unshift(
                {
                    subject: subject,
                    submitdate: submitdate,
                    callback_num: callback_num,
                    ticket: "",
                    status: "Pending",
                    response_url: "",
                    response: "N/A",
                    description: description,
                    query_for: query_for
                }
            )
            console.log(ticketArr)
        } else {
            alert('Cant Execute fill all the field')
        }
    } else { alert('Cant Execute') }
    generateTable()
    // console.log(subject, callback_num, query_for, description)
}

function raiseToggle() {
    // Store the reference to the element with the class 'raiseaticket'
    const raiseTicketElement = document.querySelector('.raiseaticket');

    // Toggle the 'hide' class on the element
    raiseTicketElement.classList.toggle('hide');

    // Check if the 'hide' class is present or not
    if (!raiseTicketElement.classList.contains('hide')) {
        // If not present, update the text content to "Raise a Ticket"
        document.querySelector('#checkticket-to-raiseticket').innerText = "Raise a Ticket";
    } else {
        // If present, update the text content to "Check Ticket"
        document.querySelector('#checkticket-to-raiseticket').innerText = "Check Ticket";
    }
}

function generateTable() {
    const x = document.querySelector('.table-ticket-tbody')
    let innerhtml = "";
    for (let i = 0; i < ticketArr.length; i++) {
        innerhtml += `
            <tr class="tdtr-ticket">
                <td>${ticketArr[i].subject}</td>
                <td>${ticketArr[i].submitdate}</td>
                <td><a href="${ticketArr[i].ticket}">view</a></td>
                <td><button class="${ticketArr[i].status == 'Pending' ? 'pending-table' : 'responded-table'}">${ticketArr[i].status}</td>
                <td>${ticketArr[i].response === 'N/A' ? 'N/A' : `<a href="${ticketArr[i].response_url}" target="_blank">view</a>`}</td>
                <td><button class="deleteticketArr" onclick="deleteTicket(${i})">Delete</button></td>
            </tr>
        `
    }
    x.innerHTML = innerhtml;
    if (ticketArr.length == 0) {
        x.innerHTML = "KOI QUERY NHI BACHI BHAI, SARE SOLVE KARDIYA APKE BHAI NE"
    }
}

function deleteTicket(index) {
    ticketArr.splice(index, 1)
    generateTable()
}

function todayDate() {
    // Create a new Date object
    const currentDate = new Date();

    // Get the current date components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-indexed, so we add 1
    const day = currentDate.getDate();
    // console.log('error2')
    // Format the date as a string (YYYY-MM-DD)
    submitdate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

    console.log(submitdate);
    // console.log(subject, callback_num, query_for, description)
}
todayDate()