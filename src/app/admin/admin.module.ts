import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    FormsModule,
    CommonModule,
    
  
  ],

  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
