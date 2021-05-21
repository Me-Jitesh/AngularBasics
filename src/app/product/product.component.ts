import { Component } from '@angular/core'

@Component({
    selector: 'my-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    productName: String = "iPhone"
    productPrice: number = 90000.00
    productQnt: number = 1
}