import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
} from '@angular/material';

import { APIService } from '../services/api.service';
import { GameRowComponent } from './components/game-row/game-row.component';
import { BracketComponent } from './components/bracket/bracket.component';

@NgModule({
  declarations: [
    AppComponent,
    GameRowComponent,
    BracketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    HttpModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
