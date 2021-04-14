import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { ProductServices } from 'src/app/Shared/ProductServices';
import { Iproduct } from '../Interfaces/Iproduct';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productFilter : Iproduct[];
  products : Iproduct[];

  imageWidth : number   = 50;
  imageHeight : number  = 50;
  imagemargin : number  = 2;
  
  showmessage : string = "";
  errorMessage: string ="";

  imageVisible : boolean = false; 

  _listFilter: string;
  public get listFilter() : string {
    return this._listFilter;
  }
  public set listFilter(v : string) {
    this._listFilter = v;
    this.productFilter = this.listFilter ? this.preformFilter(this.listFilter) : this.products;
  }

  constructor(private ProductServices : ProductServices){
  }

  
  preformFilter(filter : string) : Iproduct[]{
    filter = filter.toLocaleLowerCase();
    return this.products.filter(
      (product : Iproduct )=> product.productName.toLocaleLowerCase().indexOf(filter)!== -1);
  }

  ngOnInit(): void {

     this.ProductServices.getProducts().subscribe({
      next:(products => {
        this.products = products;
        this.productFilter = this.products;
      }),
      error: (err => this.errorMessage=err)
    });

  }

  ShowOrHideFunc() : void {
    this.imageVisible=!this.imageVisible;
  }
  
  OnRatingClicked(message : string) : void{
    this.showmessage += message;
  }

}