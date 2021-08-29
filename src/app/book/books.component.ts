import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public books: Book[];
  public editBook: Book;
  public deleteBook: Book;
  public addBook: Book;
  public booksFiltered: Book[];

  
 
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    let chosenCategory = this.route.snapshot.paramMap.get('category');
    this.getBookByCategoryName(chosenCategory);
    //this.getBooks();
  }

  public getBooks(): void {
    this.bookService.getBooks().subscribe(
      (response: Book[]) => {
        this.books = response;
        this.booksFiltered = this.books
      },
      (error: HttpErrorResponse) => {
        alert;
      }
    );
  }
  public getBookByCategoryName(category: String): void {
    this.bookService.getBookByCategoryName(category).subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert;
      }
    );
  }
  public onAddBook(addForm: NgForm): void {
    document.getElementById('add-book-form').click();
    this.bookService.addBook(addForm.value).subscribe(
      (response: Book) => {
        console.log(response);
        this.getBooks();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateBook(Book: Book): void {
    this.bookService.updateBook(Book).subscribe(
      (response: Book) => {
        console.log(response);
        this.getBooks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(
      (response: void) => {
        console.log(response);
        this.getBooks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchBooks(key: string): void {
    // console.log(key);
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
    if ( !key) {
      this.booksFiltered = this.books;
    } else {
      this.booksFiltered = results;
    }
  }
}

