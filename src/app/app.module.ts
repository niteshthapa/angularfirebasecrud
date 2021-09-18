import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentComponent } from './component/student/student.component';
import { StudentdetailsComponent } from './component/studentdetails/studentdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentaddComponent } from './component/studentadd/studentadd.component';
const appRoute:Routes=[
  {path:'',redirectTo:'student',pathMatch:'full'},
  {path:'student',component:StudentComponent},
  {path:'studentdetails/:id',component:StudentdetailsComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentdetailsComponent,
    StudentaddComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoute),HttpClientModule ,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
