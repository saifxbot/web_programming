const Order ={
    propertyId:1,
    date:'2/2/2024',
    customer: 'saif',
    products:[
        {name:'monitor', price:200, quantity:1},
        {name:'Laptop', price:500, quantity:3},
        {name:'keyboard', price:120, quantity:6}
    ]
};
document.getElementById('order-id').textContent=`Order-Id: ${Order.propertyId}`;
document.getElementById('order-date').textContent=`Order-Date: ${Order.date}`;
document.getElementById('order-customer').textContent=`Order-Customer: ${Order.customer}`;

const productsList = document.getElementById("order-products");

for (let i = 0; i < Order.products.length; i++) {
  const product = Order.products[i];
  const listItem = document.createElement("li");
  listItem.textContent = `${product.name} - $${product.price} (x${product.quantity})`;
  productsList.appendChild(listItem);
}
