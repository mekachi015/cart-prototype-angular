import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart Service/cart.service';



@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {


  items = this.cartService.getItem() //sets items using the cart services getItems method

  constructor (
    private cartService :CartService
  ){}

}
