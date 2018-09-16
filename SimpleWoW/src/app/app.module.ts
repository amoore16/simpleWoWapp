import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CharacterComponent } from './character/character.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddCharacterComponent } from './add-character/add-character.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    CharacterComponent,
    AddCharacterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
