"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var shipping = 5;
var taxPercent = 0.05;
var total = 0;
var pattern = /\b(?:NY|New York)\b/g;
var shippingMessage = ".";
var shippingAddress = "(323) 242-8254 9400 S Normandie Ave #14 Los Angeles, California(CA), 90044";
var productName = products_1.default[2].name;
var product = products_1.default.find(function (item) { return item.name === productName; });
var originalProductPrice = Number(product && product.price);
// setting billing variables based on conditions:
if (Number(product && product.price) > 25)
    shipping = 0;
if (shippingAddress.match(pattern))
    taxPercent = 0.1;
// 
var calc = (Number(product && product.price) * taxPercent);
var taxTotal = calc;
if (product)
    total = Number(product && product.price) + shipping + taxTotal;
if (product) {
    var message = void 0;
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
