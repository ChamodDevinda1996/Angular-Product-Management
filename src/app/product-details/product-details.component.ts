import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { find } from 'rxjs/operators';
import { Iproduct } from '../Product/Interfaces/Iproduct';
import { ProductServices } from '../Shared/ProductServices';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product : Iproduct;
  error : string;

  imageWidth : number = 250;
  imageHeight : number = 200;
  imagemargin : number = 1;
  constructor(private route : ActivatedRoute ,
              private productService : ProductServices,
              private router : Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get("id");

  let products :Iproduct[];
  

    this.productService.getProducts().subscribe({
      next : (product => 
        {
          products = product;
          this.product = products.find( x=> x.productId==id);
        }
      ),
      error: (err => this.error = err)
    });

    
  
  }

  goBack(): void {
    this.router.navigate(["/products"]);
  }

}
