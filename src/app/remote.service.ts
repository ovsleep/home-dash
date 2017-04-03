import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';
import { DeviceSource } from './device-source'
import { DEVICE_SOURCES } from './mock-device-sources';
import { environment } from '../environments/environment';

import { CableChannel } from './cable-channel'
import { Command } from './command'

import 'rxjs/add/operator/toPromise';


@Injectable()
export class RemoteService {
    baseUrl = environment.remoteUrl;;
    //baseUrl = 'http://localhost:9589/api/remote';
    headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private _sendCommand(command:any):Promise<boolean>{
        const url = `${this.baseUrl}`;
        return this.http
                .post(url, JSON.stringify(command), {headers: this.headers})
                .toPromise()
                .then(response => response.json().message == "OK!")
                .catch(this.handleError);
    }

    public sendCommand(command:Command):Promise<boolean>{
        const url = `${this.baseUrl}`;
        return this.http
                .post(url, JSON.stringify(command), {headers: this.headers})
                .toPromise()
                .then(response => response.json().message == "OK!")
                .catch(this.handleError);
    }

    /* ***** Select Device ******* */    
    getDeviceSources(): Promise<[DeviceSource]> {
        return Promise.resolve(DEVICE_SOURCES); 
    }

    setActiveDevice(id:number): void {
        DEVICE_SOURCES.map((i) => { console.log(id); i.active = i.id == id;});
    }

    watchDeviceSource(source:DeviceSource):Promise<boolean>{
        let command = {
            'command': 'watch',
            'data': {
                'device': source.name
            }
        };
        this.setActiveDevice(source.id);
        return this._sendCommand(command);
    }

    watchChannel(channel:CableChannel):Promise<boolean>{
        let command = {
            'command': 'change',
            'data': {
                'channel': channel.number
            }
        };

        return this._sendCommand(command);
    }
    
    /* ***** AC ******* */
    setAc(mode:string, temp: number):Promise<boolean>{
        let command = {
            'command': 'ac',
            'data': {
                'mode': mode,
                'temp': temp
            }
        };

        return this._sendCommand(command);
    }

    off(device:string):Promise<boolean>{
        let command = {
            'command': 'off',
            'data': {
                'device': device
            }
        };

        return this._sendCommand(command);
    }

    
}
