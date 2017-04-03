import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../remote.service'
import { DeviceSource } from '../device-source'
import { KeyCommand, Command } from '../command'

@Component({
  selector: 'app-rc',
  templateUrl: './rc.component.html',
  styleUrls: ['./rc.component.css']
})

export class RcComponent implements OnInit {

  sources: [DeviceSource];
  source: DeviceSource;

  constructor(private remoteService: RemoteService) { 
  }

  getDeviceSources(): void {
        this.remoteService.getDeviceSources().then(sources => this.sources = sources);
  }

  ngOnInit() {
    this.getDeviceSources();    
  }

  selectSource(source: DeviceSource){
    this.source = source;
    this.remoteService.setActiveDevice(source.id)
  }

  sendKey(key: string, device: string){
     var deviceSelected = device || this.source.name; 
     var cmd = new Command();
     cmd.command = "key";
     cmd.data = new KeyCommand(deviceSelected, key);
     console.log('sending command ' + cmd);
     this.remoteService.sendCommand(cmd);
  }
}
