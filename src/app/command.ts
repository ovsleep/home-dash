export class CommandData{

}

export class WatchCommand extends CommandData{
    device: string;
}

export class ChangeCommand extends CommandData{
    channel: number;
}

export class OffCommand extends CommandData{
    device: string;
}

export class ACCommand extends CommandData{
    mode: string;
    temp: number;
}

export class KeyCommand extends CommandData{
    constructor(private device: string, private key: string){ super(); }
}

export class Command{
    command: string;
    data: CommandData;
}