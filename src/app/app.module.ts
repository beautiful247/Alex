import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { BlocksBoardComponent } from './components/blocks-board/blocks-board.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksBoardComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
