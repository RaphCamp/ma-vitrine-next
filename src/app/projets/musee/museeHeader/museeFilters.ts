export class MuseeFilter {
    Title : string;
    Values: string [];
    OnclickEvent : any | undefined;
    private _ActualValue: string | undefined = undefined; 
    public get ActualValue(): string | undefined {
        return this._ActualValue;
    }
    public set ActualValue(value: string | undefined) {
        this._ActualValue = value;
    }

    constructor(title:string,values:string[],onclickEvent:any|undefined) {
        this.Title = title;
        this.Values = values;
        this.OnclickEvent = onclickEvent;
    }
}