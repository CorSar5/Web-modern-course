import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string, isError: boolean = false): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error']:['msg-success']
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e)) 
    );
  };

  handleError(e: any): Observable<any>{
    console.log(e)
    this.showMessage('An Error has Occurred', true);
    return EMPTY;
  };

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e)) 
    );
  }
  delete(id:number): Observable<Product>{
    const Url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(Url).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e)) 
    );
  }
  readById(id: string): Observable<Product>{
    const Url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(Url).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e)) 
    );
  }
  update(product: Product): Observable<Product>{
    const Url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(Url, product).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e)) 
    );
  }
}
