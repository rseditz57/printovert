function generateTableOrder() {
    const containerTabOrder = document.querySelector('#table--orders')
    let innerhtml = "";
    for (let i = 0; i < orders.length; i++) {
        innerhtml += `
        <tr class="tdtr-ticket">
            <td>${orders[i].quantity}</td>
            <td>${orders[i].createdate}</td>
            <td>view</td>
            <td>${orders[i].price} </td>
            <td>${orders[i].status}</td>
            <td>${orders[i].shipping_id}</td>
            <td>${orders[i].shipping_com}</td>
    </tr>
        `
    }
    containerTabOrder.innerHTML = innerhtml
    console.log(orders)
}