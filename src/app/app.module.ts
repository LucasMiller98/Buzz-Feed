import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzLogoComponent } from './components/quizz-logo/quizz-logo.component';
import { QuizzQuestionsTitleComponent } from './components/quizz-questions-title/quizz-questions-title.component';
import { QuizzOptionsComponent } from './components/quizz-options/quizz-options.component';
import { QuizzResultsComponent } from './components/quizz-results/quizz-results.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    HomeComponent,
    QuizzLogoComponent,
    QuizzQuestionsTitleComponent,
    QuizzOptionsComponent,
    QuizzResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
