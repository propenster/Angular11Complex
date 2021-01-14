import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


export class Post{
  id: number;
  title: string;
  body: string;
}

export class User{
  id: string;
  name: string;
  email: string;
  phone: number;
}

export class Product{
  id: string;
  product_tag: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  imageUrl: string;
  //"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Product_Photography.jpg/1164px-Product_Photography.jpg",
  created_by: string;
  status: boolean;
  date_created: string;
}

export class Book{
  id: number;
  title: string;
  category: string;
  author: string;
  isbn: string;
  pages: number;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
  created_by: string;
  status: boolean;
  date_created: string;

}


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //RESTAPI
  endpoint = 'http://localhost:3000';
  //post_api_url = 'https://jsonplaceholder.typicode.com/posts/';
  post_api_url = 'http://localhost:3000/posts/';
  django_backend_url = 'http://127.0.0.1:8000/api/v1';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  djangoHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEwNjUyOTAyLCJqdGkiOiI3M2VkOGRmMWI3YmQ0MGQ2YTRiZjNmNjhiYjY0MzMyOSIsInVzZXJfaWQiOjN9.P3rvshkrzQcIlDiLRqz2xxhdGN6N4ViB1K9c4NVmY9s'
      'Authorization': 'Token dbfbd56e99de1d00e4820b01984c5abfeb12f729'
    })
  }

  getBooks(): Observable<Book>{
    return this.httpClient.get<Book>(this.django_backend_url + '/books', this.djangoHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getProducts(): Observable<Product>{
    return this.httpClient.get<Product>(this.django_backend_url + '/products', this.djangoHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getSingleProduct(id): Observable<Product>{
    return this.httpClient.get<Product>(this.django_backend_url + '/products/' + id, this.djangoHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }
  getSingleBook(id): Observable<Book>{
    return this.httpClient.get<Book>(this.django_backend_url + '/books/' + id, this.djangoHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }


  getPosts(): Observable<Post>{

    return this.httpClient.get<Post>(this.endpoint + '/posts')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getSinglePost(id): Observable<Post>{
    return this.httpClient.get<Post>(this.endpoint + '/posts/' + id)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  addPost(data): Observable<Post>{
    return this.httpClient.post<Post>(this.endpoint + '/posts', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  updatePost(id, data): Observable<Post>{
    return this.httpClient.put<Post>(this.endpoint+ '/posts/' + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  deletePost(id){
    return this.httpClient.delete<Post>(this.endpoint+ '/posts/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }




  getUsers(): Observable<User>{
    return this.httpClient.get<User>(this.endpoint + '/users')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getSingleUser(id): Observable<User>{
    return this.httpClient.get<User>(this.endpoint + '/users/' + id)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  addUser(data): Observable<User> {
    return this.httpClient.post<User>(this.endpoint + '/users', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  updateUser(id, data): Observable<User> {
    return this.httpClient.put<User>(this.endpoint + '/users/' + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  deleteUser(id){
    return this.httpClient.delete<User>(this.endpoint + '/users/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }












  processError(err) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }












}
