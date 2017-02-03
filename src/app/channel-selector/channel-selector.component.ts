import { Component, OnInit } from '@angular/core';
import { CableChannel } from '../cable-channel';
import { DirectvService } from '../directv.service';
import { RemoteService } from '../remote.service';

@Component({
  selector: 'app-channel-selector',
  templateUrl: './channel-selector.component.html',
  styleUrls: ['./channel-selector.component.css']
})
export class ChannelSelectorComponent implements OnInit {

    channels: CableChannel[];

    ngOnInit(): void {
        this.getChannels();
    }

    constructor(private directvService: DirectvService,
                private remoteService: RemoteService){}

    getChannels(): void {
        this.directvService.getCableChannels().subscribe(channels => this.channels = channels);
    }

    watchChannel(channel: CableChannel): void {
        this.remoteService.watchChannel(channel);
    }
}
