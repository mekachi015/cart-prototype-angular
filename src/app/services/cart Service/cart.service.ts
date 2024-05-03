import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { Inventory } from 'src/app/interfaces/inventory.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  item: Inventory[] = [];

  addToCart(inventory: Inventory){
    this.item.push(inventory) //adds product to an array of items
  }

  getItem(){
    return this.item; //collects items user adds to cart and returns each item with its associated quantity
  }

  clearCart(){
    this.item = [];
    return this.item //returns an empty array of items
  }


  constructor() { }
}
