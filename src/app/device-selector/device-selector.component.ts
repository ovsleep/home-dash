import { Component, OnInit } from '@angular/core';
import { DeviceSource } from '../device-source'
import { RemoteService } from '../remote.service';

@Component({
  selector: 'app-device-selector',
  templateUrl: './device-selector.component.html',
  styleUrls: ['./device-selector.component.css']
})
export class DeviceSelectorComponent implements OnInit {

  sources: [DeviceSource];

    ngOnInit(): void {
        console.log('init'); 
        this.getDeviceSources();
    }

    constructor(private remoteService: RemoteService){ console.log('hola');  }

    getDeviceSources(): void {
        this.remoteService.getDeviceSources().then(sources => this.sources = sources);
    }

    watchSource(source: DeviceSource): void {
        console.log(`watching ${source.name}`);
        this.remoteService.watchDeviceSource(source);
    }

}
