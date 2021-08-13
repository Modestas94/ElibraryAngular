import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public books?: Book[];

  constructor(private bookService: BookService){}

  ngOnInit(): void { }
  }

