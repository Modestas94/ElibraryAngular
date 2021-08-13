import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FictionComponent } from './fiction/fiction.component';
import { NonFictionComponent } from './non-fiction/non-fiction.component';
import { BookService } from './service/book.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FictionComponent,
    NonFictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'fiction', component: FictionComponent},
      {path: 'non-fiction', component: NonFictionComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}]),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
