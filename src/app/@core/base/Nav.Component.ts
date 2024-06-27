import { Injectable, AfterViewInit, ViewChildren, QueryList, ViewChild, Input, forwardRef } from "@angular/core";
import { FormBuilder, FormGroup, AbstractControl } from "@angular/forms";
import { AppConstants } from "app/@constant/app.constant";
import { ControlBase, LookupResult, errorArgs, LookupConfiguration } from "app/@constant/config";
import { Subscription } from "rxjs";
import { ToolbarEvent, ToolbarEventArg } from "../events/toolbar.event";
import { BaseService } from "../service/Base.Service";
import { IcsModalComponent } from "app/components/ics-modal/ics-modal.component";
import { BaseComponent } from "./Base.Component";


@Injectable({
    providedIn: "root",
})
export abstract class NavComponent<T>
    extends BaseComponent
    implements AfterViewInit {
    @ViewChildren(ControlBase)
    public controls!: QueryList<ControlBase>;
    //   @ViewChild("dcslookup") public lookup!: DcsLookupComponent;
    ShowMsgInfo: boolean = true;
    ngAfterViewInit(): void {
        this.toolbarEvent = AppConstants.injector.get(ToolbarEvent);

        if (!this.Modal) {
            this.toolbarSubscription = this.toolbarEvent
                .click()
                .subscribe(async (arg) => {
                    switch (arg.key) {
                        case "first":
                            await this.moveFirst();
                            break;
                        case "last":
                            await this.moveLast();
                            break;
                        case "next":
                            await this.moveNext();
                            break;
                        case "previous":
                            await this.movePrevious();
                            break;
                        case "save":
                            await this.save();
                            break;
                        case "delete":
                            await this.delete();
                            break;
                        case "clear":
                            await this.clear();
                            break;
                        case "search":
                            await this.showLister("lister");
                            break;
                        case "customButtonClick":
                            await this.customNavClickBase(arg.value);
                            break;
                        case "refresh":
                            await this.refresh();
                            break;
                    }
                });

            //   this.lookupSubscription = this.broadcast
            //     .observable<LookupResult>("lookup")
            //     .subscribe(async (arg) => {
            //       switch (arg.value.lookupId) {
            //         case "lister":
            //           if (arg.value.data.PrimaryKeyValue) {
            //             var dto = await this.service.Get(
            //               arg.value.data.PrimaryKeyValue
            //             );
            //             if (dto.IsSuccess) {
            //               arg.value.data = dto.Data;
            //             } else {
            //               this.showErrors(dto.Errors);
            //             }
            //           }
            //           this.setDto(<DataTransferObject<T>>{
            //             Data: arg.value.data,
            //             KeyValue: arg.value.data.PrimaryKeyValue,
            //           });
            //           break;
            //       }
            //     });

            //   this.messageBoxSubscription = this.broadcast
            //     .observable<MessageBoxResult>("messageBoxResult")
            //     .subscribe(async (arg) => {
            //       switch (arg.value.id) {
            //         case "Delete":
            //           if (arg.value.result === MessageBoxResultType.yes) {
            //             await this.confirmDelete();
            //           }
            //           break;
            //       }
            //     });
            //   this.broadcast.publish<string>("title", this.title);
            //   // this.modalInitialize();
            //   this.getListingData();
            //   this.Focus();
        } else {
            //this.showToolbar(false);
        }

        // this.broadcast.observable<errorArgs>("confirmdialog").subscribe((x) => {
        //   if (this.title === x.value.Id) this.confirmErrors(x.value);
        // });
    }
    private _model: T = <T>{};
    //   private _dto: DataTransferObject<T> = <DataTransferObject<T>>{};
    private currentAddOn: any;
    public key: any;
    public toolbarEvent!: ToolbarEvent;
    private toolbarSubscription!: Subscription;
    private lookupSubscription!: Subscription;
    public messageBoxSubscription!: Subscription;

    protected fb: FormBuilder;
    public title: string = "";
    public set setTitle(value: string) {
        this.title = value;
        if (this.title) this.broadcast.publish<string>("title", this.title);
    }
    private userrole: any;
    public myForm!: FormGroup;
    @Input()
    Modal: boolean = false;
    @ViewChildren(forwardRef(() => IcsModalComponent))
    myscreens!: QueryList<IcsModalComponent>;
    constructor(public service: BaseService<T>) {
        super();

        this.fb = AppConstants.injector.get(FormBuilder);
        this.initilizeForm();

        this.broadcast.publish<FormGroup>("formgroup", this.myForm);

        // this.hideAddToolbar(false);
        // this.hideDeleteToolbar(false);
        // this.showToolbar(true);
        // this.showButtonList(false);
        this.userrole = JSON.parse(localStorage.getItem("userrole")!);
    }

    initilizeForm() { }

    //  Properties
    get model(): any {
        return this._model;
    }

    set model(value: any) {
        this._model = value || <T>{};
    }

    get DataAddOn(): T {
        return this.currentAddOn;
    }

    set DataAddOn(value: T) {
        this.currentAddOn = value || <T>{};
    }

    //   get dto(): DataTransferObject<T> {
    //     return this._dto;
    //   }

    async ngOnInit() { }

    ngOnDestroy() {
        if (this.toolbarSubscription) {
            this.toolbarSubscription.unsubscribe();
        }

        if (this.lookupSubscription) {
            this.lookupSubscription.unsubscribe();
        }

        if (this.messageBoxSubscription) {
            this.messageBoxSubscription.unsubscribe();
        }

        if (this.service !== undefined) this.service.clearCondition();
    }

    // Service Method
    async moveNext() {
        if (this.checkUserRole(this.service.controller, "view")) {
            if (this.key === undefined) this.key = "first";

            const dto = await this.service.getNext(this.key);
            this.setDto(dto);
        }
    }

    async movePrevious() {
        if (this.checkUserRole(this.service.controller, "view")) {
            if (this.key === undefined) this.key = "last";

            const dto = await this.service.getPrevious(this.key);
            this.setDto(dto);
        }
    }

    async moveLast() {
        if (this.checkUserRole(this.service.controller, "view")) {
            const dto = await this.service.getLast();

            this.setDto(dto);
        }
    }

    async moveFirst() {
        if (this.checkUserRole(this.service.controller, "view")) {
            const dto = await this.service.getFirst();
            this.setDto(dto);
        }
    }

    async clear() {
        await this.beforeClear();
        Object.keys(this.myForm.controls).map((controlName) => {
            let ctr = this.myForm.get(controlName);
            if (ctr) {
                ctr.markAsUntouched({ onlySelf: true });
                ctr.markAsPristine({ onlySelf: true });
            }
        });
        this.model = <T>{};
        this.currentAddOn = {};
        this.key = undefined;
        this.setFormValues();
        await this.afterClear();
        await this.Focus();
    }

    allowSaving: boolean = true;

    async save(): Promise<boolean> {
        if (this.iscustomSaving) {
            await this.customSaving();
            return this.allowSaving;
        } else {
            this.allowSaving = true;
            let rtn: boolean = false;
            if (
                this.checkUserRole(
                    this.service.controller,
                    this.key ? "update" : "create"
                )
            ) {
                let isDirty: boolean = false;
                let ctrl;
                let dirtycontrol: Array<AbstractControl> = [];
                this.myForm.reset(this.myForm.value);

                Object.keys(this.myForm.controls).map((controlName) => {
                    ctrl = this.myForm.get(controlName);
                    if (ctrl) {
                        ctrl.markAsDirty({ onlySelf: true });
                        ctrl.markAsTouched({ onlySelf: true });
                    }
                    if (!isDirty) {
                        isDirty = ctrl?.errors !== null;
                    } else {
                        if (ctrl) dirtycontrol.push(ctrl);
                    }
                });

                if (dirtycontrol && dirtycontrol.length && dirtycontrol.length > 0) {
                    let invalidControl: any =
                        document.getElementsByClassName("ng-invalid");
                    if (invalidControl && invalidControl[1]) {
                        invalidControl[1].focus();
                    }
                }

                if (!isDirty) {
                    let obj = await this.beforeSave();
                    const dto = this.getDto();
                    // dto.DataAddon = this.DataAddOn;
                    // dto.ReturnObject = true;
                    if (this.allowSaving) {
                        const result = await this.service.save(dto);
                        if (result.IsSuccess) {
                            rtn = true;
                            if (this.ShowMsgInfo == true) {
                                this.showSuccess("Record saved successfully");
                            }
                            // 
                            this.setDto(result);
                            await this.afterSave();
                        } else {
                            this.showErrors(result.Errors);

                            if (result.Errors) {
                                result.Errors.forEach((error) => {
                                    if (error && error.Fields) {
                                        error.Fields.forEach((controlName) => {
                                            let ctrl = this.myForm.get(controlName);
                                            if (ctrl) {
                                                ctrl.setErrors({ incorrect: "My Error" });
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    } else {
                    }
                }
            }
            return rtn;
        }
    }
    async delete() {
        if (this.model["PrimaryKeyValue"] !== undefined) {
            if (this.checkUserRole(this.service.controller, "delete")) {
                await this.showYesNo(
                    "Delete",
                    "Are you sure you want to delete record?",
                    "Warning"
                );
            }
        } else {
            this.showErrors("Record not found to delete..");
        }
    }

    async confirmDelete() {
        const result: any = await this.service.delete(this.key);

        if (result !== undefined && result.IsSuccess) {
            this.setDto(result);
            this.showSuccess("Record deleted successfully");
        } else if (result !== undefined || !result.IsSuccess) {
            this.showErrors(result.Errors);
        }
    }

    // Protected Methods

    protected async beforeDisplay() { }

    protected async afterDisplay() { }

    protected async beforeClear() { }

    protected async afterClear() { }

    protected async beforeSave() { }

    protected async afterSave() { }

    protected async getListingData() {
        if (this.title !== "") {
            this.startLoading()
        }
        else {
            this.stopLoading()
        }
    }

    public isCustomSerach: Boolean = false;

    //   @Input()
    //   public ListerDto: DataTransferObject<any> = <DataTransferObject<any>>{};

    async showLister(lookupId: string) {
        // if (this.checkUserRole(this.service.controller, "view")) {
        //   if (this.lookupConfigs.lister) {
        //     var dto: DataTransferObject<any> = <DataTransferObject<any>>{};
        //     if (this.isCustomSerach === true) {
        //       await this.SearchOveride();
        //       if (this.ListerDto) dto = this.ListerDto;
        //     } else {
        //       dto = await this.service.getAll();
        //     }

        //     if (dto.IsSuccess) {
        //       this.showLookup(
        //         this.lookupConfigs.lister,
        //         dto.Data,
        //         lookupId,
        //         this.title
        //       );
        //     } else {
        //       this.showErrors(dto.Errors);
        //     }
        //   }
        // }
    }

    showLookup(
        config: LookupConfiguration[],
        data: any,
        lookupId: string,
        caption: String
    ) {
        // if (this.lookup) {
        //   this.lookup.Config = config;
        //   this.lookup.Data = data;
        //   this.lookup.Caption = caption;
        //   this.lookup.LookupId = lookupId;

        //   this.lookup.open();
        // }
    }

    public setDto(dto: any) { }
    //   public setDto(dto: DataTransferObject<T>) {
    //     this.forcestartLoading()
    //     this._dto = dto;
    //     this.beforeDisplay();

    //     this.model = dto.Data;

    //     if (dto && dto.Errors) this.showErrors(dto.Errors[0].Description);

    //     this.setFormValues();

    //     this.currentAddOn = dto.DataAddon;
    //     this.key = dto.KeyValue;

    // this.afterDisplay().then(()=>{
    //      setTimeout(() => {
    //       this.stopLoading()
    //       this.forcestopLoading()
    //      }, 0);
    //     });
    //     this.forcestopLoading()
    //   }

    private getDto() {
        Object.keys(this.myForm.value).forEach((name) => {
            this.model[name] = this.myForm.value[name];
        });

        // const result = <DataTransferObject<T>>{
        //   Data: this.model,
        //   DataAddon: this.currentAddOn,
        //   KeyValue: this.key,
        // };

        // return result;
    }

    private setFormValues() {
        Object.keys(this.myForm.value).forEach((name) => {
            if (this.model && this.model[name]) {
                const value = this.model[name];
                const ctrl = this.myForm.controls[name];

                if (name === "starttime") {
                    // ctrl.setValue(moment(value).format('HH:mm'));
                    ctrl.setValue(value);
                } else {
                    ctrl.setValue(value);
                }
            } else {
                this.myForm.controls[name].setValue(undefined);
            }
        });
    }

    async openScreen(screenCode: string) {
        if (screenCode) {
            const data = this.myscreens.filter((o) => o.screenCode === screenCode)[0];
            if (data) {
                await data.open();
            } else {
                console.log("Screen not found against screen code");
            }
        } else {
            console.log("Please give Screen Code");
        }
    }

    protected async modalInitialize() { }

    startLoading() {

        setTimeout(() => {
            if (this.toolbarEvent) {
                this.toolbarEvent.boardcast("start");
            }
        }, 0);
    }
    stopLoading() {
        setTimeout(() => {
            if (this.toolbarEvent) {
                this.toolbarEvent.boardcast("stop");
            }
        }, 0);
    }
    forcestartLoading() {
        setTimeout(() => {
            if (this.toolbarEvent) {
                this.toolbarEvent.boardcast("forcestart");
            }
        }, 0);
    }
    forcestopLoading() {
        setTimeout(() => {
            if (this.toolbarEvent) {

                this.toolbarEvent.boardcast("forcestop")
            };
        }, 0);
    }

    checkUserRole(controller: string, rightId: string): boolean {
        var chk: boolean = false;
        if (this.userrole && controller) {
            if (
                this.userrole.utroledtl.filter(
                    (o: any) => o.controllerId === controller && o.utroleright.length > 0
                )[0]
            ) {
                const utrolerights = this.userrole.utroledtl.filter(
                    (o: any) => o.controllerId === controller && o.utroleright.length > 0
                )[0].utroleright;
                if (utrolerights && utrolerights.length > 0) {
                    const right = utrolerights.filter(
                        (e: any) => e.controllerId === controller && e.rightId === rightId
                    )[0];
                    if (right) {
                        chk = true;
                    }
                }
            }
        }

        if (!chk && controller) {
            console.log("Controller: [" + controller + "], Right: [" + rightId + "]");
            this.showErrors("Access denied.");
        }
        return chk;
    }

    public setCustomFormValues(form: FormGroup, model: any) {
        Object.keys(form.value).forEach((name) => {
            if (model && model[name]) {
                const value = model[name];
                const ctrl = form.controls[name];

                if (name === "starttime") {
                    // ctrl.setValue(moment(value).format('HH:mm'));
                    ctrl.setValue(value);
                } else {
                    ctrl.setValue(value);
                }
            }
        });
    }

    public setTitleNIcon(value: string, titleIcon: string) {
        this.title = value;
        this.broadcast.publish<string>("title", this.title);
        this.broadcast.publish<string>("titleIcon", titleIcon);
    }

    async customNavClickBase(value: ToolbarEventArg) {
        if (value) {
            await this.CustomNavClick(value);
        }
    }

    protected async CustomNavClick(value: any) { }

    @Input()
    iscustomSaving: boolean = false;

    protected async customSaving() { }

    protected confirmErrors(value: errorArgs) { }

    protected async SearchOveride() { }

    async Focus() {

        if (this.controls) {
            var control: any = this.controls.filter(
                (o: any) => o["disabled"] !== true
            )[0];

            if (control && control.element) {
                control.renderer.invokeElementMethod(
                    control.element.nativeElement.children[1].children[0],
                    "focus",
                    [event]
                );
            } else if (control && control.ixsTextBox) {
                control.ixsTextBox.nativeElement.focus();
            }
        }
    }

    async focus(e: any) {
        if (e.Shift && e.keyCode == 9) {
            await this.showLister("lister");
        }
    }

    async refresh() {
        this.getListingData();
    }
    public RemoveHtmlTags(input: any) {
        const htmltext: any = input;
        const textWithoutTags: any = htmltext.replace(/<.*?>/g, '');
        return textWithoutTags;
    }
}
