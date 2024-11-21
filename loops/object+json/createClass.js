class Product{
    constructor(id, description, quantity, price) {
        this.id= id;
        this.description=description;
        this.quantity=quantity;
        this.price= price;
    }
}
const product1= new Product(1,'Smartphone', 44, 100);
const product2= new Product(2,'Headphones', 33, 60);

console.log("Product 1 Details:");
console.log(`ID: ${product1.id}`);
console.log(`Description: ${product1.description}`);
console.log(`Quantity: ${product1.quantity}`);
console.log(`Price: $${product1.price}`);

console.log("\nProduct 2 Details:");
console.log(`ID: ${product2.id}`);
console.log(`Description: ${product2.description}`);
console.log(`Quantity: ${product2.quantity}`);
console.log(`Price: $${product2.price}`);