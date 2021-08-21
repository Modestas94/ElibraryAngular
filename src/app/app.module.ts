import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookService } from './service/book.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';
import { BooksModule } from './book/books.module';
import { BooksComponent } from './book/books.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    BooksModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}]),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
