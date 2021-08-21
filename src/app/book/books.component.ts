import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

public getBooks(): void{
    this.bookService.getBooks().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert
    }
    )}
}

