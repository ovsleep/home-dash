import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../remote.service';

@Component({
  selector: 'app-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.css']
})

export class AcComponent {
    temp = 24;
    mode = true;

    constructor(private remoteService: RemoteService){}

    sendCommand(): void {
        console.log(`setting ${this.mode} - ${this.temp}`);
        this.remoteService.setAc(this.mode ? 'hot' : 'cold', this.temp);
    }

    turnOff(): void{
        console.log(`turn off ac`);
        this.remoteService.off("ac");
    }

}
