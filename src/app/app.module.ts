import { ImageHoverComponent } from './image-hover/image-hover.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StayCardComponent } from './stay-card/stay-card.component';
import { StayListComponent } from './stay-list/stay-list.component';
import { SegmentSearchbarComponent } from './segment-searchbar/segment-searchbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ExpandButtonComponent } from './expand-button/expand-button.component';

@NgModule({
  declarations: [
    AppComponent,
    StayCardComponent,
    StayListComponent,
    ImageHoverComponent,
    SegmentSearchbarComponent,
    ExpandButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
