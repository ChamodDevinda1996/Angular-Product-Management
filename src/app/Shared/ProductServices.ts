import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap,catchError } from "rxjs/operators";
import { Iproduct } from "../Product/Interfaces/Iproduct";

@Injectable({
    providedIn: "root"
})
export class ProductServices {

    private url :string = "api/products/products.json";

    constructor(private http: HttpClient){}

    getProducts(): Observable<Iproduct[]>{
        return this.http.get<Iproduct[]>(this.url).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = "";
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured : ${err.error.message}`;
        }
        else{
            errorMessage = `server returned code : ${err.status}, error message is ${err.message}`
        }

        console.log(errorMessage);

        return throwError(errorMessage);
    }

}