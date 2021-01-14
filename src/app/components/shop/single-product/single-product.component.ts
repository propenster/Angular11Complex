import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  id = this.actRoute.snapshot.params['productId'];
  productObj: any = {};

  constructor(
    public crudService: CrudService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.crudService.getSingleProduct(this.id).subscribe((res: {})=>{
      this.productObj = res;
      console.log(this.productObj);
    })
  }

}
