import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ErrorComponentService {
  public isOpen$ = new BehaviorSubject(false);

  public toggle(): void {
    this.isOpen$.next(!this.isOpen$.getValue());
    console.log("Im inside toggle");
  }

  public showErrors(errors?: any[]): Observable<boolean> {
    // console.log("Im inside getIsOpen");
    return this.isOpen$;
  }
}
