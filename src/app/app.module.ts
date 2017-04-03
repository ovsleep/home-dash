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
import { RcComponent } from './rc/rc.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    AutoGrowComponent,
    SlickSliderComponent,
    AcComponent,
    ChannelSelectorComponent,
    DeviceSelectorComponent,
    SwitchComponent,
    RcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
