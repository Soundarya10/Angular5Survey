import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { DataService } from './data.service';
import { FormsComponent } from './forms/forms.component';
import { QuestionsComponent } from './questions/questions.component';
import { AuthGuard } from './authguard.service';


const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
    {path: 'test2', component: Test2Component },
    {path: 'forms', component:FormsComponent},
    {path: 'questions' , component:QuestionsComponent},
    {path:'', redirectTo:'/forms',pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    FormsComponent,
    QuestionsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ,
   RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
