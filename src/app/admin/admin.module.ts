import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AdminComponent } from './admin.component';
import {ScrollingModule} from '@angular/cdk/scrolling';




@NgModule({
  declarations: [AdminComponent],
  imports: [
    FormsModule,
    CommonModule,
    ScrollingModule,
    
  
  ],

  exports:[
    AdminComponent,

  ]
})
export class AdminModule { }
