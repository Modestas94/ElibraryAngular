import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public books: Book[];
  public editBook: Book;
  public deleteBook: Book;
  
  constructor(
    private bookService: BookService,
    private modalService: NgbModal
    ) {}

  ngOnInit(): void {
    this.getBooks();
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

public onAddBook(addForm: NgForm): void {
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
public openAddModal(content): void {
  this.modalService.open(content, { ariaLabelledBy: 'addBookModal' });
}
public openEditModal(updateBookModal, book: Book): void {
  this.editBook = book;
  this.modalService.open(updateBookModal, {
    ariaLabelledBy: 'updateBookModal',
  });
}
public openDeleteModal(deleteBookModal, book: Book): void {
  this.deleteBook = book;
  this.modalService.open(deleteBookModal, {
    ariaLabelledBy: 'deleteBookModal',
  });
}
}

