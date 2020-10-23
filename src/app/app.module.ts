import { ImageHoverComponent } from './image-hover/image-hover.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StayCardComponent } from './stay-card/stay-card.component';
import { StayListComponent } from './stay-list/stay-list.component';
import { HoverEffectComponent } from './hover-effect/hover-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    StayCardComponent,
    StayListComponent,
    HoverEffectComponent,
    ImageHoverComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
