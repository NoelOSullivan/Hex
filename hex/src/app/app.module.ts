import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { ControlsModule } from './controls/controls.module';
import { ControlsService} from './services/controls.service';
import { ContentModule } from './content/content.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    HammerModule,
    MenuModule,
    ControlsModule,
    ContentModule,
  ],
  providers: [ControlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
