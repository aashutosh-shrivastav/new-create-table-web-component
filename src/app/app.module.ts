import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableCompComponent} from './table-comp/table-comp.component';
import {TableService } from './table-comp/table-comp.service';
@NgModule({
  declarations: [
    AppComponent,
    TableCompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
