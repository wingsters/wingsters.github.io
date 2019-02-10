import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SliderModule } from 'angular-image-slider';
import {SlideshowModule} from 'ng-simple-slideshow';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SliderComponentComponent } from './slider-component/slider-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SliderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SliderModule,
    SlideshowModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
