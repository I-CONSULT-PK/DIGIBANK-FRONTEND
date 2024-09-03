
import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    OnInit,
    Output,
    ViewChild,
} from "@angular/core";
import { ModalComponent, ModalManager } from "ngb-modal";
import { ErrorComponentService } from "./ics-error.service";
import { GenEnum } from "app/@constant/general.enum";
import { errorArgs } from "app/@constant/config";
// import { ToastrService } from "ngx-toastr";
declare var $: any;

@Component({
    selector: 'ics-error',
    templateUrl: 'ics-error.component.html',
    styleUrls: ['ics-error.component.scss']
})
export class IcsErrorComponent implements OnInit {
    @Input() ErrorArray: any[] = [];
    title: any;
    type: number = 0;
    private innerValue: number = 0;
    Id: string = "";
    toolbarEvent: any;
    modal: any;
    get value() {
        return this.innerValue;
    }

    @ViewChild("myModal") errorModal?: ModalComponent;

    @Output()
    confirm: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private modalService: ModalManager,
        // private toaster: ToastrService,
        private errorService: ErrorComponentService
    ) { }

    async ngOnInit() {
        this.errorService.showErrors().subscribe((isOpen) => { });
    }

    public showErrors(
        messages: string | any,
        title?: string,
        type?: number,
        displaymode: number = 1
    ) {
        this.ErrorArray = [];
        let msg: any;
        let pushList = {} as any;
        var mode = 1;
        if (messages) {
            if (type) {
                this.type = type;
            } else {
                this.type = GenEnum.ErrorTypes.Error;
            }
            if (displaymode && displaymode === mode) {
                if (title === undefined) {
                    title =
                        this.type === GenEnum.ErrorTypes.Warning
                            ? "Warning"
                            : this.type === GenEnum.ErrorTypes.Info
                                ? "Information"
                                : this.type === GenEnum.ErrorTypes.Success
                                    ? "Success"
                                    : "Error";
                }

                this.title = title;

                if (typeof messages === "string") {
                    msg = messages;
                    this.ErrorArray = [
                        {
                            Description: msg,
                            Fields: [""],
                        },
                    ];
                } else {
                    var count = 1;
                    messages.forEach((element) => {
                        pushList = {
                            Description: count + "." + " " + element,
                            Fields: [],
                        };
                        this.ErrorArray.push(pushList);
                        count++;
                    });
                }

                this.modal = this.modalService.open(this.errorModal, {
                    size: "md",
                    modalClass: "mymodal",
                    hideCloseButton: false,
                    centered: true,
                    backdrop: true,
                    animation: true,
                    keyboard: true,
                    closeOnOutsideClick: false,
                    backdropClass: "modal-backdrop",
                });

                // setTimeout(() => {
                //     this.drag();
                // }, 0);
            } else {
                if (typeof messages === "string") {
                    msg = messages;
                } else {
                    msg = "";
                    messages.forEach((error) => {
                        msg += error;
                        msg += "<br/>";
                    });
                }
                // if (type === GenEnum.ErrorTypes.Error) {
                //     this.toaster.error(msg, title);
                //     this.innerClose(1);
                // } else if (type === GenEnum.ErrorTypes.Success) {
                //     this.toaster.success(msg, title);
                //     this.innerClose(1);
                // } else if (type === GenEnum.ErrorTypes.Info) {
                //     this.toaster.info(msg, title);
                //     this.innerClose(1);
                // } else if (type === GenEnum.ErrorTypes.Warning) {
                //     this.toaster.warning(msg, title);
                // }
            }
        }
    }

    async innerClose(value: number) {
        this.innerValue = value;

        this.ErrorArray = [];
        if (this.modalService && this.modal) this.modalService.close(this.modal);

        // $("#modalLRForm").modal('hide');
        this.confirm.emit(<errorArgs>{
            Id: this.Id,
            value: this.innerValue,
            type: this.type,
        });
    }

    @HostListener("document:keyup", ["$event"]) handleKeyUp(event: any) {
        if (event.keyCode === 27) {
            this.innerClose(0);
        } else if (event.keyCode === 13) {
            this.innerClose(1);
        }
    }

    // async drag() {
    //     $(".modal-dialog").draggable({
    //         handle: ".modal-header",
    //     });
    //     var modal = $("#errorModal");
    //     var body = $(window);
    //     if (modal[0]) {
    //         var dialog: any = modal[0].children[0];
    //         var h = modal[0].children[0].clientHeight;
    //         var bh: any = body.height();
    //         dialog["style"].top = (bh - h) / 2 - 50 + "px";
    //     }
    // }
}
