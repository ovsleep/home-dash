import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AutoGrowComponent } from './auto-grow/auto-grow.component';
import { SlickSliderComponent } from './slick-slider/slick-slider.component';
import { AcComponent } from './ac/ac.component';
import { ChannelSelectorComponent } from './channel-selector/channel-selector.component';
import { DeviceSelectorComponent } from './device-selector/device-selector.component';
import { SwitchComponent } from 'angular2-bootstrap-switch/components';

@NgModule({
  declarations: [
    AppComponent,
    AutoGrowComponent,
    SlickSliderComponent,
    AcComponent,
    ChannelSelectorComponent,
    DeviceSelectorComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
