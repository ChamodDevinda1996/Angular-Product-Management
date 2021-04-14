import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { StarComponentComponent } from './Shared/star-component/star-component.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ProductModule } from './Product/Module/product.module';
import { RouterModuleModule } from './router-module/router-module.module';


@NgModule({
  declarations: [
    AppComponent,
    WellcomeComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    RouterModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
