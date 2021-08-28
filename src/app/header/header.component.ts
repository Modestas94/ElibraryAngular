import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private bookService: BookService) {}
  public books: Book[];
  ngOnInit(): void {}

  gotoCategoryPage(event, targetCategory) {
    event.preventDefault();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([`/category/${targetCategory}`]));
  }

  public searchBooks(key: string): void {
    console.log(key);
    const results: Book[] = [];
    for (const Book of this.books) {
      if (
        Book.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        Book.author.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        Book.category.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        Book.status.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(Book);
      }
    }
    this.books = results;
    if (results.length === 0 || !key) {
      this.getBooks();
    }
  }
  public getBooks(): void {
    this.bookService.getBooks().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert;
      }
    );
  }
}
