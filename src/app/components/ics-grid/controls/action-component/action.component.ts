import { Data, Router } from '@angular/router';
import { Component } from "@angular/core";
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from "ag-grid-community";
import { AgRendererComponent } from "ag-grid-angular";
import { Subscription } from "rxjs";
import { Broadcast } from 'app/@core/events/broadcast';
import { LocalStorage } from 'app/@core/helper/localStorage';
import { IcsGridComponent } from '../../ics-grid.component';
import { AppConstants } from 'app/@constant/app.constant';
import { Enum, ErrorConfig, modalArgs } from 'app/@constant/config';
import { GenEnum } from 'app/@constant/general.enum';
// import {
//   MessageBoxResult,
//   MessageBoxResultType,
//   MessageBoxSettings,
//   MessageBoxType,
// } from "../../../MessageBox/";

@Component({
  selector: "actions-editor-cell",
  template: `
    <div class="divCenter">
      <a
        class="flat-icon-grid"
        (click)="disableView || viewScreen()"
        title="View"
        [hidden]="hideView"
      >
        <i class="fa fa-credit-card flat-icon-grid"></i>
      </a>
      <a
        class="flat-icon-grid"
        (click)="disableEdit || editScreen()"
        title="Edit"
        [hidden]="hideEdit"
      >
        <i class="fa fa-edit flat-icon-grid"></i>
      </a>
      <a
        class="flat-icon-grid"
        (click)="disableDelete || recorddelete()"
        title="Delete"
        [hidden]="hideDelete"
      >
        <i class="fa fa-trash flat-icon-grid"></i>
      </a>
      <div></div>
    </div>
  `,
  styles: [
    "a:hover{cursor:pointer} .divCenter{    text-align: -webkit-center; padding: 0px 6px 0 0;}",
  ],
})
export class GridActionsComponent implements AgRendererComponent {
  messageBoxSubscription!: Subscription;
  protected broadcast!: Broadcast;
  FinPolicy: any = 'hide';
  docsubtype: boolean = false
  public LookupData: any = {};
  constructor(
    private localStorage: LocalStorage,
    private router: Router,
    public dcsgrid: IcsGridComponent) {
    this.broadcast = AppConstants.injector.get(Broadcast);
  }

  refresh(params: any): boolean {
    return true;
  }
  async ngOnInit() {
    var FiPolicy = JSON.parse(this.localStorage.get("glConfig"));
    var postgrp = JSON.parse(this.localStorage.get('postgrpid'));
    if (FiPolicy != undefined && postgrp != undefined) {
      this.FinPolicy = 'unhide';
    }
    else {
      this.FinPolicy = 'hide';
    }
  }
  agInit(params: ICellRendererParams): void {

    this.params = params;
    this.value = this.params.value;
    this.Grid = this.params.context;
    this.column = params.column;

    this.hideView = this.column.colDef.hideView;
    this.hideEdit = this.column.colDef.hideEdit;
    this.hideDelete = this.column.colDef.hideDelete;
    this.disableDelete = this.column.colDef.disableDelete;
    this.disableEdit = this.column.colDef.disableEdit;
    this.disableView = this.column.colDef.disableView;
    // if (this.broadcast)
    //   this.messageBoxSubscription = this.broadcast
    //     .observable<MessageBoxResult>("messageBoxResult")
    //     .subscribe(async (arg) => {
          
    //       switch (arg.value.id) {
    //         case ("deleteAction" + this.params.rowIndex).concat(
    //           this.Grid.name ? this.Grid.name : ""
    //         ):
    //           if (arg.value.result === MessageBoxResultType.yes) {

    //             await this.confirmDelete();

    //             this.dcsgrid.CustomDeleteFunction();

    //           }
    //           break;
    //       }
    //     });
  }
  
  afterGuiAttached(params?: IAfterGuiAttachedParams): void { }
  private params: ICellRendererParams | any;
  public value: any;
  private cancelBeforeStart: boolean = false;
  private Grid: IcsGridComponent | any;
  hideView: boolean = false;
  hideEdit: boolean = false;
  hideDelete: boolean = false;
  disableView: boolean = false;
  disableEdit: boolean = false;
  disableDelete: boolean = false;
  private column: any;

  getValue(): any {
    return this.params.value;
  }

  valueChange(data: any) {
    this.params.setValue(this.value);
  }

  async viewScreen() {
    this.Grid.myscreen.screen.myForm.disable();
    await this.showScreen(Enum.Mode.Display);
  }

  async editScreen() {
    this.Grid.myscreen.screen.myForm.enable();
    await this.showScreen(Enum.Mode.Edit);
  }

  private async showScreen(mode: any) {
    this.params.column.parent = undefined;
    await setTimeout(async () => {
      this.params.setValue(Math.random());
      await this.Grid.myscreen.screen.clear();
      if (
        this.Grid.columns &&
        this.Grid.columns.length &&
        this.Grid.columns.length > 0
      ) {
        let rendererNodes = this.Grid.options.api.getRenderedNodes();
        var node = rendererNodes.filter((o: any) => o === this.params.node)[0];
        if (node && node.data) {
          this.Grid.index = node.rowIndex;
          let primaryField = this.Grid.primeryKeyField;
          if (primaryField) {
            const PrimaryKeyValue = node.data[primaryField];
            this.Grid.myscreen.mode = mode;
            this.Grid.myscreen.screen.service.addDefaultCondition(
              primaryField + " = @0",
              [PrimaryKeyValue]
            );
            this.Grid.myscreen.displayLastRecord = true;
            //this.Grid.index = this.params.rowIndex;

            var rowData = null;

            if (this.Grid.index !== -1) {
              //   rowData = this.Grid.options.api.getRowNode(this.Grid.index.toString())
              //     .data;
              rowData = rendererNodes.filter(
                (o: any) => o.rowIndex === this.Grid.index
              )[0].data;
            }

            this.Grid.actionOpen.emit(<modalArgs>{
              modal: this.Grid.myscreen,
              rowData: rowData,
              cancel: false,
            });
            if (this.Grid.modaltype && this.Grid.modaltype === 2)
              await this.Grid.myscreen.open("xl");
            else await this.Grid.myscreen.open();
          }
        }
      }
    }, 300);
  }

  // async getFinancePolicy() {
  //   this._FIPolicyhdrService.addDefaultCondition("entityid=@0", [
  //     Number(this.entityid),
  //   ]);
  //   const dto = await this._FIPolicyhdrService.getFirst();

  //   if (dto && dto.IsSuccess) {
  //     this.LookupData.FinancePolicy = dto.Data;
  //   } else {
  //     this.showErrors(dto.Errors);
  //   }

  //   this._FIPolicyhdrService.clearCondition();
  // }

  async openActConfig() {
    this.params.setValue(Math.random());
    this.params.column.parent = "openActConfig";
    if (this.params.data) {

    }
  }
  async recorddelete() {
    this.params.column.parent = "DeleteButton";
    let id = ("deleteAction" + this.params.rowIndex).concat(
      this.Grid.name ? this.Grid.name : ""
    );
    // await this.broadcast.publish<MessageBoxSettings>("showMessage", <MessageBoxSettings>{
    //   id,
    //   type: MessageBoxType.yesNo,
    //   caption: "Delete",
    //   message: "Are you sure you want to delete record?",
    // });
  }


  async confirmDelete() {

    this.Grid.myscreen.screen.service.clearCondition();
    var node = this.Grid.options.api
      .getRenderedNodes()
      .filter((o: any) => o === this.params.node)[0];
    if (node && node.data) {
      let primaryKeyField = this.Grid.primeryKeyField;
      if (primaryKeyField) {
        const PrimaryKeyValue = node.data[primaryKeyField];
        const result = await this.Grid.myscreen.screen.service.delete(
          PrimaryKeyValue
        );
        if (result.IsSuccess) {
          await this.broadcast.publish<ErrorConfig>("showError", <ErrorConfig>{
            type: GenEnum.ErrorTypes.Success,
            title: "Confirmation",
            messages: "Record successfully deleted",
            displaymode: 1,
          });
          this.broadcast.publish("showSuccess", {});
          if (this.Grid.options.api) {
            const node = this.Grid.options.api
              .getRenderedNodes()
              .filter((o: any) => o === this.params.node)[0];

            this.params.context.onRowDelete.emit(node.data);
            this.Grid.options.api.removeItems([node]);
            if (this.Grid._data) {
              const index = this.Grid._data.indexOf(node.data);

              if (index !== -1) {
                this.Grid._data.splice(index, 1);
              }
            }

            this.Grid.generateIndex(0);
          }
        } else {
          await this.broadcast.publish<ErrorConfig>("showError", <ErrorConfig>{
            type: GenEnum.ErrorTypes.Error,
            title: "unable to delete.",
            messages: result.Errors,
            displaymode: 1,
          });
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.messageBoxSubscription) {
      this.messageBoxSubscription.unsubscribe();
    }
  }
}