import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestModule } from './quest/quest.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlexLayoutModule, AppRoutingModule, QuestModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
