let profile_data = [];
let addressdataArr = [];
let transactions_history = []
let ticketArr = []
let libraryArr = [];
let activeOrders = []
let orders = [];
let spent = 0;
const country_code = "+91 ";

// getting the username now statically
let username = "ronit_dev";
// let fullname = `${firstname + " " + lastname}`
let arrayId = "";
let firstname = "";
let lastname = "";
let email_f = "";
let phonenumber = "";
let password_f = "";
let profilephoto = "";
let address_1line = "";
let address_2line = "";
let city = "";
let pincode = "";
let receiver_name = "";
let additional_no = "";
let landmark = "";
let wallet_balance = ""


function getUsername() {
    const usernamePro = prompt('Enter Username');
    if (usernamePro !== null && usernamePro.trim() !== "") {
        username = usernamePro
        for (let i = 0; i < profile_data.length; i++) {
            if (profile_data[i].username == username) {
                arrayId = i
                console.log('Matchhed is :' + `${i}`)
                break;
            } else {
                console.log('Not Matched Error Id : ' + `${i}`)
            }
        }
        const password_n = prompt('Enter Password');
        if (password_n == profile_data[arrayId].password_f) {
            alert("Welcome Back, " + username)
        } else {
            alert('Password Wrong')
            getUsername()
        }

    } else {
        alert("User Input is empty. We aren't able to fetch data. Please Try Again and Enter Data")
        getUsername();
    }
}

// {
//     username: `${username}`,
//     fullname: `${fullname}`
//     firstname: `${firstname}`,
//     lastname: `${lastname}`,
//     email_f: `${email_f}`,
//     phonenumber: `${ phonenumber}`,
//     password_f: `${password_f}`,
//     profilephoto: `${profilephoto}`
// }


// fetching data 
fetch('profile.json')
    .then(response =>
        response.json()
    )
    .then(data => {
        // Store the fetched data in the productData array
        profile_data = data;
        // generateAddress();
        getArrayProfile();
        setValues()
        generateAddress()
        functionToRun();
        // getUsername();
        generateTable();
        setInputValue();
        generateWallet();
        calculateValueSpent();
        libraryCreate();
        setInnertexts();
        generateTableOrder();
    })
    .catch(error => console.error('Error fetching profile details:', error));

function showPassword() {
    var x = document.querySelectorAll(".myPassword--fs16");
    x.forEach((i) => {
        if (i.type === "password") {
            i.type = "text";
        } else {
            i.type = "password";
        }
    })
}

// getting the array id 
function getArrayProfile() {
    for (let i = 0; i < profile_data.length; i++) {
        if (profile_data[i].username == username) {
            arrayId = i
            console.log('Matchhed is :' + `${i}`)
            break;
        } else {
            console.log('Not Matched Error Id : ' + `${i}`)
        }
    }
}


function generateAddress() {
    const addressHtml = document.querySelector('.addresses-container--edit-f');
    let innerhtml = "";
    for (let i = 0; i < addressdataArr.length; i++) {
        innerhtml += `
            <section class="address-container">
                <div class="title-receiver--edit-f">
                    ${addressdataArr[i].receiver_name}
                    <button class="deleteaddress-thisone" onclick="deleteAddress(${i})">
                        Delete
                    </button>
                </div>
                <div class="address-firstline">
                    ${addressdataArr[i].address_1line}
                </div>
                <div class="address-firstline">
                    ${addressdataArr[i].address_2line}
                </div>
                <div class="pincode-city--edit-f">
                    <span class="city--f-edit">${addressdataArr[i].city}</span> : <span
                        class="pincode--f-edit">${addressdataArr[i].pincode}</span>
                </div>
            </section>
        `;
    }

    addressHtml.innerHTML = innerhtml;
}
function deleteAddress(i) {
    addressdataArr.splice(i, 1);
    generateAddress(); // Update the UI after deleting an address
}
//
function functionToRun() {

}

function cancelSubmitProfile() {
    const confirmation = confirm('You are about to Cancel Profile Submit')
    if (confirmation) { location.reload(); console.log(confirmation); }
    else { alert('Cancelled by User') }
}
document.querySelector('.cancel--submitor').addEventListener('click', cancelSubmitProfile)

function addnewAddress() {
    const receiver = prompt("Enter Receiver's Name", "Full Name");

    if (receiver !== null && receiver.trim() !== "") {
        const addressFirstLine = prompt("Enter Address First Line", "Address Line 1");

        if (addressFirstLine !== null && addressFirstLine.trim() !== "") {
            const addressSecondLine = prompt("Enter Address Second Line", "Address Line 2");

            if (addressSecondLine !== null && addressSecondLine.trim() !== "") {
                const cityp = prompt("Enter City Name", "City");

                if (cityp !== null && cityp.trim() !== "") {
                    const pincodep = prompt("Enter Pincode", "Pincode");

                    if (pincodep !== null && pincodep.trim() !== "") {
                        const alternativeNumber = prompt("Enter Alternative Number", "Alternative Number");

                        if (alternativeNumber !== null && alternativeNumber.trim() !== "") {
                            const landmark_F = prompt("Enter Landmark", "Landmark");

                            const address_1line = addressFirstLine.trim();
                            const address_2line = addressSecondLine.trim();
                            const city = cityp.trim();
                            const pincode = pincodep.trim();
                            const receiver_name = receiver.trim();
                            const additional_no = alternativeNumber.trim();
                            const landmark = landmark_F.trim();

                            addressdataArr.push({
                                receiver_name: receiver_name,
                                address_1line: address_1line,
                                address_2line: address_2line,
                                landmark: landmark,
                                city: city,
                                pincode: pincode,
                                additional_no: additional_no
                            });

                            console.log(addressdataArr);
                            generateAddress();
                        } else {
                            alert('Cancelled: Alternative Number');
                        }
                    } else {
                        alert('Cancelled: Pincode');
                    }
                } else {
                    alert('Cancelled: City');
                }
            } else {
                alert('Cancelled: Address Second Line');
            }
        } else {
            alert('Cancelled: Address First Line');
        }
    } else {
        alert('Cancelled: Receiver Name');
    }
}

function submitChanges() {
    const password_ff = document.querySelector('.submit-submitor')
    const current_pass = document.querySelector('#current_password').value
    const new_pass = document.querySelector('#newpass').value
    const con_newpass = document.querySelector('#con_newpass').value

    if (current_pass == profile_data[arrayId].password_f) {
        alert('Passed')
        if (new_pass == con_newpass) {
            console.log('Password Matched')
            alert('New Password Updated')
            // Update the current password in the profile_data array
            profile_data[arrayId].password_f = new_pass;
            password_f = new_pass
            // Log the updated array for verification
            console.log(profile_data);
        } else {
            console.log('New Pass = Confirm Pass');
        }
    } else {
        alert('Current Pass didnt matched')
    }
    document.querySelector('#current_password').value = "";
    document.querySelector('#newpass').value = "";
    document.querySelector('#con_newpass').value = "";

}
function setValues() {
    firstname = `${profile_data[arrayId].firstname}`;
    lastname = `${profile_data[arrayId].lastname}`;
    email_f = `${profile_data[arrayId].email_f}`;
    phonenumber = `${profile_data[arrayId].phonenumber}`;
    password_f = `${profile_data[arrayId].password_f}`;
    transactions_history = profile_data[arrayId].transactions;
    wallet_balance = profile_data[arrayId].wallet_balance
    ticketArr = profile_data[arrayId].tickets;
    libraryArr = profile_data[arrayId].design_library;
    activeOrders = profile_data[arrayId].activeOrders;
    orders = profile_data[arrayId].orders
    addressdataArr = profile_data[arrayId].address
}
function setInputValue() {
    setValues()

    const firstname_edit = document.querySelector('.firstname--edit')
    const lastname_edit = document.querySelector('.lastname--edit')
    const email_edit = document.querySelector('.email--edit')
    const phone_edit = document.querySelector('.phonenumber--edit')
    firstname_edit.value = firstname.trim()
    lastname_edit.value = lastname.trim()
    email_edit.value = email_f.trim()
    phone_edit.value = `${country_code}` + phonenumber
}


function calculateValueSpent() {
    for (let i = 0; i < orders.length; i++) {
        spent += orders[i].price * orders[i].quantity;
    }
}

function setInnertexts() {
    document.querySelector('#username-text--menu').innerText = `${firstname + " " + lastname}`;
    document.querySelector('#wallet-balance--f99').innerText = `${'₹' + wallet_balance}`;
    document.querySelector('#walletbalance--f-gst536').innerText = `${'₹' + wallet_balance}`;
    document.querySelector('#activeorders').innerText = `${activeOrders.length}`
    document.querySelector('#totalorders-566').innerText = `${orders.length}`
    document.querySelector('#spent-758').innerText = `${'₹' + spent}`
    document.querySelector('#texttp-walletbalance').innerText = `${'₹' + wallet_balance}`
    document.querySelector('#wallet-balance-spent').innerText = `${'₹' + spent}`
}
