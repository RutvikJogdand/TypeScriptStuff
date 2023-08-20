import products from './products';
let shipping = 5;
let taxPercent = 0.05;
let total = 0;
const pattern = /\b(?:NY|New York)\b/g;
let shippingMessage = ".";
let shippingAddress = "(323) 242-8254 9400 S Normandie Ave #14 Los Angeles, California(CA), 90044";
let productName = products[2].name;
let product = products.find(item => item.name === productName);
let originalProductPrice = Number(product && product.price);
// setting billing variables based on conditions:
if (Number(product && product.price) > 25)
    shipping = 0;
if (shippingAddress.match(pattern))
    taxPercent = 0.1;
// 
let calc = (Number(product && product.price) * taxPercent);
let taxTotal = calc;
if (product)
    total = Number(product && product.price) + shipping + taxTotal;
if (product) {
    let message;
    if (originalProductPrice > 25) {
        shippingMessage = ". Shipping Free!";
    }
    if (JSON.parse(product.preOrder) === true) {
        message = "We will send you a email and/or sms when your package is dispatched for delivery" + shippingMessage;
    }
    else {
        message = "Sorry, your package is not available for pre-order currently";
    }
    console.log(message);
}
console.log({ productName: product && product.name, address: shippingAddress, productPrice: product && product.price, taxTotal: taxTotal, shipping: shipping, totalAmt: total });
