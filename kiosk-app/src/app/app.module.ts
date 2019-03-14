import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ClassesComponent } from './classes/classes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddClassComponent } from './add-class/add-class.component';
import { ClassTableComponent } from './class-table/class-table.component';
import { MatTableModule } from '@angular/material';
import { EditClassComponent } from './edit-class/edit-class.component'





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClassesComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    AddClassComponent,
    ClassTableComponent,
    EditClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddClassComponent, ClassTableComponent, EditClassComponent]

})
export class AppModule { }
