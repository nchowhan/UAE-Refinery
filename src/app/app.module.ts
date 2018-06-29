import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MapChart} from 'angular-highcharts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UAERefineryComponent } from './uaerefinery/uaerefinery.component';

@NgModule({
  declarations: [
    AppComponent,
    UAERefineryComponent,
    
  ],
  imports: [
    
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
