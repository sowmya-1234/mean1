import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ProductAddComponent = class ProductAddComponent {
    constructor(fb, ps) {
        this.fb = fb;
        this.ps = ps;
        this.createForm();
    }
    createForm() {
        this.angForm = this.fb.group({
            ProductName: ['', Validators.required],
            ProductDescription: ['', Validators.required],
            ProductPrice: ['', Validators.required]
        });
    }
    ngOnInit() {
    }
    addProduct(ProductName, ProductDescription, ProductPrice) {
        this.ps.addProduct(ProductName, ProductDescription, ProductPrice);
    }
};
ProductAddComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-add',
        templateUrl: './product-add.component.html',
        styleUrls: ['./product-add.component.css']
    })
], ProductAddComponent);
export { ProductAddComponent };
//# sourceMappingURL=product-add.component.js.map