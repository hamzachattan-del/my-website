// Welcome Message
alert("Welcome to Insaf Chapli Kebab Center!");

function orderNow() {
    alert("Thank you for your order! We will contact you soon.");
}

console.log("Website Loaded Successfully");
function orderNow() {
    alert("Thank you for your order!");

    document.getElementById("message").innerHTML =
    "✅ Your order request has been received. We will contact you soon.";
}alert("Welcome to Insaf Chapli Kebab Center!");
let userName = prompt("Please enter your name:");

if (userName) {
    alert("Welcome " + userName + " to Insaf Chapli Kebab Center!");
}let today = new Date();

document.getElementById("message").innerHTML =
"📅 Today: " + today;
let hour = new Date().getHours();

if (hour < 12) {
    document.getElementById("message").innerHTML = "🌞 Good Morning! Welcome to Insaf Chapli Kebab Center.";
} else if (hour < 18) {
    document.getElementById("message").innerHTML = "☀️ Good Afternoon! Welcome to Insaf Chapli Kebab Center.";
} else {
    document.getElementById("message").innerHTML = "🌙 Good Evening! Welcome to Insaf Chapli Kebab Center.";
}function showTime() {
    let now = new Date();
    document.getElementById("clock").innerHTML = now.toLocaleTimeString();
}

setInterval(showTime, 1000);
showTime();
function showDate() {
    let today = new Date();
    document.getElementById("date").innerHTML =
    "📅 " + today.toDateString();
}

showDate();
|function submitOrder() {
    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;

    document.getElementById("orderResult").innerHTML =
    "✅ Thank you, " + name + "! We have received your order. We will contact you at " + phone + ".";
}function calculateBill() {
    let price = document.getElementById("price").value;
    let qty = document.getElementById("qty").value;

    price = Number(price);
    qty = Number(qty);

    let total = price * qty;

    document.getElementById("total").innerText = total;
}