import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class ToolbarEvent {
  private toolBarEvent: Subject<ToolbarEventArg>;
  constructor() {
    this.toolBarEvent = new Subject<ToolbarEventArg>();
  }

  async boardcast(key: string, value?: any) {
    const arg: ToolbarEventArg = <ToolbarEventArg>{};
    arg.key = key;
    arg.value = value;
    await this.toolBarEvent.next(arg);
  }

  click(): Observable<ToolbarEventArg> {
    return this.toolBarEvent.asObservable();
  }
}

export interface ToolbarEventArg {
  key: string;
  value: any;
}
