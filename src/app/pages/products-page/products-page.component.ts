import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inventory } from 'src/app/interfaces/inventory.model';
import { Product } from 'src/app/interfaces/product.model';
import { CartService } from 'src/app/services/cart Service/cart.service';
import { InventoryService } from 'src/app/services/inventory service/inventory.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})

export class ProductsPageComponent implements OnInit{

  inventories: Inventory[] = [];


  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe((data: any)=>{
      this.inventories = data.inventory;
      console.log(this.inventories)
    });
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private inventoryService: InventoryService
  ) {}

  addToCart(inventory: Inventory){
    this.cartService.addToCart(inventory);
    window.alert('Your product has been added to cart');
  }
}
