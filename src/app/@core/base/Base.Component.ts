import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppConstants } from "app/@constant/app.constant";
import { ErrorConfig } from "app/@constant/config";
import { Router } from "express";
import { BaseService } from "../service/Base.Service";
import { Broadcast } from "../events/broadcast";
import { LocalStorage } from "../helper/localStorage";


@Injectable({
  providedIn: "root",
})
export abstract class BaseComponent implements OnInit {
  public router: Router;
//   public SyncData: SyncDataService;
  protected activatedRoute: ActivatedRoute;
  protected localStorage: LocalStorage;
  protected broadcast: Broadcast;
  public BaseService?: BaseService<any>;

  public LookupData: any = {};
  
  public SharedData: any = {};

  

  public lookupConfigs: any = {};
  constructor() {
    this.activatedRoute = AppConstants.injector.get(ActivatedRoute);
    this.router = AppConstants.injector.get(Router);
    this.localStorage = AppConstants.injector.get(LocalStorage);
    this.broadcast = AppConstants.injector.get(Broadcast);
    // this.SyncData = AppConstants.injector.get(SyncDataService);
    // this.BaseService = AppConstants.injector.get(BaseService);
  }
  public modulename: any;
  public screenname: any;
  async ngOnInit() {
    // this.modulename = this.localStorage.get("modulename");
    // this.screenname = this.localStorage.get("screenname");
  }
  makeDropDownData(data: any, valueField: string, labelField: string) {
    // return new List<any>(data)
    //   .Select(
    //     (x) =>
    //       <any>{
    //         value: x[valueField],
    //         label: x[labelField],
    //       }
    //   )
    //   .ToArray();
  }

  navigate(url: string) {
    // this.router.navigate([url]);
  }

  

  protected async showToolbar(value: Boolean = true) {
    await this.broadcast.publish<Boolean>("showToolbar", value);
  }

  protected async showButtonList(value: Boolean = false) {
    await this.broadcast.publish<Boolean>("showButtonList", value);
  }
  protected async customList(value: any) {
    await this.broadcast.publish<any>("customList", value);
  }

  protected async hideAddToolbar(value: Boolean = false) {
    await this.broadcast.publish<Boolean>("hideadd", value);
  }

  protected async hideDeleteToolbar(value: Boolean = false) {
    await this.broadcast.publish<Boolean>("hidedelete", value);
  }

  protected async showYesNo(id: string, message: string, title?: string) {
    // await this.broadcast.publish<MessageBoxSettings>("showMessage", <
    //   MessageBoxSettings
    // >{
    //   id,
    //   type: MessageBoxType.yesNo,
    //   caption: title,
    //   message: message,
    // });
  }

  protected async showErrors(
    // messages: string | ErrorObject[],
    title?: string,
    displaymode?: number
  ) {
    await this.broadcast.publish<ErrorConfig>("showError", <ErrorConfig>{
    //   type: GenEnum.ErrorTypes.Error,
      title: title,
    //   messages: messages,
      displaymode: displaymode,
    });
  }

  protected async showSuccess(
    // messages: string | ErrorObject[],
    title?: string,
    displaymode?: number
  ) {
    await this.broadcast.publish<ErrorConfig>("showError", <ErrorConfig>{
    //   type: GenEnum.ErrorTypes.Success,
      title: title,
    //   messages: messages,
      displaymode: displaymode,
    });
  }

  protected async showWarnings(
    // messages: string | ErrorObject[],
    title?: string,
    displaymode?: number
  ) {
    await this.broadcast.publish<ErrorConfig>("showError", <ErrorConfig>{
    //   type: GenEnum.ErrorTypes.Warning,
      title: title,
    //   messages: messages,
      displaymode: displaymode,
    });
  }

  protected async showInfo(
    // messages: string | ErrorObject[],
    title?: string,
    displaymode?: number
  ) {
    await this.broadcast.publish<ErrorConfig>("showError", <ErrorConfig>{
    //   type: GenEnum.ErrorTypes.Info,
      title: title,
    //   messages: messages,
      displaymode: displaymode,
    });
  }
}
