function display() {
    let pro = document.getElementById('pro');
    let name = pro.innerText;
    let price = pro.getAttribute("data-price");
    let quantity = qty.value;
    let amount = price*quantity;
    document.getElementById('name').innerText=name;
    document.getElementById('amount').innerText=amount;
}
display();