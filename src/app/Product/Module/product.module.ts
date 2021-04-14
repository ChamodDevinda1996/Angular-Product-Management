import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ConvertToSpacesPipe } from '../pipes/convert-to-spaces.pipe';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CanActivateGuardGuard } from 'src/app/product-details/guards/can-activate-guard.guard';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../Shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path : "products", component: ProductListComponent },
      { path : "products/:id",canActivate: [CanActivateGuardGuard] , component :ProductDetailsComponent },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
