export enum DoorState {
    Initial,
    Open,
    Close
};

export class DoorsAnimation {
    
    constructor(openStyle:string,closeStyle:string) {
        this.openStyle = openStyle;
        this.closeStyle = closeStyle;
    }
    initialStyle : string = '';
    openStyle : string;
    closeStyle : string;

    SelectStyle(doorState: DoorState):string {
        switch (doorState) {
            case DoorState.Initial : return this.initialStyle;
            case  DoorState.Open : return this.openStyle;
            case  DoorState.Close : return this.closeStyle;
        }
    }
}