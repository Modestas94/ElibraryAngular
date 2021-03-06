import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { BooksComponent } from './book/books.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  { path: 'about', component: AboutComponent },
  { path: 'books', component: BooksComponent },
  { path: 'category/:category', component: BooksComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
