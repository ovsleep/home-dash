export class DeviceSource{
    constructor(public id: number, public dispayName: string, public name: string, public active: boolean){}
    img():string{
        var ret = `/assets/img/${this.name}`;
        
        if(this.active){
            ret += '-a'
        }
        ret += '.png';
        return ret;
    }
}