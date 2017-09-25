import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GaleryComponent } from './galery/galery.component';
import { ImageComponent } from './image/image.component';

import {ImageService} from "./shared/image.service";
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GaleryComponent,
    ImageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FilterPipe,
    ImageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
