import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule { }
