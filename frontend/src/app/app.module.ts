import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './view/template/header/header.component';
import { FooterComponent } from './view/template/footer/footer.component';
import { TaskHomeComponent } from './view/task/task-home/task-home.component';
import { TaskCreateComponent } from './view/task/task-create/task-create.component';
import { TaskDeleteComponent } from './view/task/task-delete/task-delete.component';
import { TaskViewComponent } from './view/task/task-view/task-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskHomeComponent,
    TaskCreateComponent,
    TaskDeleteComponent,
    TaskViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
