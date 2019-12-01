// products.service.ts
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
        this.uri = 'http://localhost:4100/products';
    }
    addProduct(ProductName, ProductDescription, ProductPrice) {
        const obj = {
            ProductName,
            ProductDescription,
            ProductPrice
        };
        console.log(obj);
        this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));
    }
};
ProductsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map