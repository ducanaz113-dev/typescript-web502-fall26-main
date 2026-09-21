"use strict";
var ProductRate;
(function (ProductRate) {
    ProductRate["low"] = "th\u1EA5p";
    ProductRate["high"] = "cao";
})(ProductRate || (ProductRate = {}));
const product = {
    name: "laptop",
    rate: ProductRate.low,
    price: 10000,
};
console.log(product);
