import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  Products: any = [];

  constructor(
    public crudService: CrudService
  ) { }

  ngOnInit(): void {

    this.fetchProducts();
  }
  fetchProducts() {
    return this.crudService.getProducts().subscribe((res: {})=>{
      this.Products = res;
      console.log(this.Products);

    })
  }

}
