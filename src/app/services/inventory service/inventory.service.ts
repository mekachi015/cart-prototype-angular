import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/interfaces/inventory.model';
import { Product } from 'src/app/interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService { // a service that gets data from the json file

  private dataUrl = 'assets/jsonFile/products.json'
  constructor(private http: HttpClient) { }

  getInventory(): Observable<Inventory[]>{
    return this.http.get<Inventory[]>(this.dataUrl);
  }

}
