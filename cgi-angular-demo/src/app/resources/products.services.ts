import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { catchError, map, tap  } from "rxjs/operators";
import {Product, ProductRequest} from "./products.types";

@Injectable({
  providedIn: 'root'
})
export class ProductsServices
{
  /* -- CONSTRUCTOR -- */


  constructor(
    private _httpClient: HttpClient
  ) {}


  /* -- PROPERTIES -- */
  private _baseUrl = 'http://localhost:8085';
  private _products: Product[] = [];


/* -- GETTERS & SETTERS -- */
  public get products(): Product[] {
    return this._products;
}

  /* -- PUBLIC METHODS -- */
  public createProduct(body: ProductRequest): Observable<void> {

    return this._httpClient.post<ProductRequest>(`${this._baseUrl}` + '/api/products', body).pipe(
      map((response: any) => console.log(response))
    )
  }

  public retrieveProducts(): Observable<Product[]> {

    return this._httpClient.get<Product[]>(`${this._baseUrl}` + '/api/products').pipe(
      map((response: Product[]) => {
        this._products = response;
        return this._products;
      })
    )
  }

  public updateProduct(body: ProductRequest): Observable<void> {

    return this._httpClient.put<ProductRequest>(`${this._baseUrl}`, body).pipe(
      map((response: any) =>
      console.log(response))
    )
  }

  public removeProduct(): Observable<void> {

    return this._httpClient.delete<ProductRequest>(`${this._baseUrl}`).pipe(
      map((response: any) =>
        console.log(response))
    )
  }

}
