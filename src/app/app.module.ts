import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KichwaComponent } from './kichwa/kichwa.component';
import { KutafutaComponent } from './kutafuta/kutafuta.component';

@NgModule({
  declarations: [
    AppComponent,
    KichwaComponent,
    KutafutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
