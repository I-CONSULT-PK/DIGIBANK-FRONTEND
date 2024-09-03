import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalComponent, ModalManager } from "ngb-modal";
import { BaseComponent } from "../../@core/base/Base.Component";
// import {
//   MessageBoxResult,
//   MessageBoxResultType,
//   MessageBoxSettings,
// } from "./messagebox.config";

@Component({
  selector: "app-dcsMessageBox",
  templateUrl: "./MessageBox.component.html",
  // styleUrls: ["./MessageBox.component.scss"],
})
export class MessageBoxComponent extends BaseComponent implements OnInit {
  // public setting: MessageBoxSettings = <MessageBoxSettings>{};

  @ViewChild("deletemodal")
  public modal?: ModalComponent;
  modalRef: any;

  constructor(private modalService: ModalManager) {
    super();
  }

  async ngOnInit() {
  }

  // open(setting: MessageBoxSettings) {
  //   this.setting = setting;

  //   this.modalRef = this.modalService.open(this.modal, {
  //     size: "md",
  //     modalClass: "mymodal ",
  //     hideCloseButton: false,
  //     centered: true,
  //     backdrop: true,
  //     animation: true,
  //     keyboard: false,
  //     closeOnOutsideClick: false,
  //     backdropClass: "modal-backdrop",
  //   });

  //   setTimeout(() => {
  //     this.drag();
  //   }, 0);
  // }

  select(event: any) {
    this.modalService.close(this.modalRef);
  }

  async ok() {
    // await this.publish(MessageBoxResultType.ok);
  }

  async yes() {
    // await this.publish(MessageBoxResultType.yes);
  }

  async no() {
    // await this.publish(MessageBoxResultType.no);
  }

  async cancel() {
    // await this.publish(MessageBoxResultType.cancel);
  }

  // private async publish(result: MessageBoxResultType) {
  //   await this.broadcast.publish<MessageBoxResult>("messageBoxResult", <
  //     MessageBoxResult
  //   >{
  //     id: this.setting.id,
  //     result,
  //   });

  //   this.modalService.close(this.modalRef);
  // }

  async drag() {
    // $(".modal-dialog").draggable({
    //   handle: ".modal-header"
    // });
    // var modal = $("#delelte");
    // var body = $(window);
    // var dialog = modal[0].children[0];
    // // $(".modal-dialog").css({ top: 0, left: 0, right: 0, bottom: 0 });
    // var h = modal[0].children[0].clientHeight;
    // var bh = body.height();
    // dialog['style'].top = ((bh - h) / 2) - 50 + "px";
  }
}
