import { Component } from '@angular/core';
import { RemoteService } from './remote.service'
import { DirectvService } from './directv.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RemoteService, DirectvService]
})
export class AppComponent {
  title = 'app works!';
}
