const getAllOrdersURL = ("https://troubled-peaceful-hell.glitch.me/orders")
const coffeeOrdersDiv = document.getElementById("coffeeOrdersDiv")
const coffeeOrderShow = document.getElementById("coffeeOrderShow")
const findOrderBtn = document.getElementById("findOrderBtn")

function getAllOrders(allOrdersFetched){ 
let request = new XMLHttpRequest()
request.onload = function(){
    let allOrders = JSON.parse(this.responseText)
    allOrdersFetched(allOrders)
    
}
    

request.open('GET', getAllOrdersURL)
request.send()
}



function displayAllOrders(allOrders) {
    let ordersItems = allOrders.map((item) => {
        return `
        <div>
            <p>Email: ${item.email}</p>
            <p>Type: ${item.type}</p>
            <p>Size: ${item.size}</p>
            <p>Price: $${item.price}</p>
        </div>
        `
    })
    coffeeOrdersDiv.innerHTML = ordersItems.join('')
}


function handleSubmit(event) {
    event.preventDefault()
    let request = new XMLHttpRequest()
    request.open('POST', getAllOrdersURL)
    request.setRequestHeader('Content-Type', 'application/json')
    request.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE) {
            if(this.status == 200) {
                location.reload()
            }
        }
    }
    
    const formData = event.target.elements;

    const data = {
        email: formData['email'].value,
        type: formData['type'].value,
        size: formData['size'].value,
        price: formData['price'].value
    }

    console.log('DATA', data)
    
    request.send(JSON.stringify(data))
    
    }

    function findOrder() {
        const email = document.getElementById("findOrderByEmail").value
        let request = new XMLHttpRequest
        request.onload = function() {
            const order = JSON.parse(this.responseText)
            displayOrderByEmail(order)
        }
        request.open("GET", `https://troubled-peaceful-hell.glitch.me/orders/${email}`)
        request.send()
    }

    function displayOrderByEmail(order) {
        let orderHTML =  `
            <div>
                <p>Email: ${order.email}</p>
                <p>Type: ${order.type}</p>
                <p>Size: ${order.size}</p>
                <p>Price: $${order.price}</p>
            </div>

            <button onclick="deleteOrder('${order.email}')" type="button" id = "deleteOrderBtn">Delete Order</button>
            `

        coffeeOrderShow.innerHTML = orderHTML
    }


function deleteOrder(email) {
    console.log("Deleting Email...",email)
    let request = new XMLHttpRequest()
    request.open('DELETE', `https://troubled-peaceful-hell.glitch.me/orders/${email}`)
    request.setRequestHeader('Content-Type', 'application/json')
    request.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE) {
            if(this.status == 200) {
                location.reload()
            }
        }
    }
    request.send()
}

getAllOrders(displayAllOrders)