import { Component, trigger,
    state,
    style,
    transition,
    animate } from '@angular/core'

@Component({
  selector: 'app-auto-grow',
  templateUrl: './auto-grow.component.html',
  styleUrls: ['./auto-grow.component.css'],
  animations: [
        trigger('statusChange', [
            state('false', style({ transform: 'scale(1)' })),
            state('true', style({ transform: 'scale(1.2)' })),
            transition('true <=> false', animate('200ms'))
        ])
    ]
})
export class AutoGrowComponent {

    status: boolean = false;
    log: string = '';
    lastEventType: string;

 
    get statusStr():string {
        return this.status.toString();
    }
 
    setStatus (value:boolean, event:any)
    {
        if(!this.lastEventType){
            this.lastEventType = event.type.startsWith('mouse') ? 'mouse' : 'touch';
        }

        if(this.lastEventType == 'touch'){
            if(event.type.startsWith('mouse')){
                return; //ignore event if the previous was a touch event
            }
            else{
                this.lastEventType = 'touch';
            }
        }

        this.status = value;
    }

}