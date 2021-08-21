import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { HttpClient } from '@angular/common/http';



@Injectable({providedIn: 'root'})

export class BookService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

public getBooks(): Observable<Book[]> {
  return this.http.get<Book[]>(`${this.apiServerUrl}/all`);
}

public addBook(book: Book): Observable<Book> {
  return this.http.post<Book>(`${this.apiServerUrl}/add`, book);
}

public updateBook(book: Book): Observable<Book> {
  return this.http.put<Book>(`${this.apiServerUrl}/update`, book);
}

public deleteBook(bookId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/delete/${bookId}`)
}

public getBookByCategoryName(category: String): Observable<Book[]> {
  return this.http.get<Book[]>(`${this.apiServerUrl}/get/${category}`);
}
}