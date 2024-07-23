import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, ViewEncapsulation  } from "@angular/core";
import { ModalComponent, ModalManager } from "ngb-modal";
declare var $: any;

@Component({
    selector: 'ics-modal',
    templateUrl: 'ics-modal.component.html',
    styleUrls: ['ics-modal.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class IcsModalComponent implements AfterViewInit, OnInit {
    Size: any;
    ModalSize: any;
    ngAfterViewInit(): void {
    }
    //   private lookupSubscription?: Subscription;

    async ngOnInit() {
        // field configration work don't remove
        // var userInfo: any = userInfo = JSON.parse(localStorage.getItem("utuser") || '{}');
        // if (userInfo && userInfo.usertypeid && userInfo.usertypeid == GenEnum.UserType.SuperAdmin) {
        //   this.showConfigButton = true;
        // }
        // field configration work don't remove
    }

    // async drag() {
    //     $(".modal-dialog").draggable({
    //         handle: ".modal-header",
    //     });
    //     $("modal-dialog").css({ top: 0, left: 0, right: 0, bottom: 0 });
    // }

    //   @ContentChild("ngContent") screen: NavModalComponent<any> | any;

    // showConfigButton: boolean = false;
    //   @Input()
    //   showList: boolean = false;
    //   @Input()
    //   backdrop: boolean = true;

    //   @Input()
    //   closeOnOutsideClick: boolean = false;

    //   @Output()
    //   toolbarClickList: EventEmitter<customButtonList> = new EventEmitter<customButtonList>();

    groups: any = [];
    FormData: any;
    FieldConfig: boolean = false;

    //   data: customButtonList[] = [];

    //   @Input()
    //   set customButtonList(value: any) {
    //     this.data = value;
    //     this.loadData();
    //   }
    //   get customButtonList() {
    //     return this.data;
    //   }

    // field configration work don't remove
    // openDocfieldModal() {

    //   if (this.FormData != undefined) {
    //     this.FieldConfig = true;
    //     this.FieldConfigModal?.open();
    //   }
    //   else {
    //     this.dcserror.showErrors("There Is No Data Fields For Configuration", 'Alert');
    //   }
    // }
    // closeDocfieldModal() {
    //   this.FieldConfig = false;
    //   this.FieldConfigModal?.closeModal();
    // }
    // field configration work don't remove
    //   CLoseValidFieldModal() {
    //     this.ValidFieldModal?.closeModal();
    //   }
    //   OpenValidFieldModal() {
    //     this.ValidFieldModal?.open("md");
    //   }
    //   customButtonListClick(item: customButtonList) {
    //     this.toolbarClickList.emit(item);
    //   }

    @Input()
    public Caption: String = "";

    @Input()
    screenCode: string = "";

    width: string = "XL";
    height: string = "auto";

    //   @Input()
    //   modaltype: number = Enum.modalType.Normal;

    @Input()
    displayLastRecord: boolean = false;

    @Input()
    showClose: boolean = true;

    //   @Input()
    //   mode: number = Enum.Mode.Default;

    @Input()
    set lvl(val: number) {
        this.zindex += Number(val);
    }
    get lvl() {
        return this.zindex;
    }

    @Input()
    modalSize: string = 'XL';

    @Input()
    customClose: boolean = false;

    zindex: number = 1049;

    @ViewChild("myModal") myModal?: ModalComponent;
    private modalRef: any;

    @Input()
    hideNew: boolean = false;

    @Input()
    hideSave: boolean = false;

    @Input()
    hideSaveClose: boolean = false;

    @Input()
    hideHeader: boolean = false;
    @Input()
    hideFooter: boolean = false;

    @Input()
    hideClose: boolean = false;

    @Input()
    hideprint: boolean = false;

    @Input()
    hideModalToolbar: boolean = false;

    constructor(private modalService: ModalManager,) { }

    async open(size: string = "lg", isCentered: boolean = false) {
        // await this.drag();

        // if (this.screen) {
        //   this.Caption =
        //     this.Caption && this.Caption === this.screen.title
        //       ? this.Caption
        //       : this.screen.title
        //         ? this.screen.title
        //         : "-";
        // }

        if (!this.modalRef || !this.modalRef.isOpened) {
            this.modalRef = this.modalService.open(this.myModal, {
                size: size,
                modalClass: "mymodal",
                hideCloseButton: this.hideClose,
                centered: isCentered,
                // backdrop: this.backdrop,
                animation: true,
                keyboard: false,
                // closeOnOutsideClick: this.closeOnOutsideClick,
                backdropClass: "modal-backdrop",
            });

            //   if (this.screen) {
            //     this.screen.LookupData = [];
            //     await this.screen.initialize();

            //     if (this.screen.myForm) {
            //       this.FormData = this.screen.myForm.value;
            //     }


            //   }
            //   if (this.mode === Enum.Mode.New) {
            //     // this.hideprint = true
            //     localStorage.setItem("AccessKey", "create")
            //   }
            //   else if (this.mode === Enum.Mode.Edit) {
            //     // this.hideprint = false
            //     localStorage.setItem("AccessKey", "update")
            //   }
            //   else if (this.mode === Enum.Mode.Display) {
            //     // this.hideprint = false
            //     localStorage.setItem("AccessKey", "display")
            //   }
            //   this.triggeronOpen(this.screen);
            //   if (this.displayLastRecord && this.mode !== Enum.Mode.New) {
            //     await this.screen?.moveLast();
            //   }
        }
    }

    async customClosed() {
        this.myModal?.close();
    }

    async closeModal() {
        // await this.innerClose();

        if (this.modalService) {
            // safe to use the function
            this.modalService.close(this.modalRef);
        }

    }
    // async openFieldConfig() {
    //   this.FieldConfigModal?.open();
    // }
    localStorage: any

    // Modal side menu working

    isShown: boolean = false;

    dropdownToggle($event: { stopPropagation: () => void }) {
        $event.stopPropagation();
        this.isShown = !this.isShown;
    }
    @ViewChild("modalsidemenu") modalsidemenu?: ElementRef;
    @HostListener("document:click", ["$event"]) DocumentClick(event: Event) {
        if (
            this.modalsidemenu &&
            this.modalsidemenu.nativeElement &&
            this.modalsidemenu.nativeElement.contains(event.currentTarget)
        ) {
            this.isShown = true;
        } else {
            this.isShown = false;
        }
    }

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        this.modalService.close(this.modalRef);
    }
    outsideClick() {
        this.isShown = false;
    }

    // End

    @Output()
    onOpen: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    onClose: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    onSave: EventEmitter<any> =  new EventEmitter<any>();

    public triggeronOpen(event: any) {
        this.onOpen.emit(event);
    }

    public triggeronClose(event: any) {
        this.onClose.emit(event);
    }
    async SaveandClose() {
        this.closeModal();
        this.onSave.emit();
    }
}
