import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
// import "rxjs/add/operator/filter";
// import "rxjs/add/operator/map";

@Injectable({ providedIn: "root" })
export class Broadcast {
  private broadcastSubject: Subject<BroadcastArg<any>>;
  constructor() {
    this.broadcastSubject = new Subject<BroadcastArg<any>>();
  }

  async publish<T>(key: string, value: T) {
    const arg: BroadcastArg<T> = <BroadcastArg<T>>{
      key,
      value,
    };
    return await this.broadcastSubject.next(arg);
  }

//   observable<T>(key: string): Observable<BroadcastArg<T>> {
//     return this.broadcastSubject.filter((x) => x.key === key);
//   }
}

export interface BroadcastArg<T> {
  key: string;
  value: T;
}
