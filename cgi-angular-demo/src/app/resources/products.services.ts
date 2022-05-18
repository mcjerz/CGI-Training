import {Injectable} from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { catchError, map, tap  } from "rxjs/operators";
import { Product, ProductRequest } from "./products.types";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsServices
{
  /* -- CONSTRUCTOR -- */


  constructor(
    private _httpClient: HttpClient,
    private _messageService: MessageService
  ) {}


  /* -- PROPERTIES -- */
  private _baseUrl = 'api/products';


httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


  /* -- PUBLIC METHODS -- */




  /* GET product list */
  public getProducts(): Observable<Product[]> {

    return this._httpClient.get<Product[]>(this._baseUrl)
      .pipe(
        tap(_ => this.log('fetched products')),
        catchError(this._handleError<Product[]>('getProducts', []))
    );
  }

  /* GET product by id w/ 404 response */
  getProductById(id: number): Observable<Product> {
    const url = `${this._baseUrl}/${id}`;
    return this._httpClient.get<Product>(url)
      .pipe(
        tap(_ => this.log(`fetched product id=${id}`)),
        catchError(this._handleError<Product>(`getProduct id=${id}`))
      );
  }

  /* GET product by search term */
  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if term not found, return empty array
      return of([]);
    }
    return this._httpClient.get<Product[]>(`${this._baseUrl}/?name=${term}`)
      .pipe(
        tap(x => x.length ?
        this.log(`found products matching "${term}"`) :
        this.log(`no products matching "${term}"`)),
        catchError(this._handleError<Product[]>(`searchProducts`, []))
      )

  }

  /**** SAVE methods ***/

  /* POST: add a new product  */
  public addProduct(product: ProductRequest): Observable<ProductRequest> {

    return this._httpClient.post<ProductRequest>(this._baseUrl, product, this.httpOptions)
      .pipe(
        tap((newProduct: Product) => this.log(`added product w/ id=${newProduct.id}`)),
        catchError(this._handleError<Product>(`addProduct`))
    );
  }

/* PUT: update existing product */
  public updateProduct(product: ProductRequest): Observable<ProductRequest> {

    return this._httpClient.put<ProductRequest>(this._baseUrl, product, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted product id=${product.id}`)),
        catchError(this._handleError<any>('updateHero'))
    );
  }

  /* DELETE: remove product from db */
  public deleteProduct(id: number): Observable<Product> {
    const url = `${this._baseUrl}/${id}`;

    return this._httpClient.delete<Product>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted product id=${id}`)),
        catchError(this._handleError<Product>('deleteProduct'))
      );
  }

  /* -- PRIVATE METHODS -- */
  private log(message: string) {
    this._messageService.add(`ProductService: ${message}`);
  }

  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
