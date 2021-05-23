import { Component } from '@angular/core'

@Component({
    selector: 'my-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    productName: String = "iPhone"
    productPrice: number = 90000.00
    productQnt: number = 1

    meInterpolation: String = "Hola Bachcho"

    ternary: String = ""

    isStatus:boolean=true

    meMethod(): String {
        return "I Am Method !! " + this.meInterpolation
    }
}