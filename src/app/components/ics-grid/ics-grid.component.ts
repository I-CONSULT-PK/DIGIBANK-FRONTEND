
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DecimalPipe, PlatformLocation } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import {
  addRow,
  Condition,
  customButton,
  customButtonList,
  customGridMenu,
  Enum,
  GridType,
  modalArgs,
  moodcustomList,
  Operator,
  summaryConfig,
} from "../../@constant/config";
import * as _ from "lodash";
import {
  CellKeyDownEvent,
  ColDef,
  RowNode,
  TabToNextCellParams,
  CellMouseOverEvent,
  CellMouseOutEvent
} from "ag-grid-community";
import {
  ColumnApi,
  GridApi,
  GridOptions,
  RowDataTransaction,
} from "ag-grid-community";
import { AgGridAngular } from "ag-grid-angular";
import { type } from "../../@constant/config";
import { ToolbarEvent } from "app/@core/events/toolbar.event";
import { AppConstants } from "app/@constant/app.constant";
import { IcsModalComponent } from "../ics-modal/ics-modal.component";
// import { ErrorComponent } from "../error/error.component";
@Component({
  selector: 'ics-grid',
  templateUrl: 'ics-grid.component.html',
  styleUrls: ['ics-grid.component.scss']
})
export class IcsGridComponent implements AfterViewInit {
  gridColumnApi: any;
  toolbarEvent?: ToolbarEvent;
  searchvalue: any;
  filterenabled: Boolean = false;
  fieldshow: Boolean = false;
  buttondisabled: Boolean = true;
  firstpagecount: any = 1;
  lastpagecount: any = 1;
  columnTypes: any;
  IsSumField: boolean = false;
  ispostgrpbind: any;
  IsSumGenFeilds: any;
  finalarray: any = [];
  sharecolumns: any = [];
  selectedparams: any;
  selectedColumnSet: any = [];
  headerdataset: any = [];
  selectedRowid: any = [];
  SavingValues: any = [];

  istrue: any;

  LiftGrid: boolean = false;
  ClickOnMenu: boolean = false;

  // @ViewChild("dcserror") dcserror: ErrorComponent | any;
  protected fb: FormBuilder = new FormBuilder();
  public myForm!: FormGroup;
  @Input()
  paginationTop: boolean = true;

  @Input()
  mode: number = Enum.Mode.Default;

  @Input()
  hideAdd: boolean = false;

  @Input()
  showClose: boolean = true;

  @Input()
  hideDelete: boolean = false;

  @Input()
  ExtraDelete: boolean = false;

  @Input()
  exportprefix: string = "";

  _pagesize: string = "15";
  @Input()
  hideSerial: boolean = true;

  @Input()
  hideActionDelete: boolean = false;

  @Input()
  hideActionView: boolean = false;

  @Input()
  hideActionColumn: boolean = false;

  @Input()
  hideActionEdit: boolean = false;

  @Input()
  disableActionDelete: boolean = false;

  @Input()
  disableActionView: boolean = false;

  @Input()
  disableActionEdit: boolean = false;

  @Input()
  hideSelection: boolean = true;

  @Input()
  hideAllControlBtn: boolean = true;

  @Input()
  ShowLiftControlBtn: boolean = false;
  @Input()
  refresh: boolean = true;

  @Input()
  sort: boolean = false;

  @Input()
  tblButtonCaption: string = " New";
  @Input()
  closeModalCustom: boolean = false;

  leftcolumns: any;
  public LookupData: any = {};
  public lookupConfigs: any = {};

  get _tblButtonCaption(): string {
    return this.tblButtonCaption;
  }
  set _tblButtonCaption(value: string) {
    this.tblButtonCaption = value;
  }
  get closeModalProperty(): boolean {
    // return this.tblButtonCaption;

    return this.closeModalCustom;
  }
  @Input()
  set closeModalProperty(value: boolean) {
    // if (value === true){
    // this.customModal?.customClosed();
  }

  @Input()
  name: string = "";
  get pageSize(): string {
    return this._pagesize;
  }

  @Input()
  set pageSize(value: string) {
    this._pagesize = value;

    // this.changePageSize();
  }

  @Input()
  pagination: boolean = false;

  @Input()
  filter: boolean = false;

  showColumns: boolean = false;

  headers = new HttpHeaders();

  @Input()
  modalSize: string = Enum.modalSize.Large;
  constructor(
    // private DecimalPipe: DecimalPipe,
  ) {
    this.toolbarEvent = AppConstants.injector.get(ToolbarEvent);
  }

  decimalPlaces: number = 0;
  @Input()
  modaltype: number = Enum.modalType.Normal;

  @Input()
  modalwidth: any = Enum.modalSize.Large;
  ngAfterViewInit(): void {
    // if (this.myscreen) this.myscreen.screen = this.screen;
    this.Filtershow();
    if (this.options.api) {
      // this.options.api.hideOverlay();
      this.options.suppressNoRowsOverlay = this.hideNoRecordOverlay;
      if (
        (this.data instanceof Array &&
          this.data &&
          this.data.length &&
          this.data.length === 0) ||
        !this.data
      ) {
        // this.options.api.showNoRowsOverlay();
      }
    }
    setTimeout(async () => {
      this.changePageSize();
      this.setCount();
      if (this.options.api) {
        // var cellDefs = this.options.api.getEditingCells();
        // if (cellDefs && cellDefs.length && cellDefs.length > 0)
        //   cellDefs.forEach(function (cellDef: any) {
        //     console.log(cellDef.rowIndex);
        //     console.log(cellDef.column.getId());
        //     // console.log(cellDef.floating);
        //   });
      }
      // this.ColumnsWidth();
      this.setPagination();

      if (this.type === GridType.actionsGrid) {
        this.refresh = true;
        this.filter = true;
        this.pagination = true;
      }
    }, 0);

    this.Groupload();
    this.lookupConfiguration();
    //
    // if (AppConstants.policy.gridpagging && AppConstants.policy.gridpagging !== this._pagesize ) {
    //
    //   this._pagesize = AppConstants.policy.gridpagging
    // }
  }
  @Output()
  afterValueChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  afterCellFocusOut: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onCellKeyDownEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onCellMouseOverEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onCellMouseOutEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onRowDataChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onRowClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onRowDbClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  actionOpen: EventEmitter<modalArgs> = new EventEmitter<modalArgs>();

  @Output()
  actionClose: EventEmitter<modalArgs> = new EventEmitter<modalArgs>();

  // @Output()
  // cellButtonClicked: EventEmitter<CellButtons> =
  //   new EventEmitter<CellButtons>();

  @Output()
  toolbarClick: EventEmitter<customButton> = new EventEmitter<customButton>();

  @Output()
  selectedRowClick: EventEmitter<object> = new EventEmitter<object>();

  @Input()
  showList: boolean = false;

  @Input()
  hideaibtn: boolean = false;

  @Output()
  toolbarClickList: EventEmitter<customButtonList> =
    new EventEmitter<customButtonList>();

  @Output()
  onRowDelete: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  customButtonList: any = [];
  customButtonListClick(item: customButtonList) {
    this.toolbarClickList.emit(item);
  }

  changeRowData(event: any) {
    this.onRowDataChanged.emit(event);
  }

  @ViewChild("agGrid")
  agGrid?: IcsGridComponent;

  @ViewChild("agGrid") grid?: AgGridAngular;

  @Input()
  hideNoRecordOverlay: boolean = true;

  @Input()
  headerHeight: any;

  public _data: any;

  @Input()
  lvl: any;

  @Input() scrollable: boolean = false;

  // @ViewChild(forwardRef(() => DcsModalComponent)) myscreen?: DcsModalComponent;
  // @ContentChild("ngContent") screen?: NavModalComponent<any>;
  // @ViewChild("SummaryModal") SummaryModal: DcsModalComponent | any;
  // @ViewChild("customModal") customModal: DcsModalComponent | any;
  // @ViewChild("ActConifgMode") ActConifgMode: DcsModalComponent | any;

  @Input()
  get selectedData(): any {
    if (this.options.api) return this.options.api.getSelectedRows();
  }
  set selectedData(data: any) { }

  // public _columns: ColDef[] = [];

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines & controls grid columns.
  public _columns: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];

  @Input()
  get data(): any {
    return this._data;
  }
  set data(data: any) {
    if (data && data.length && data.length > 0) {
      for (var index = 0; index < data.length; index++) {
        data[index].lineindex = index + 1;
      }
      this.generateIndex(0);
      if (this.pagination && this.options.api)
        this.options.api.paginationGoToFirstPage();
    }
    this._data = data;
    if (this._data && this._data.length && this._data.length > 0) {
      setTimeout(() => {
        this.changePageSize();
      }, 0);
    }
    this.ForSumTypeGrid(this.sharecolumns, this._data);
  }

  @Input()
  get columns(): any {
    return this._columns;
  }
  set columns(columns: any) {
    if (columns) {
      this.lookupConfiguration();
      if (this.hideSerial) {
        if (!columns.filter((o: any) => o.field === "lineindex")[0]) {
          columns.unshift({
            headerName: "S.No",
            field: "lineindex",
            width: 70,
            filter: false,
            floatingFilter: false,
            headerClass: "Serialno-cell",
            type: "normal",
          });
        }
      }
      if (this.hideSelection) {
        if (
          this.type === GridType.selectionGrid ||
          this.type === GridType.inputGrid
        ) {
          if (!columns.filter((o: any) => o.field === "selectedCol")[0]) {
            columns.unshift(this.selColumn);
          }
        }
      }
    }

    // this.ispostgrpbind = Number(this.localStorage.get("postgrpid"));
    if (this.type === GridType.actionsGrid) {
      var istrue;
      // var FiPolicy = JSON.parse(this.localStorage.get("glConfig"));
      // var postgrp = JSON.parse(this.localStorage.get("postgrpid"));
      // if (FiPolicy != undefined && postgrp != undefined) {
      //   istrue = "unhide";
      // } else {
      //   istrue = "hide";
      // }
      if (istrue == "unhide") {
        setTimeout(async () => {
          // await this.loadCOA();
        }, 0);
        if (
          this.ispostgrpbind != null &&
          this.ispostgrpbind != undefined &&
          this.ispostgrpbind != ""
        ) {
          setTimeout(async () => {
            // await this.getKeys(this.ispostgrpbind);
          }, 0);
        }
      }
    }

    if (columns) {
      columns.forEach((ele: any) => {
        if (!ele.suppressMenu) {
          ele.suppressMenu = true;
        }
      });
    }
    this._columns = columns;
    this.sharecolumns = columns;
    this.setCustomColumns();
    setTimeout(async () => {
      await this.ColumnState();
    }, 0);
  }

  async ForcecustomClosed() {

    // this.customModal.customClosed();
  }
  async saveClose() {
    this.SavingValues = [];
    if (
      this.LookupData.PostKeys.length &&
      this.LookupData.PostKeys.length > 0
    ) {
      this.LookupData.PostKeys.forEach((ele: any) => {
        const element = this.myForm.controls[ele.postkeystxt.toLowerCase()];

        // let entityid = this.localStorage.get("selectedEntity");
        // let clientid = this.localStorage.get("clientid");
        let postgrpid = this.ispostgrpbind;
        let glacid =
          this.selectedColumnSet.filter(
            (a: any) => a.field == "id" || a.field == "Id"
          )[0].cellStyle != undefined
            ? this.selectedColumnSet.filter(
              (a: any) => a.field == "id" || a.field == "Id"
            )[0].cellStyle
            : 0;
        let glaccode =
          this.selectedColumnSet.filter((a: any) => a.field == "code")[0]
            .cellStyle != undefined
            ? this.selectedColumnSet.filter((a: any) => a.field == "code")[0]
              .cellStyle
            : 0;
        if (
          element.value != "" &&
          element.value != "" &&
          element.value != undefined &&
          element.value != 0
        ) {
          this.SavingValues.push({
            // clientid: clientid,
            // entityid: entityid,
            postkeyid: ele.postkeyid,
            postkeystxt: ele.postkeystxt,
            postgrpid: postgrpid,
            value: element.value,
            glacid: glacid,
            glaccode: glaccode,
          });
        }
      });

    }
  }

  ShowLiftGrid() {
    this.ClickOnMenu = true;
    this.setCount();
    this.LiftGrid = !this.LiftGrid;
  }

  async ForSumTypeGrid(columns: any, griddata: any) {
    this.finalarray = [];
    if (columns != undefined && columns[1] != undefined) {
      this.IsSumGenFeilds = columns.filter(
        (a: any) =>
          a.SummaryType == "sum" && a.hide != true && a.field != "lineindex"
      );
      columns
        .filter(
          (a: any) =>
            a.SummaryType == "sum" && a.hide != true && a.field != "lineindex"
        )
        .forEach((ele: any) => {
          if (
            ele &&
            ele.cellRendererFramework &&
            ele.cellRendererFramework.name != "GridDropDownComponent"
          ) {
            ele["cellClass"] = "grid-cell-text-right";
          }
          if (ele && !ele.cellRendererFramework) {
            ele["cellClass"] = "grid-cell-text-right";
          }
        });
    } else {
      this.IsSumGenFeilds = [];
    }
    if (this.IsSumGenFeilds.length > 0) {
      this.IsSumField = true;
    } else {
      this.IsSumField = false;
    }
    if (this.IsSumField == true) {
      this._columns = columns.filter(
        (a: any) => a.hide != true && a.field != "lineindex"
      );
      var duplicol = columns.filter(
        (a: any) => a.hide != true && a.field != "lineindex"
      );
      var width = 0;
      var i = 0;
      var notdupli = true;
      var valuebehalf = 0;
      var amount: any = "";
      if (this.IsSumGenFeilds && this.IsSumGenFeilds.length > 0) {
        this.IsSumGenFeilds.forEach((element: any) => {
          this._columns.forEach((ele: any) => {
            if (this.IsSumGenFeilds.length != i) {
              if (ele.field != this.IsSumGenFeilds[i].field) {
                width = width + ele.width;
              } else {
                valuebehalf = 0;
                if (griddata && griddata.length > 0) {
                  griddata.forEach((elem: any) => {
                    let getKeys = Object.keys(elem);
                    var indx = getKeys.indexOf(ele.field);
                    if (indx >= 0) {
                      valuebehalf += Number(elem[getKeys[indx]]);
                    }
                  });
                }
                if (this.finalarray.length == 0) {
                  this.finalarray.push({
                    width: width,
                    value: "Total",
                    size: width,
                    fieldname: "Total",
                  });
                } else {
                  valuebehalf = 0;
                  var indx: any;
                  if (this.finalarray.length == 1) {
                    if (griddata && griddata.length > 0) {
                      griddata.forEach((elem: any) => {
                        let getKeys = Object.keys(elem);
                        indx = getKeys.indexOf(
                          this.IsSumGenFeilds[i - 1].field
                        );
                        if (indx >= 0) {
                          valuebehalf += Number(elem[getKeys[indx]]);
                        }
                      });
                    }
                    if (
                      !ele.cellRendererFramework ||
                      (ele.cellRendererFramework &&
                        ele.cellRendererFramework.name !=
                        "GridDropDownComponent")
                    ) {
                      // amount = this.DecimalPipe.transform(valuebehalf);
                    } else {
                      amount = 0;
                    }
                  }
                  var aa = 0;
                  width = 0;
                  this._columns.forEach((ele: any) => {
                    if (ele.field != this.IsSumGenFeilds[i - 1].field) {
                      duplicol.splice(0, 1);
                    } else {
                      duplicol.forEach((ele: any) => {
                        if (
                          this.IsSumGenFeilds.length != i &&
                          notdupli == true
                        ) {
                          if (ele.field != this.IsSumGenFeilds[i].field) {
                            width = width + ele.width;
                          } else {
                            // if(width != this.IsSumGenFeilds[i].width){
                            //   width += this.IsSumGenFeilds[i].width
                            // }
                            this.finalarray.push({
                              width: this.IsSumGenFeilds[i].width,
                              value: amount != "NaN" ? amount : 0,
                              size: width,
                              fieldname: this.IsSumGenFeilds[i - 1].field,
                            });
                            notdupli = false;
                            width = 0;
                          }
                        }
                      });
                    }
                    aa++;
                  });
                  valuebehalf = 0;
                  if (griddata && griddata.length > 0) {
                    griddata.forEach((elem: any) => {
                      let getKeys = Object.keys(elem);
                      var indx = getKeys.indexOf(ele.field);
                      if (indx >= 0) {
                        valuebehalf += Number(elem[getKeys[indx]]);
                      }
                    });
                  }
                  if (
                    !ele.cellRendererFramework ||
                    (ele.cellRendererFramework &&
                      ele.cellRendererFramework.name != "GridDropDownComponent")
                  ) {
                    // amount = this.DecimalPipe.transform(valuebehalf);
                  } else {
                    amount = 0;
                  }
                  if (this.IsSumGenFeilds.length != this.finalarray.length) {
                    this.finalarray.push({
                      width: this.IsSumGenFeilds[i].width,
                      value: amount != "NaN" ? amount : 0,
                      size: width + this.IsSumGenFeilds[i].width,
                      fieldname: this.IsSumGenFeilds[i].field,
                    });
                  } else {
                    this.finalarray.push({
                      width: this.IsSumGenFeilds[i].width,
                      value: amount != "NaN" ? amount : 0,
                      size: width + this.IsSumGenFeilds[i].width,
                      fieldname: this.IsSumGenFeilds[i].field,
                    });
                  }
                }
                i++;
                width = 0;
              }
            } else {
              if (this.IsSumGenFeilds.length == 1) {
                valuebehalf = 0;
                if (griddata && griddata.length > 0) {
                  griddata.forEach((elem: any) => {
                    let getKeys = Object.keys(elem);
                    var indx = getKeys.indexOf(this.IsSumGenFeilds[0].field);
                    if (indx >= 0) {
                      valuebehalf += Number(elem[getKeys[indx]]);
                    }
                  });
                }
                if (
                  !ele.cellRendererFramework ||
                  (ele.cellRendererFramework &&
                    ele.cellRendererFramework.name != "GridDropDownComponent")
                ) {
                  // amount = this.DecimalPipe.transform(valuebehalf);
                } else {
                  amount = 0;
                }
                this.finalarray.push({
                  width: this.IsSumGenFeilds[0].width,
                  value: amount != "NaN" ? amount : 0,
                  size: width + this.IsSumGenFeilds[0].width,
                  fieldname: this.IsSumGenFeilds[0].field,
                });
                i++;
                width = 0;
              }
            }
          });
          columns = [];
        });
      }
    } else {
      this._columns = columns;
    }
  }
  setCustomColumns() {
    // this.decimalPlaces = Number(this.localStorage.get("defaultDecimalPlaces"));
    if (this.decimalPlaces == undefined) {
      this.decimalPlaces = 0;
    }
    if (this.columns) {
      if (
        this.type === GridType.actionsGrid &&
        this.hideActionColumn === false
      ) {
        if (!this.columns.filter((o: any) => o.field === "actionid")[0]) {
          this.actionColumn["hideView"] = this.hideActionView;
          this.actionColumn["hideEdit"] = this.hideActionEdit;
          this.actionColumn["hideDelete"] = this.hideActionDelete;
          this.actionColumn["disableDelete"] = this.disableActionDelete;
          this.actionColumn["disableEdit"] = this.disableActionEdit;
          this.actionColumn["disableView"] = this.disableActionView;
          this.actionColumn["AccountGroup"] = this.ispostgrpbind;
          this.columns.push(this.actionColumn);
        }
      }
      if (this.columns.length && this.columns.length > 0)
        this.columns.forEach((element: any) => {
          if (
            element.field !== "selectedCol" &&
            element.field !== "lineindex"
          ) {
            element["cellStyle"] = {
              padding: "0px",
              background: element.color,
            };

            if (element.cellRendererFramework) {
              element.filter =
                element.cellRendererFramework.name === "GridDatePickerComponent"
                  ? "agDateColumnFilter"
                  : element.cellRendererFramework.name ===
                    "GridNumericComponent"
                    ? "agNumberColumnFilter"
                    : false;
            }
          }

          if (
            element &&
            element.cellEditorFramework &&
            element.cellEditorFramework.name &&
            element.cellEditorFramework.name === "GridNumericComponent"
          ) {
            element["cellClass"] = "numeric-cell";
            if (element.type === null) {
              element["valueFormatter"] = (params: any) =>
                params.value == undefined
                  ? 0
                  : element.isFloat && element.isFloat == true
                    ? Number(params.value)
                      .toFixed(this.decimalPlaces)
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                    : Math.floor(params.value)
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
              element["cellStyle"] = { "text-align": "right" };
              // element["valueFormatter"] = (params: any) =>
              // params.value == undefined
              // ? 0
              // : Number(params.value).toFixed(this.decimalPlaces).toString();
            } else {
              if (element.isFloat && element.isFloat == true) {
                element["valueFormatter"] = (params: any) =>
                  params.value == undefined
                    ? 0
                    : Number(params.value)
                      .toFixed(this.decimalPlaces)
                      .toString();
              } else {
                element["valueFormatter"] = (params: any) =>
                  params.value == undefined
                    ? 0
                    : Math.floor(params.value).toString();
              }
            }

            if (element.type === null) {
              //this.calculation();
            }
          }
          if (
            element &&
            element.cellEditorFramework &&
            element.cellEditorFramework.name &&
            element.cellEditorFramework.name === "MoodEditorComponent"
          ) {
            element.filter = false;
            element.floatingFilter = false;
          }
        });
    }
  }

  lookupConfiguration() {
    if (this.type === GridType.lookup) {
      this.hideSerial = false;
      this.hideSelection = false;
      this.hideAdd = true;
      this.hideDelete = true;
      this.hideRecord = true;
      this.columnPanel = true;
      this.isExport = true;
      this.pageSize = "15";
      this.pagination = true;
    }
  }

  _type: number = GridType.inputGrid;
  @Input()
  get type(): number {
    return this._type;
  }
  set type(type: number) {
    this._type = type;

    if (type === GridType.inputGrid) this.hideNoRecordOverlay = true;
    else this.hideNoRecordOverlay = false;

    if (type === GridType.actionsGrid || type === GridType.exportGrid) {
      // && this.isExport === undefined

      this.isExport = true;
    } else {
      this.isExport = false;
    }

    this.setCustomColumns();
  }

  @Input()
  addRowAt = addRow.bottom;

  @Input()
  InventoryMood = false;

  @Input()
  enableFilter: boolean = false;
  @Input()
  hideNewBtn: boolean = false;

  // clickshowFilter: Boolean = false;

  @Input()
  allowRowDraged: boolean = false;

  height = "313px";
  index: Number = 0;

  paginationPageSize: number = Number(this.pageSize);

  recordsvalue: any = [
    { key: 5, value: 5 },
    { key: 10, value: 10 },
    { key: 15, value: 15 },
    { key: 20, value: 20 },
    { key: 50, value: 50 },
    { key: 100, value: 100 },
  ];

  @ViewChild("recordselect") dropdown: HTMLSelectElement | any;

  async changePageSize() {
    if (this.pagination === true) {
      this.paginationPageSize = Number(this.pageSize);
      if (
        Number(this.pageSize) !== 5 &&
        Number(this.pageSize) !== 10 &&
        Number(this.pageSize) !== 20 &&
        Number(this.pageSize) !== 50 &&
        Number(this.pageSize) !== 100
      ) {
        this.height = 32 * Number(this.pageSize) + "px";

        if (this.dropdown !== undefined) {
          let array = [];
          array = this.dropdown.nativeElement.options;

          let obj = this.recordsvalue.filter(
            (o: any) => o.value === Number(this.pageSize)
          )[0];
          if (!obj) {
            let value = Number(this.pageSize);
            this.recordsvalue.push({ value: Number(value) });
            // this.recordsvalue = new List<SyncValue>(this.recordsvalue)
            //   .OrderBy((o) => o.value)
            //   .ToArray();
            return (this.dropdown.nativeElement.value =
              this.recordsvalue.filter(
                (o: any) => o.value === Number(this.pageSize)
              )[0]);
          } else {
            this.setCount();
            if (this.pagination && this.options.api) {
              this.options.api.paginationGoToFirstPage();
            }
            this.firstpage();
          }
        }
      } else {
        if (Number(this.pageSize) === 5) {
          this.height = 40 * Number(this.pageSize) + "px";
          this.setCount();
          if (this.pagination && this.options.api) {
            this.options.api.paginationGoToFirstPage();
          }
          this.firstpage();
        }
        if (Number(this.pageSize) === 10) {
          this.height = 35 * Number(this.pageSize) + "px";
          this.setCount();
          if (this.pagination && this.options.api) {
            this.options.api.paginationGoToFirstPage();
          }
          this.firstpage();
        }
        if (Number(this.pageSize) === 20) {
          this.height = 31.5 * Number(this.pageSize) + "px";
          this.setCount();
          if (this.pagination && this.options.api) {
            this.options.api.paginationGoToFirstPage();
          }
          this.firstpage();
        }
        if (Number(this.pageSize) === 50) {
          this.height = 29.3 * Number(this.pageSize) + "px";
          this.setCount();
          if (this.pagination && this.options.api) {
            this.options.api.paginationGoToFirstPage();
          }
          this.firstpage();
        }
        if (Number(this.pageSize) === 100) {
          this.height = 28.7 * Number(this.pageSize) + "px";
          this.setCount();
          if (this.pagination && this.options.api) {
            this.options.api.paginationGoToFirstPage();
          }
          this.firstpage();
        }
      }
    }
    if (this.grid) {
      if (
        Number(this.pageSize) !== 5 &&
        Number(this.pageSize) !== 10 &&
        Number(this.pageSize) !== 20 &&
        Number(this.pageSize) !== 50 &&
        Number(this.pageSize) !== 100
      ) {
        this.height = 34 * Number(this.pageSize) + "px";
      } else {
        if (Number(this.pageSize) === 5) {
          this.height = 47 * Number(this.pageSize) + "px";
          this.setCount();
          if (this.pagination && this.options.api) {
            this.options.api.paginationGoToFirstPage();
          }
          this.firstpage();
        }
        if (Number(this.pageSize) === 10) {
          this.height = 38 * Number(this.pageSize) + "px";
          this.setCount();
          if (this.pagination && this.options.api) {
            this.options.api.paginationGoToFirstPage();
          }
          this.firstpage();
        }
        if (Number(this.pageSize) === 20) {
          this.height = 33.5 * Number(this.pageSize) + "px";
          this.setCount();
          if (this.pagination && this.options.api) {
            this.options.api.paginationGoToFirstPage();
          }
          this.firstpage();
        }
        if (Number(this.pageSize) === 50) {
          this.height = 30.8 * Number(this.pageSize) + "px";
          this.setCount();
          if (this.pagination && this.options.api) {
            this.options.api.paginationGoToFirstPage();
          }
          this.firstpage();
        }
        if (Number(this.pageSize) === 100) {
          this.height = 29.9 * Number(this.pageSize) + "px";
          this.setCount();
          if (this.pagination && this.options.api) {
            this.options.api.paginationGoToFirstPage();
          }
          this.firstpage();
        }
      }
    } else if (this.pagination === false) {
      if (
        Number(this.pageSize) !== 5 &&
        Number(this.pageSize) !== 10 &&
        Number(this.pageSize) !== 20 &&
        Number(this.pageSize) !== 50 &&
        Number(this.pageSize) !== 100
      ) {
        this.height = 31.3 * Number(this.pageSize) + "px";

        if (this.dropdown !== undefined) {
          let array = [];
          array = this.dropdown.nativeElement.options;

          let obj = this.recordsvalue.filter(
            (o: any) => o.value === Number(this.pageSize)
          )[0];
          if (!obj) {
            let value = Number(this.pageSize);
            this.recordsvalue.push({ value: Number(value) });
            // this.recordsvalue = new List<SyncValue>(this.recordsvalue)
            //   .OrderBy((o) => o.value)
            //   .ToArray();

            return (this.dropdown.nativeElement.value =
              this.recordsvalue.filter(
                (o: any) => o.value === Number(this.pageSize)
              )[0]);
          }
        }
      } else {
        if (Number(this.pageSize) === 5) {
          this.height = 40 * Number(this.pageSize) + "px";
          if (this.pagination && this.options.api)
            this.options.api.paginationGoToFirstPage();
        }
        if (Number(this.pageSize) === 10) {
          this.height = 34 * Number(this.pageSize) + "px";
          if (this.pagination && this.options.api)
            this.options.api.paginationGoToFirstPage();
        }
        if (Number(this.pageSize) === 20) {
          this.height = 30.8 * Number(this.pageSize) + "px";
          if (this.pagination && this.options.api)
            this.options.api.paginationGoToFirstPage();
        }
        if (Number(this.pageSize) === 50) {
          this.height = 29.3 * Number(this.pageSize) + "px";
          if (this.pagination && this.options.api)
            this.options.api.paginationGoToFirstPage();
        }
        if (Number(this.pageSize) === 100) {
          this.height = 28.7 * Number(this.pageSize) + "px";
          if (this.pagination && this.options.api)
            this.options.api.paginationGoToFirstPage();
        }
      }
    }
  }

  @Input()
  rowSelection: string = "multiple";

  @Input()
  autoHeight: boolean = false;

  @Input()
  rowHeight: number = 35;

  @Input()
  flex: number = 0;

  private onCellKeyDown = (e: CellKeyDownEvent) => {
    this.onCellKeyDownEvent.emit(e);
  };
  private onCellMouseOver = (e: CellMouseOverEvent) => {
    this.onCellMouseOverEvent.emit(e);
  };
  private onCellMouseOut = (e: CellMouseOutEvent) => {
    this.onCellMouseOutEvent.emit(e);
  };
  // private onCellKeyPress = (e: CellKeyDownEvent) => {
  //
  //   this.onCellKeyDownEvent.emit(e);
  // }
  public options: GridOptions = <GridOptions>{
    defaultColDef: {
      filter: "agTextColumnFilter",
      floatingFilter: this.filter,
      resizable: true,
      sortable: true,
      suppressAutoSize: false,
    },
    context: this,

    onCellEditingStarted: () => {
      this.editing = true;
    },
    onCellEditingStopped: () => {
      this.editing = false;
    },
    singleClickEdit: true,
    stopEditingWhenGridLosesFocus: true,
    suppressTabbing: false,
    rowSelection: this.rowSelection,
    domLayout: "normal",
    suppressLoadingOverlay: false,
    suppressNoRowsOverlay: this.hideNoRecordOverlay,
    suppressRowClickSelection: true,
    sideBar: {
      toolPanels: ["columns", "filters"],
      defaultToolPanel: "",
    },
    rowClass: "",
    rowClassRules: {
      ExpenseRowHide: function (params) {
        var isEdited = params.data.HideRow;
        return isEdited == true;
      },
    },
    paginationPageSize: Number(this._pagesize),
    enableColResize: true,
    enableSorting: this.sort,
    suppressColumnsToolPanel: true,
    columnTypes: {
      currency: {
        aggFunc: "sum",
      },
      number: {},
    },
    onCellKeyDown: this.onCellKeyDown,
    onCellMouseOver: this.onCellMouseOver,
    onCellMouseOut: this.onCellMouseOut,
    // onCellKeyPress: this.onCellKeyPress,
  };
  editing: boolean = false;
  selColumn = {
    headerName: "",
    field: "selectedCol",
    width: 40,
    editable: false,
    hide: false,
    filter: false,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    headerClass: "ishide",
    type: "normal",
    onCellValueChanged: (params: any) => {
      this.selectedRowClick.emit(params.data);
    },
  };
  async SetRowRule(className: any) {
    this.options.rowClass = className;
  }
  actionColumn: any = {
    headerName: "Actions",
    field: "actionid",
    cellClass: "grid-cell-centered",
    width: 85,
    // cellRendererFramework: GridActionsComponent,
    pinned: "left",

    onCellClicked: async (params: any) => {
      this.selectedparams = params;
    },
    onCellValueChanged: async (params: any) => {
      this.index = Number(params.node.rowIndex);
      if (
        params.column.parent != undefined &&
        params.column.parent == "openActConfig"
      ) {
        var fields: any = {};
        if (
          this.LookupData.PostKeys != undefined &&
          this.LookupData.PostKeys.length &&
          this.LookupData.PostKeys.length > 0
        ) {
          this.selectedColumnSet =
            params.columnApi.columnController.columnDefs.filter(
              (a: any) =>
                a.field == "code" ||
                a.field == "stxt" ||
                a.field == "id" ||
                a.field == "Id"
            );

          this.selectedRowid =
            params.columnApi.columnController.columnDefs.filter(
              (a: any) => a.field == "id" || a.field == "Id"
            );

          this.selectedColumnSet.forEach((element: any) => {
            if (
              element.field == "code" ||
              element.field == "stxt" ||
              element.field == "id" ||
              element.field == "Id"
            ) {
              element.cellStyle = params.data[element.field];
            }
          });

          if (
            this.selectedColumnSet.length &&
            this.selectedColumnSet.length > 0
          ) {
            this.headerdataset = this.selectedColumnSet.filter(
              (a: any) => a.field == "code" || a.field == "stxt"
            );
          }
          // Getting Field Name For Generating
          for (let i = 0; i < this.LookupData.PostKeys.length; i++) {
            var element: any = this.LookupData.PostKeys[i];
            fields[element.postkeystxt.toLowerCase()] = [];
          }
          // Generate Fields Dynamically
          this.myForm = this.fb.group(fields);

          // Check IF Data Is In Edit
          // await this.getEditData(
          //   this.ispostgrpbind,
          //   params.data.Id != undefined ? params.data.Id : params.data.id
          // );

          // Check Data Is Not Null
          if (
            this.LookupData.modelEditData != undefined &&
            this.LookupData.modelEditData.length &&
            this.LookupData.modelEditData.length > 0
          ) {
            this.LookupData.PostKeys.forEach((ele: any) => {
              // Getting Data For Set
              var editdata = this.LookupData.modelEditData.filter(
                (a: any) => a.postkeystxt == ele.postkeystxt
              )[0];
              if (
                editdata &&
                editdata.value != null &&
                editdata.value != undefined
              ) {
                if (
                  this.myForm.controls[ele.postkeystxt.toLowerCase()] !=
                  undefined
                ) {
                  // Set Data If Exist
                  this.myForm.controls[ele.postkeystxt.toLowerCase()].setValue(
                    editdata.value
                  );
                }
              } else {
                if (
                  this.myForm.controls[ele.postkeystxt.toLowerCase()] !=
                  undefined
                ) {
                  // Set Null Becuase Not Exist
                  this.myForm.controls[ele.postkeystxt.toLowerCase()].setValue(
                    undefined
                  );
                }
              }
            });
          } else {
            // Set All Null If Edit Data Not Exist
            this.LookupData.PostKeys.forEach((ele: any) => {
              if (
                this.myForm.controls[ele.postkeystxt.toLowerCase()] != undefined
              ) {
                this.myForm.controls[ele.postkeystxt.toLowerCase()].setValue(
                  undefined
                );
              }
            });
          }
          this.istrue = true;
          // Open Config Modal
          // this.ActConifgMode.open("md", true);
        }
      }
    },
    filter: "false",
  };
  CustomDeleteFunction() {
    this.CustomDeletRow.emit(this.selectedparams);
  }
  @Input()
  RowAdd: boolean = true;
  @Input()
  MaxRows: number = 0;
  calculateammount: any;
  addRow() {
    if (this.options.api && this.RowAdd) {
      const node = this.options.api.getSelectedNodes()[0];

      const myindex: any = node
        ? node.rowIndex
        : this._data
          ? this._data.length - 1
          : -1;
      const rowIndex: any = node
        ? node.rowIndex
        : this._data
          ? this._data.length - 1
          : 0;
      const rowData = { lineindex: rowIndex + 1 };
      this.calculateammount = rowData;

      if (this.MaxRows && this.MaxRows != 0) {
        if (this._data && this._data.length < this.MaxRows) {
          this.options.api.updateRowData(<RowDataTransaction>{
            add: [rowData],
            addIndex: rowIndex + 1,
          });
        }
      } else {
        this.options.api.updateRowData(<RowDataTransaction>{
          add: [rowData],
          addIndex: rowIndex + 1,
        });
      }

      // this.data.lineindex > max

      // if (this.columns || this.columns.length > 0) {
      //   let fieldObj = this.columns.filter((o: any) => o.field === "lineindex")[0];
      //   let fieldObjNew = this.columns.filter((o: any) => o.focus === true)[0];
      //   if (fieldObj) {
      //     this.options.api.setFocusedCell(myindex + 1, fieldObj.field);
      //   }
      //   if (fieldObjNew) {
      //     this.options.api.setFocusedCell(myindex + 1, fieldObjNew.field);
      //   }
      // }

      if (this.columns || this.columns.length > 0) {
        let fieldObj = this.columns.filter((o: any) => o.focus === true)[0];
        if (fieldObj) {
          this.options.api.setFocusedCell(myindex + 1, fieldObj.field);
          // this.options.api.setFocusedCell(rowIndex + 1, fieldObj.field);
        } else {
          var val = this.columns.filter(
            (o: any) => o.hide === false || o.hide === undefined
          )[0];
          if (val) {
            this.options.api.setFocusedCell(myindex + 1, val.field);
          } else {
            var sno = this.columns.filter(
              (o: any) => o.field === "lineindex"
            )[0];
            if (sno) {
              this.options.api.setFocusedCell(myindex + 1, sno.field);
            }
          }
        }
      }

      if (this.MaxRows && this.MaxRows != 0) {
        if (this._data && this._data.length < this.MaxRows) {
          if (this._data) {
            this._data.splice(rowIndex + 1, 0, rowData);
          } else {
            this._data = [rowData];
          }
          this.generateIndex(rowIndex);
        }
      } else {
        if (this._data) {
          this._data.splice(rowIndex + 1, 0, rowData);
        } else {
          this._data = [rowData];
        }
        this.generateIndex(rowIndex);
      }
      this.CustomRow();
    } else {
      this.CustomRow();
    }
  }

  onGridReady() {
    if (this.options.api) {
      this.options.columnApi;
      this.options.api.sizeColumnsToFit();
    }
  }

  deleteRow() {
    let row = {};
    if (this.options.api) {
      const nodes = this.options.api.getSelectedNodes();

      if (nodes && nodes.length && nodes.length > 0) {
        this.CustomDeleteRow();
        nodes.forEach((node: any) => {
          if (node) {
            row = node.data;
            const rowIndex = node.rowIndex;
            if (this.options.api)
              this.options.api.updateRowData(<RowDataTransaction>{
                remove: [node.data],
              });

            if (this._data) {
              const index = this._data.indexOf(node.data);

              if (index !== -1) {
                this._data.splice(index, 1);
              }
            }
          }
        });
        this.onRowDelete.emit(row);
        this.generateIndex(0);
      }
      this.calculateSummaryInternal();
      this.ForSumTypeGrid(this.sharecolumns, this._data);
    }
  }

  updateRowData(rowData: any[] | any) {
    if (this.options.api) {
      this.options.api.updateRowData(<RowDataTransaction>{
        update: Array.isArray(rowData) ? rowData : [rowData],
      });
    }
  }

  addRowData(rowData: Array<any>[] | any, rowIndex: number = 0) {
    if (this.options.api) {
      this.options.api.updateRowData(<RowDataTransaction>{
        add: Array.isArray(rowData) ? rowData : [rowData],
        addIndex: rowIndex,
      });

      this.generateIndex(0);
    }
  }

  generateIndex(startIndex: number) {
    startIndex = 1;
    if (this.options.api) {
      this.options.api.forEachNode((x: any) => {
        // x.setDataValue("lineindex", startIndex);
        x.data.lineindex = startIndex;
        startIndex++;
      });
    }
  }

  public display(mydata: [any], key: string) {
    setTimeout(() => {
      if (this.options.api) {
        this.options.api.deselectAll();

        if (this.options.api) {
          this.options.api.forEachNode((x: any) => {
            const rowData = x.data;

            var row =
              mydata !== null && mydata !== undefined
                ? mydata.filter((o: any) => o[key] === rowData[key])[0]
                : null;
            if (row) {
              Object.keys(row).map((name) => {
                var ctrlData =
                  this.columns && this.columns.length > 0
                    ? this.columns.filter(
                      (o: any) => o.field === name && o.allowClear === true
                    )
                    : null;
                var ctrl = ctrlData && ctrlData.length > 0 ? ctrlData[0] : null;
                if (ctrl) {
                  rowData[name] = undefined;
                }

                if (row[name]) {
                  rowData[name] = row[name];
                }

                if (rowData[name] && row[name] && rowData[name] === row[name]) {
                  x.setSelected(true);
                }
              });
            } else {
              Object.keys(rowData).map((name) => {
                var ctrlData =
                  this.columns && this.columns.length > 0
                    ? this.columns.filter(
                      (o: any) => o.field === name && o.allowClear === true
                    )
                    : null;
                var ctrl = ctrlData && ctrlData.length > 0 ? ctrlData[0] : null;

                if (ctrl) {
                  rowData[name] = undefined;
                }
              });
            }

            x.setData(rowData);

            if (this._data) {
              this._data.splice(x.rowIndex, rowData);
            }
          });
        }
      }
      this.calculateSummaryInternal();
    }, 700);

    this.generateIndex(0);
  }

  public displayv2(mydata: [any], keys: string[]) {
    setTimeout(() => {
      if (this.options.api) {
        this.options.api.deselectAll();

        if (this.options.api) {
          this.options.api.forEachNode((x: any) => {
            const rowData = x.data;

            var row =
              mydata !== null
                ? mydata.filter((x: any) =>
                  keys.every((f) => x[f] === rowData[f])
                )[0]
                : null;

            if (row) {
              Object.keys(row).map((name) => {
                var ctrl = this.columns.filter(
                  (o: any) => o.field === name && o.allowClear === true
                )[0];
                if (ctrl) {
                  rowData[name] = undefined;
                }

                if (row[name]) {
                  rowData[name] = row[name];
                }

                if (rowData[name] && row[name] && rowData[name] === row[name]) {
                  x.setSelected(true);
                }
              });
            } else {
              Object.keys(rowData).map((name) => {
                var ctrl = this.columns.filter(
                  (o: any) => o.field === name && o.allowClear === true
                )[0];

                if (ctrl) {
                  rowData[name] = undefined;
                }
              });
            }

            x.setData(rowData);

            if (this._data) {
              this._data.splice(x.rowIndex, rowData);
            }
          });
        }
      }
      this.calculateSummaryInternal();
    }, 700);

    this.generateIndex(0);
  }

  selectAll() {
    if (this.options.api) this.options.api.selectAll();
  }

  unselectAll() {
    if (this.options.api) this.options.api.deselectAll();
  }

  // async openScreen() {
  //   if (this.myscreen && this.myscreen.screen)
  //     this.myscreen.screen.myForm.enable();

  //   this.index = -1;

  //   var rowData = null;

  //   if (this.index !== -1) {
  //     if (this.options && this.options.api)
  //       var data: any =
  //         this.options.api &&
  //         this.options.api.getRowNode(this.index.toString());
  //     if (data && data.data) {
  //       rowData = data.data;
  //     } else {
  //       rowData = null;
  //     }
  //   }
  //   if (this.myscreen) this.myscreen.mode = Enum.Mode.New;
  //   this.actionOpen.emit(<modalArgs>{
  //     modal: this.myscreen,
  //     rowData: rowData,
  //     cancel: false,
  //   });
  //   if (this.modaltype === 2 && this.modalwidth) {
  //     if (this.modalwidth !== Enum.modalSize.Large) {
  //       this.modalwidth = this.modalwidth + "px";
  //     }
  //     if (this.myscreen) await this.myscreen.open("xl");
  //   } else {
  //     if (this.myscreen) await this.myscreen.open("lg");
  //   }
  //   if (this.myscreen && this.myscreen.screen && this.myscreen.screen.service) {
  //     this.myscreen.screen.service.clearCondition();
  //     await this.myscreen.screen.clear();
  //   }
  // }

  // Open(event: any) { }

  // Close(event: any) {
  //   const modal: IcsModalComponent = event;
  //   if (modal && modal.screen) {
  //     var data = modal.screen.model;

  //     var modalArgs: modalArgs = <modalArgs>{
  //       modal: modal,
  //       rowData: data,
  //       cancel: false,
  //     };

  //     this.actionClose.emit(modalArgs);

  //     modal.screen.service.clearCondition();

  //     if (modal.mode === Enum.Mode.New) {
  //       const rowIndex =
  //         this.addRowAt === addRow.top
  //           ? 0
  //           : this.options &&
  //           this.options.rowData &&
  //           this.options.rowData.length + 1;

  //       if (data && data.PrimaryKeyValue) this.addRowData(data, rowIndex);

  //       if (this._data) {
  //         this._data.splice(rowIndex, 0, data);
  //       } else {
  //         this._data = [data];
  //       }

  //       this.generateIndex(0);
  //     } else if (modal.mode === Enum.Mode.Edit) {
  //       if (this.options.api) {
  //         var rowNode = this.options.api
  //           .getRenderedNodes()
  //           .filter((o) => o.rowIndex === this.index)[0];

  //         if (data) rowNode.setData(data);
  //         if (data) this.generateIndex(0);
  //       }
  //     }

  //     var rowData = null;

  //     if (this.index !== -1) {
  //       if (this.options && this.options.api)
  //         var data: any =
  //           this.options.api &&
  //           this.options.api.getRowNode(this.index.toString());

  //       if (data && data.data) rowData = data.data;
  //     }
  //   }
  // }
  onCellValueChanged(event: any) {
    this.ForSumTypeGrid(this.sharecolumns, this._data);
    // console.log(
    //   "onCellValueChanged: " + event.oldValue + " to " + event.newValue
    // );
  }
  get primeryKeyField(): string {
    let primeryColumn = null;
    if (this.columns && this.columns.length && this.columns.length > 0)
      primeryColumn = this.columns.filter(
        (o: any) => o.isPrimeryKey === true
      )[0];

    if (!primeryColumn) {
      console.error("Primery Column not defined");
      return "";
    }
    return primeryColumn.field;
  }

  overlayNoRowsTemplate =
    "<img src='assets/images/norecordfoundblue.png' style='height: 195px; '></img>";

  @Input()
  customButton: any = [];
  customButtonClick(item: customButton) {
    item.customButtons = this.customButton;
    this.toolbarClick.emit(item);
  }

  onRowDragEnd(e: any) {
    this.data.sort();
  }

  setCount() {
    if (this._data) {
      if (this.options.api) {
        this.options.api.paginationSetPageSize(Number(this._pagesize));
        this.firstpagecount = this.options.api.paginationGetCurrentPage();
        if (this.firstpagecount === 0) {
          this.firstpagecount = 1;
        }
        this.lastpagecount = this.options.api.paginationGetTotalPages();
        if (this.lastpagecount === 0) {
          this.lastpagecount = this.firstpagecount;
        }
      }
    }
  }

  firstpage() {
    if (this.options.api) {
      this.options.api.paginationGoToFirstPage();
      this.firstpagecount = 1;
    }
  }

  previouspage() {
    if (this.firstpagecount === 1) {
      this.firstpagecount = 1;
    } else {
      if (this.options.api) {
        this.options.api.paginationGoToPreviousPage();
        this.firstpagecount--;
      }
    }
  }
  nextpage() {
    if (this.firstpagecount === this.lastpagecount) {
      this.firstpagecount = this.lastpagecount;
    } else {
      if (this.options.api) {
        this.options.api.paginationGoToNextPage();
        this.firstpagecount++;
      }
    }
  }
  lastpage() {
    if (this.options.api) {
      this.options.api.paginationGoToLastPage();
      this.firstpagecount = this.lastpagecount;
    }
  }

  Filtershow() {
    if (this.filter === true && this.options.api) {
      const model = this.options.api.getFilterModel();
      var data = this.options.api.setFilterModel(model);
      this.options.api.onFilterChanged();
      if (this.options.defaultColDef)
        this.options.defaultColDef.floatingFilter =
          !this.options.defaultColDef.floatingFilter;
      this.options.api.refreshHeader();
      this.firstpage();
    }
  }

  @Input()
  hideNew: boolean = false;

  @Input()
  hideSave: boolean = false;

  @Input()
  hideSaveClose: boolean = false;
  @Input()
  hideprint: boolean = false;
  @Input()
  hideModalToolbar: boolean = false;

  @Input()
  hideClose: boolean = false;

  @Input()
  hideSelect: boolean = false;

  @Input()
  hideUnSelect: boolean = false;

  @Input()
  showButtonList: boolean = false;

  groups: any = [];

  listdata: moodcustomList[] = [];

  @Input()
  columnPanel: boolean = false;

  async Groupload() {
    if (this.listdata) {
      // this.groups = new List<moodcustomList>(this.listdata)
      //   .Select((o) =>
      //     o.grpname === "" || o.grpname === null || o.grpname === undefined
      //       ? "Options"
      //       : o.grpname
      //   )
      //   .Distinct()
      //   .ToArray();
    }
  }

  @Input()
  set moodcustomList(value: any) {
    this.listdata = value;
    this.Groupload();
  }
  get moodcustomList() {
    return this.listdata;
  }

  filterData(grp: any): Array<moodcustomList> {
    if (grp === "Options") {
      grp = undefined;
      return this.listdata.filter((o: any) => o.grpname === grp);
    } else {
      return this.listdata.filter((o: any) => o.grpname === grp);
    }
  }

  @Output()
  moodevent: EventEmitter<moodcustomList> = new EventEmitter<moodcustomList>();

  moodclickevent(item: moodcustomList) {
    this.moodevent.emit(item);
  }

  @Input()
  hideRecord: Boolean = true;
  @Input()
  customGridMenuDetails: any = {};

  @Input()
  hidetoolbar: Boolean = true;

  Gridmenu: Boolean = false;

  menudata: customGridMenu[] = [];

  @Input()
  set customGridMenu(value: any) {
    this.menudata = value;
    this.loadData();
    if (this.menudata) {
      this.Gridmenu = true;
    }
  }
  get customGridMenu() {
    return this.menudata;
  }

  @Output()
  gridmenuevent: EventEmitter<customGridMenu> =
    new EventEmitter<customGridMenu>();

  onMenuclickevent(item: customGridMenu) {
    this.isShown = false;
    this.gridmenuevent.emit(item);
  }

  gridmenugroup: any = [];

  async loadData() {
    if (this.menudata) {
      // this.gridmenugroup = new List<customGridMenu>(this.menudata)
      //   .Select((o) =>
      //     o.grpname === "" || o.grpname === null || o.grpname === undefined
      //       ? "Options"
      //       : o.grpname
      //   )
      //   .Distinct()
      //   .ToArray();
    }
  }

  filterGridMenu(grp: any): Array<customGridMenu> {
    if (grp === "Options") {
      grp = undefined;
      return this.menudata.filter((o: any) => o.grpname === grp);
    } else {
      return this.menudata.filter((o: any) => o.grpname === grp);
    }
  }

  @Input()
  ExportCombo: Boolean = false;

  @Input()
  isExport: Boolean = false;

  async onRowClickedInner(event: any) {
    if (event) {
      this.onRowClicked.emit(event);
    }
  }
  async onRowDoubleClickedInner(event: any) {
    if (event) {
      this.onRowDbClicked.emit(event);
    }
  }
  filterchanges() {
    this.setCount();
  }

  _summaryConfig: summaryConfig[] = [];

  @Input()
  enableSummary: boolean = false;

  @Input()
  get summaryConfig(): summaryConfig[] {
    return this._summaryConfig;
  }
  set summaryConfig(value: summaryConfig[]) {
    if (this.enableSummary) {
      this._summaryConfig = value;
      this.summaryGroupLoad();
    }
  }

  async calculateSummary(params: any) {
    if (params && params.colDef && params.colDef.allowCalculate) {
      this.calculateSummaryInternal();
    }
  }

  async calculateSummaryInternal() {
    if (this.enableSummary) {
      this.summaryConfig.forEach((element) => {
        var filter = undefined;

        if (element.type == Operator.Sum) {
          let val = this.data
            .filter(function (o: any) {
              if (
                element.filterBy &&
                element.filterBy.field &&
                element.filterBy.value &&
                element.filterBy.Condition
              )
                return element.filterBy.Condition == Condition.Equal
                  ? o[element.filterBy.field] == element.filterBy.value
                  : element.filterBy.Condition == Condition.GreaterThen
                    ? o[element.filterBy.field] > element.filterBy.value
                    : element.filterBy.Condition == Condition.GreaterThenEqual
                      ? o[element.filterBy.field] >= element.filterBy.value
                      : element.filterBy.Condition == Condition.LessThen
                        ? o[element.filterBy.field] < element.filterBy.value
                        : element.filterBy.Condition == Condition.LessThenEqual
                          ? o[element.filterBy.field] <= element.filterBy.value
                          : o[element.filterBy.field] == element.filterBy.value;
              else return element.filterBy ? false : true;
            })
            .reduce(function (previousValue: any, currentValue: any) {
              return (
                (previousValue !== undefined ? previousValue : 0) +
                (currentValue[element.field] !== undefined
                  ? Number(currentValue[element.field])
                  : 0)
              );
            }, 0);

          element.value = val;
        } else if (element.type == Operator.Formula) {
          let addVal = 0;
          let subVal = 0;
          if (element.AddFields) {
            element.AddFields.forEach((addField) => {
              if (
                this.summaryConfig.filter(
                  (o: any) => o.summaryFieldName == addField.field
                )[0]
              )
                addVal += this.summaryConfig.filter(
                  (o: any) => o.summaryFieldName == addField.field
                )[0].value;
            });
          }
          if (element.SubFields) {
            element.SubFields.forEach((subField) => {
              if (
                this.summaryConfig.filter(
                  (o: any) => o.summaryFieldName == subField.field
                )[0]
              )
                subVal += this.summaryConfig.filter(
                  (o: any) => o.summaryFieldName == subField.field
                )[0].value;
            });
          }

          element.value = addVal - subVal;
        } else if (element.type == Operator.Percent) {
          this.calculatePercentage(element);
        } else if (element.type == Operator.Count) {
          let val = this.data.filter(function (o: any) {
            if (
              element.filterBy &&
              element.filterBy.field &&
              element.filterBy.value &&
              element.filterBy.Condition
            )
              return element.filterBy.Condition == Condition.Equal
                ? o[element.filterBy.field] == element.filterBy.value
                : element.filterBy.Condition == Condition.GreaterThen
                  ? o[element.filterBy.field] > element.filterBy.value
                  : element.filterBy.Condition == Condition.GreaterThenEqual
                    ? o[element.filterBy.field] >= element.filterBy.value
                    : element.filterBy.Condition == Condition.LessThen
                      ? o[element.filterBy.field] < element.filterBy.value
                      : element.filterBy.Condition == Condition.LessThenEqual
                        ? o[element.filterBy.field] <= element.filterBy.value
                        : o[element.filterBy.field] == element.filterBy.value;
            else return element.filterBy ? false : true;
          }).length;

          element.value = val;
        }
      });
      this.afterSummaryValueChange.emit(this.summaryConfig);
    }
  }

  calculatePercentage(element: summaryConfig) {
    if (this.enableSummary) {
      let percentBase = 0;
      let percent = 0;

      if (
        this.summaryConfig.filter(
          (o: any) => o.summaryFieldName == element.percentBaseField
        )[0]
      ) {
        percentBase = this.summaryConfig.filter(
          (o: any) => o.summaryFieldName == element.percentBaseField
        )[0].value;
        percent = element.value;
      }

      if (
        this.summaryConfig.filter(
          (o: any) => o.summaryFieldName == element.percentValueField
        )[0]
      ) {
        this.summaryConfig.filter(
          (o: any) => o.summaryFieldName == element.percentValueField
        )[0].value = (percentBase * percent) / 100;
      }
    }
  }

  summaryValueChange(item: summaryConfig) {
    this.calculatePercentage(item);
  }
  summaryGroup: any;

  summaryGroupLoad() {
    if (this.summaryConfig) {
      // this.summaryGroup = new List<summaryConfig>(this.summaryConfig)

      //   .Select((o) =>
      //     o.group === "" || o.group === null || o.group === undefined
      //       ? "Summary"
      //       : o.group
      //   )
      //   .Distinct()
      //   .ToArray();
    }
  }

  //  filterSummaryGroup(grp): Array<summaryConfig> {
  //  grp = grp == "Summary" ? undefined : grp;

  //    let summaryConfig = this.summaryConfig.filter(o => o.group === grp);

  //   return summaryConfig;
  // }

  toggle() {
    // $("sidebargrid1").toggleClass("active");
    $("#sidebar1").toggleClass("control-sidebar");
  }

  _opened: boolean = false;
  _openedsmmary: boolean = false;
  _isCollapsed: boolean = false;
  _isCollapsedsummary: boolean = false;
  sidebar: boolean = false;
  summaryButton: any;
  @ViewChild("columnpanel") AnimateSlideCellRenderer: any;

  @Input()
  get isCollapsed(): boolean {
    return this._isCollapsed;
  }

  set isCollapsed(value) {
    this._isCollapsed = value;
  }

  @Input()
  get isCollapsedsummary(): boolean {
    return this._isCollapsedsummary;
  }

  set isCollapsedsummary(value) {
    this._isCollapsedsummary = value;
  }

  _toggleSidebar(event: any) {
    if (
      !this.AnimateSlideCellRenderer.nativeElement.classList.contains(
        "control-sidebar-open"
      )
    ) {
      this.AnimateSlideCellRenderer.nativeElement.classList.add("active");
      this.AnimateSlideCellRenderer.nativeElement.classList.add(
        "control-sidebar-open"
      );

      this._opened = true;
    } else {
      this.AnimateSlideCellRenderer.nativeElement.classList.remove("active");
      this.AnimateSlideCellRenderer.nativeElement.classList.remove(
        "control-sidebar-open"
      );

      this._opened = false;
    }
  }

  _toggleSidebarsummary(event: any) {
    if (
      !this.AnimateSlideCellRenderer.nativeElement.classList.contains(
        "control-sidebar-open"
      )
    ) {
      this.AnimateSlideCellRenderer.nativeElement.classList.add("active");
      this.AnimateSlideCellRenderer.nativeElement.classList.add(
        "control-sidebar-open"
      );

      this._openedsmmary = true;
    } else {
      this.AnimateSlideCellRenderer.nativeElement.classList.remove("active");
      this.AnimateSlideCellRenderer.nativeElement.classList.remove(
        "control-sidebar-open"
      );

      this._openedsmmary = false;
    }
  }

  get summaryPanelHeight(): string {
    let height;

    height = this.height.replace("px", "");

    return Number(height) - 2 + "px";
  }

  JsonData: any = [];
  exporttype: number = 0;
  btnexport: boolean = false;
  btnimport: boolean = false;
  filename: any;
  typesvalue(event: any) {
    this.exporttype = 0;
    if (event && event.target.value) {
      this.exporttype = Number(event.target.value);
    }
    if (this.exporttype === 0) {
      this.btnexport = false;
      this.btnimport = false;
    }
    if (this.exporttype === Enum.ExportTypes.Export) {
      this.exporttype = Enum.ExportTypes.Export;
      this.btnexport = true;
      this.btnimport = false;
    }
    if (this.exporttype === Enum.ExportTypes.Import) {
      this.exporttype = Enum.ExportTypes.Import;
      this.btnimport = true;
      this.btnexport = false;
    }
  }
  // this.grid.columnApi.getAllColumns()
  // Export(type: any) {
  //   if (
  //     this.data &&
  //     this.data.length > 0 &&
  //     this.columns &&
  //     this.columns.length > 0 &&
  //     this.options.api
  //   ) {
  //     this.JsonData = [];
  //     var allrowgrid = this.grid?.columnApi.getAllColumns();
  //     this.options.api.forEachNodeAfterFilter((node: any) => {
  //       let row = node.data;
  //       var obj: any = {};
  //       this.columns.forEach((col: any) => {
  //         var lastfilter = allrowgrid?.filter(
  //           (a: any) => a.colId == col.field && a.visible == true
  //         );
  //         // if(filtervisible && filtervisible.length > 0){
  //         // var lastfilter = filtervisible.filter((o:any) => o.colId == col.field)
  //         if (
  //           lastfilter &&
  //           lastfilter.length > 0 &&
  //           lastfilter != undefined &&
  //           lastfilter != null
  //         ) {
  //           if (
  //             col.field === "lookupcol" ||
  //             col.field === "selectedCol" ||
  //             col.field === "actionid" ||
  //             col.cellEditorFramework === "MoodEditorComponent" ||
  //             col.hide === true
  //           ) {
  //           } else {
  //             let field = "row." + col.field;

  //             if (col.dropdownData !== undefined) {
  //               let val = _.get(row, col.field);
  //               let c = col.dropdownData.filter(
  //                 (o: any) => o[col.dataValueField] === val
  //               )[0];
  //               if (c) {
  //                 obj[col.headerName] = c[col.dataDisplayField];
  //               } else {
  //                 obj[col.headerName] = "";
  //               }
  //             } else {
  //               obj[col.headerName] = _.get(row, col.field);
  //             }
  //           }
  //         }
  //         // }
  //       });
  //       if (obj) {
  //         this.JsonData.push(obj);
  //       }
  //     });
  //     if (this.JsonData && this.JsonData.length > 0) {
  //       if (type === 1)
  //         this.excel.exportAsExcelFile(
  //           this.JsonData,
  //           this.exportprefix,
  //           GenEnum.FileType.Excel
  //         );
  //       else if (type === 2)
  //         this.excel.exportAsExcelFile(this.JsonData, "", GenEnum.FileType.CSV);
  //       else if (type === 3) {
  //         const doc = new jsPDF("l");
  //         var col = [];
  //         for (var i = 0; i < this.JsonData.length; i++) {
  //           for (var key in this.JsonData[i]) {
  //             if (col.indexOf(key) === -1) {
  //               col.push(key);
  //             }
  //           }
  //         }
  //         var rows = [];
  //         for (var key in this.JsonData) {
  //           var temp = this.JsonData[key];
  //           var temp2 = [];
  //           for (var key in temp) {
  //             temp2.push(temp[key]);
  //           }
  //           rows.push(temp2);
  //         }
  //         autoTable(doc, {
  //           columns: col,
  //           body: rows,
  //           styles: {
  //             cellWidth: "wrap",
  //             // rowPageBreak: 'avoid',
  //             fontSize: 10,
  //             overflow: "linebreak",
  //           },
  //           columnStyles: {
  //             description: { cellWidth: "auto" },
  //             comments: { cellWidth: "auto" },
  //             remarks: { cellWidth: "auto" },
  //           },
  //           didDrawPage: function (data) {
  //             // jsPDF 1.4+ uses getWidth, <1.4 uses .width
  //             let pageSize = doc.internal.pageSize;
  //             let pageWidth = pageSize.width
  //               ? pageSize.width
  //               : pageSize.getWidth();
  //             let pageHeight = pageSize.height
  //               ? pageSize.height
  //               : pageSize.getHeight();
  //             // Header
  //             doc.setFontSize(20);
  //             doc.setTextColor(40);
  //             // doc.setFontStyle('normal');
  //             // doc.text('reportHeader', pageWidth / 2, 10);

  //             // Footer
  //             // let page = "Page " + doc.internal.getNumberOfPages()
  //             // Total page number plugin only available in jspdf v1.0+
  //             // if (typeof doc.putTotalPages === 'function') {
  //             //     page = page + " of " + pageCount;
  //             // }
  //             doc.setFontSize(10);
  //             // doc.text(today, data.settings.margin.left, pageHeight - 5);
  //             // doc.text(officeCd, pageWidth / 2, pageHeight - 5, 'center');
  //             // doc.text(page, pageWidth - data.settings.margin.right - 10, pageHeight - 5);
  //           },
  //           margin: { top: 15, bottom: 15 },
  //         });
  //         doc.setFont("Times New Roman");
  //         doc.setFontSize(10);
  //         if (this.exportprefix != "") {
  //           doc.save(this.exportprefix + ".pdf");
  //         } else {
  //           doc.save("a4.pdf");
  //         }
  //       }
  //     }
  //   }
  // }

  fileselect() {
    $("#file-input").trigger("click");
    $("#file-input").change((e) => {
      this.incomingfile(e);
    });
  }

  arrayBuffer: any;
  file: File | undefined;
  incomingfile(file: any) {
    if (file) {
      this.file = file.currentTarget.files[0];
      this.filename = file.currentTarget.files[0].name;
      if (this.file) {
        this.Upload();
      }
    } else {
      file = undefined;
    }
  }
  Upload() {
    // let fileReader = new FileReader();
    // fileReader.onload = (e) => {
    //   this.arrayBuffer = fileReader.result;
    //   var data = new Uint8Array(this.arrayBuffer);
    //   var arr = new Array();
    //   for (var i = 0; i != data.length; ++i) {
    //     arr[i] = String.fromCharCode(data[i]);
    //   }
    //   var bstr = arr.join("");
    //   var workbook = XLSX.read(bstr, { type: "binary" });
    //   var first_sheet_name = workbook.SheetNames[0];
    //   var worksheet = workbook.Sheets[first_sheet_name];
    //   console.log(
    //     XLSX.utils.sheet_to_json(worksheet, {
    //       raw: true,
    //       dateNF: "dd-mmm-yyyy",
    //     })
    //   );
    //   this.data = XLSX.utils.sheet_to_json(worksheet, {
    //     raw: true,
    //     dateNF: "dd-mmm-yyyy",
    //   });
    // };
    // if (this.file) {
    //   fileReader.readAsArrayBuffer(this.file);
    // }
  }

  async editMode(event: any) {
    // if (
    //   this.options.api &&
    //   this.type === GridType.actionsGrid &&
    //   event &&
    //   event.node &&
    //   this.hideActionColumn === false &&
    //   this.hideActionEdit === false &&
    //   this.disableActionEdit === false
    // ) {
    //   if (this.myscreen && this.myscreen.screen)
    //     await this.myscreen.screen.clear();
    //   var node = this.options.api
    //     .getRenderedNodes()
    //     .filter((o: any) => o === event.node)[0];
    //   if (node && node.data) {
    //     this.index = node.rowIndex ? node.rowIndex : 0;

    //     if (this.primeryKeyField) {
    //       const PrimaryKeyValue = node.data[this.primeryKeyField];
    //       if (
    //         this.myscreen &&
    //         this.myscreen.screen &&
    //         this.myscreen.screen.service
    //       ) {
    //         this.myscreen.mode = Enum.Mode.Edit;
    //         this.myscreen.screen.service.addDefaultCondition(
    //           this.primeryKeyField + " = @0",
    //           [PrimaryKeyValue]
    //         );

    //         this.myscreen.displayLastRecord = true;

    //         //this.Grid.index = this.params.rowIndex;
    //       }
    //       var rowData = null;

    //       if (this.index !== -1) {
    //         //   rowData = this.Grid.options.api.getRowNode(this.Grid.index.toString())
    //         //     .data;
    //         rowData = this.options.api
    //           .getRenderedNodes()
    //           .filter((o: any) => o.rowIndex === this.index)[0].data;
    //       }

    //       this.actionOpen.emit(<modalArgs>{
    //         modal: this.myscreen,
    //         rowData: rowData,
    //         cancel: false,
    //       });

    //       if (this.modaltype === 2 && this.modalwidth) {
    //         if (this.modalwidth !== Enum.modalSize.Large) {
    //           // var tab = document.getElementsByClassName("custom");
    //           // if (tab) {
    //           //   $(tab[0].children[0]).css({ width: this.modalwidth });
    //           //   $(tab[0].children[0].children[0]).css({
    //           //     width: this.modalwidth,
    //           //   });
    //           //   $(tab[0]).css({
    //           //     top: 0,
    //           //     left: 0,
    //           //     right: 0,
    //           //     bottom: 0,
    //           //     display: "inline",
    //           //     position: "fixed",
    //           //   });
    //           // }
    //         }

    //         if (this.myscreen) await this.myscreen.open("xl");
    //       } else {
    //         if (this.myscreen) await this.myscreen.open("lg");
    //       }
    //     }
    //   }
    // }
  }

  @Output()
  CustomAddRow: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  CustomDelete: EventEmitter<any> = new EventEmitter<any>();

  async CustomRow() {
    this.CustomAddRow.emit();
  }

  @Output()
  CustomDeletRow: EventEmitter<any> = new EventEmitter<any>();

  async CustomDeleteRow() {
    this.CustomDeletRow.emit();
  }

  tabToNextCell(params: TabToNextCellParams) {
    var result = {};
    if (params && params.nextCellPosition) {
      if (
        params.nextCellPosition.column.getColDef().cellRendererFramework &&
        (params.nextCellPosition.column.getColDef().cellRendererFramework
          .name === "GridDimentionComponent" ||
          params.nextCellPosition.column.getColDef().cellRendererFramework
            .name === "GridDropDownComponent" ||
          params.nextCellPosition.column.getColDef().cellRendererFramework
            .name === "GridTimePickerComponent" ||
          params.nextCellPosition.column.getColDef().cellRendererFramework
            .name === "GridDatePickerComponent" ||
          params.nextCellPosition.column.getColDef().cellRendererFramework
            .name === "GridNumericComponent")
      ) {
        if (params.nextCellPosition.column["gridApi"])
          params.nextCellPosition.column["gridApi"].clearFocusedCell();
        result = {
          rowIndex: params.nextCellPosition.rowIndex,
          column: params.nextCellPosition.column
            .getColDef()
            .cellRendererFramework.prototype.setControlFocused(),
        };
      } else {
        if (params.nextCellPosition.column["gridApi"])
          params.nextCellPosition.column["gridApi"].setFocusedCell(
            params.nextCellPosition.rowIndex,
            params.nextCellPosition.column.getColDef().field
          );

        result = {
          rowIndex: params.nextCellPosition.rowIndex,
          column: params.nextCellPosition.column,
        };

        if (params.backwards) {
          let field = params.previousCellPosition.column.getColDef().field;
          let index = params.previousCellPosition.rowIndex;

          params.previousCellPosition.column["gridApi"].setFocusedCell(
            index,
            field
          );
          params.previousCellPosition.column["gridApi"].startEditingCell({
            rowIndex: index,
            colKey: field,
          });
          result = {
            rowIndex: params.previousCellPosition.rowIndex,
            column: params.previousCellPosition.column,
          };
        } else {
          let field = params.nextCellPosition.column.getColDef().field;
          let index = params.nextCellPosition.rowIndex;

          params.nextCellPosition.column["gridApi"].setFocusedCell(
            index,
            field
          );
          params.nextCellPosition.column["gridApi"].startEditingCell({
            rowIndex: index,
            colKey: field,
          });

          result = {
            rowIndex: params.nextCellPosition.rowIndex,
            column: params.nextCellPosition.column,
          };
        }
      }
    } else {
      result = {
        rowIndex: params.previousCellPosition.rowIndex,
        column: params.previousCellPosition.column,
      };
    }

    return result;
  }

  onModelChange(item: customButton) {
    item.oldValue = item.value;
  }

  @Output()
  afterSummaryValueChange: EventEmitter<summaryConfig[]> = new EventEmitter<
    summaryConfig[]
  >();

  async summaryModal() {
    this._opened = true;
    // this.SummaryModal.open("xs");
    this.SummaryGroup();
  }
  mainarr: any = [];
  async SummaryGroup() {
    //grp = grp == "Summary" ? undefined : grp;
    //let summaryConfig = this.summaryConfig.filter(o => o.group === grp);
    this.mainarr = [];
    var all: any = [];

    if (
      this.summaryConfig &&
      this.summaryConfig.length &&
      this.summaryConfig.length > 0
    ) {
      let arr: any = [];

      this.summaryConfig.forEach((element) => {
        arr.push(element);
        all.push(element);

        if (arr.length === 5) {
          this.mainarr.push(arr);
          arr = [];
        } else if (this.summaryConfig.length === all.length) {
          this.mainarr.push(arr);
          arr = [];
        }
      });
    }

    return this.mainarr;
  }

  //add row
  generatePinnedBottomData() {
    let result: any = [];

    this._columns.forEach((item: any) => {
      result[item.colId] = null;

      if (item.type) {
        result[item.field] = null;
        result[item.headerName] = null;
      }
    });
    return this.calculatePinnedBottomData(result);
  }
  calculatePinnedBottomData(target: any) {
    let calculate = this._columns.filter((o: any) => o.type)[0]; //this._columns.filter(o => o.type ===  GenEnum.calculationtype.sum);
    if (calculate) {
      let type: any = calculate.type;
      let col = calculate.field;
      if (col) {
        let columnsWithAggregation = [col];

        if (columnsWithAggregation) {
          columnsWithAggregation.forEach((element: any) => {
            console.log("element", element);
            if (this.options.api)
              // this.options.api.forEachNodeAfterFilter((rowNode: RowNode) => {
              //   if (
              //     rowNode.data[element] &&
              //     type[0] === GenEnum.numericformatter.number
              //   ) {
              //     if (type[1] === GenEnum.calculationtype.sum) {
              //       target[element] += Number(rowNode.data[element].toFixed(2));
              //     } else if (type[1] === GenEnum.calculationtype.subtract) {
              //     } else if (type[1] === GenEnum.calculationtype.multiply) {
              //     } else if (type[1] === GenEnum.calculationtype.divide) {
              //     } else if (type[1] === GenEnum.calculationtype.average) {
              //     }
              //   } else if (
              //     rowNode.data[element] &&
              //     type[0] === GenEnum.numericformatter.currency
              //   ) {
              //     if (type[1] === GenEnum.calculationtype.sum) {
              //       target[element] += Number(rowNode.data[element].toFixed(2));
              //     } else if (type[1] === GenEnum.calculationtype.subtract) {
              //     } else if (type[1] === GenEnum.calculationtype.multiply) {
              //     } else if (type[1] === GenEnum.calculationtype.divide) {
              //     } else if (type[1] === GenEnum.calculationtype.average) {
              //     }
              //   } else {
              //   }
              // });
              if (target[element]) {
                target[element] = `Total: ${target[element].toFixed(2)}`;
              }
          });
        }
      }
      return target;
    }
  }
  calculation() {
    let pinnedBottomData: any = [];
    setTimeout(() => {
      pinnedBottomData = this.generatePinnedBottomData();
      if (this.options.api)
        this.options.api.setPinnedBottomRowData([pinnedBottomData]);
    }, 0);
  }

  @Output()
  RefreshGrid: EventEmitter<any> = new EventEmitter<any>();
  isClicked: boolean = false;
  async RefreshData() {
    this.isClicked = true;
    setTimeout(() => {
      if (this.refresh === true) {
        if (this.grid && this.grid.rowData) {
          this.grid.api?.setRowData([]);
        }
        // this.RefreshGrid.emit();

        this.toolbarEvent?.boardcast("refresh");
      }
      this.isClicked = false;
    }, 500);
  }

  async ColumnHide(field: any) {
    setTimeout(() => {
      if (this.grid && this.grid?.columnApi) {
        var colstate = this.grid.columnApi.getColumnState();
        var col: any = null;

        if (colstate && colstate.length && colstate.length > 0) {
          col = colstate.filter((o: any) => o.colId === field)[0];

          if (field && col.hide === false) {
            this.grid?.columnApi.setColumnVisible(field, false);
          } else {
            this.grid?.columnApi.setColumnVisible(field, true);
          }
        }
      }
    }, 0);
  }

  async onBtnExport() {
    var params = await this.getParams();

    if (params.suppressQuotes || params.columnSeparator) {
      alert(
        "NOTE: you are downloading a file with non-standard quotes or separators - it may not render correctly in Excel."
      );
    }
    if (this.options && this.options.api)
      this.options.api.exportDataAsCsv(params);
  }

  getValue(inputSelector: any) {
    var text = document.querySelector(inputSelector);

    switch (text && text.value) {
      case "string":
        return (
          'Here is a comma, and a some "quotes". You can see them using the\n' +
          "api.getDataAsCsv() button but they will not be visible when the downloaded\n" +
          "CSV file is opened in Excel because string content passed to\n" +
          "customHeader and customFooter is not escaped."
        );
      case "array":
        return [
          [],
          [
            {
              data: {
                value: 'Here is a comma, and a some "quotes".',
                type: "String",
              },
            },
          ],
          [
            {
              data: {
                value:
                  "They are visible when the downloaded CSV file is opened in Excel because custom content is properly escaped (provided that suppressQuotes is not set to true)",
                type: "String",
              },
            },
          ],
          [
            {
              data: {
                value: "this cell:",
                type: "String",
              },
              mergeAcross: 1,
            },
            {
              data: {
                value: "is empty because the first cell has mergeAcross=1",
                type: "String",
              },
            },
          ],
          [],
        ];
      case "none":
        return;
      case "tab":
        return "\t";
      case "true":
        return true;
      case "none":
        return;
      default:
        return text && text.value ? text.value : null;
    }
  }
  async getParams() {
    return {
      suppressQuotes: this.getValue("#suppressQuotes"),
      columnSeparator: this.getValue("#columnSeparator"),
      customHeader: this.getValue("#customHeader"),
      customFooter: this.getValue("#customFooter"),
      fileName: this.exportprefix,
    };
  }

  async ColumnState() {
    if (this._columns) {
      if (this.type === GridType.actionsGrid) {
        this.columnPanel = true;
        let col = this._columns.filter(
          (i: any) =>
            i.hide !== true &&
            i.field !== "lineindex" &&
            i.field !== "actionid" &&
            i.field !== "selectedCol"
        );

        if (col && col.length && col.length > 0) {
          var c = col.filter(
            (i: any) =>
              // i.cellRendererFramework !== MoodRendererComponent &&
              i.headerName != ""
          );
          if (c) this.leftcolumns = c;
        }
      } else if (this.columnPanel === true) {
        let col = this._columns.filter(
          (i: any) =>
            i.hide !== true &&
            i.field !== "lineindex" &&
            i.field !== "actionid" &&
            i.field !== "selectedCol"
        );

        if (col && col.length && col.length > 0) {
          var c = col.filter(
            (i: any) =>
              // i.cellRendererFramework !== MoodRendererComponent &&
              i.headerName != ""
          );
          if (c) this.leftcolumns = c;
        }
      } else {
      }
    }
  }

  isShown: boolean = false;
  isShowClick: boolean = false;
  _openedColumn: boolean = false;

  dropdownToggle($event: { stopPropagation: () => void }) {
    $event.stopPropagation();
    this.isShown = !this.isShown;
  }
  exportToggle($event: { stopPropagation: () => void }) {
    $event.stopPropagation();
    this.isShowClick = !this.isShowClick;
    this._openedColumn = false;
  }

  @ViewChild("columnpath") columnpath?: ElementRef;
  @ViewChild("sidemenu") sidemenu?: ElementRef;

  @HostListener("document:keydown", ["$event"]) Enter(evt: any) {
    if (
      this.editing &&
      evt.key === "Enter" &&
      this.options &&
      this.options.api
    ) {
      var currentCell = this.options.api.getFocusedCell();
      var finalRowIndex = this.options.api.paginationGetRowCount() - 1;

      // If we are editing the last row in the grid, don't move to next line
      if (currentCell && currentCell.rowIndex === finalRowIndex) {
        return;
      }
      if (this.options && currentCell) {
        this.options.api.stopEditing();
        this.options.api.clearFocusedCell();

        this.options.api.startEditingCell({
          rowIndex: currentCell.rowIndex + 1,
          colKey: currentCell.column.getColId(),
        });
      }
    }
  }

  @HostListener("window:click", ["$event"]) clickedOutside(event: any) {
    this.isShown = false;
    this.isShowClick = false;
    if (this.ClickOnMenu != true) {
      this.LiftGrid = false;
    }
    this.ClickOnMenu = false;
  }

  @HostListener("document:click", ["$event"])
  DocumentClick(event: Event) {
    if (
      this.columnpath &&
      this.columnpath.nativeElement &&
      this.columnpath.nativeElement.contains(event.target)
    )
      this._openedColumn = true;
    else this._openedColumn = false;

    if (
      this.sidemenu &&
      this.sidemenu.nativeElement &&
      this.sidemenu.nativeElement.contains(event.target)
    ) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  }

  // async ColumnToggle($event: { stopPropagation: () => void }) {
  //   $event.stopPropagation();
  //   this._openedColumn = !this._openedColumn;
  //   this.isShown = false;
  //   this.isShowClick = false;
  // }
  async ColumnToggle($event: { stopPropagation: () => void }) {
    $event.stopPropagation();
    this._openedColumn = !this._openedColumn;
    this.isShown = false;
    this.isShowClick = false;
    var Gridy: any = this.grid?.columnApi.getAllGridColumns();
    this.leftcolumns.forEach((e: any) => {
      var a = Gridy.filter((a: any) => a.colId == e.field)[0].visible;
      e.Visible = a;
    });
  }

  @ViewChild("agGrid") nativeGrid?: any;

  async setPagination() {
    if (this.nativeGrid) {
      if (this.nativeGrid._nativeElement) {
        if (
          this.pagination === true &&
          this.paginationTop === true &&
          this.hidetoolbar
        ) {
          if (
            this.nativeGrid._nativeElement.children &&
            this.nativeGrid._nativeElement.children.length > 0 &&
            this.nativeGrid._nativeElement.children[0].children &&
            this.nativeGrid._nativeElement.children[0].children.length > 0
          ) {
            this.nativeGrid._nativeElement.children[0].children[1].remove();
          }
        } else if (this.pagination === true && this.paginationTop === false) {
          this.nativeGrid._nativeElement.classList.add("show-pagination");
        } else if (this.pagination === false) {
          if (
            this.nativeGrid._nativeElement.children &&
            this.nativeGrid._nativeElement.children.length > 0 &&
            this.nativeGrid._nativeElement.children[0].children &&
            this.nativeGrid._nativeElement.children[0].children.length > 0
          ) {
            this.nativeGrid._nativeElement.children[0].children[1].remove();
          }
        }
      }
    }
  }

  @Output()
  onCellClick: EventEmitter<any> = new EventEmitter<any>();

  onCellClicked(ev: any) {
    // console.log('onCellClicked:>>>', ev);
    this.onCellClick.emit(ev);
  }

  onCellEditingStopped(ev: any) {
    this.afterValueChanged.emit(ev);
  }
  onCellFocusOut(ev: any) {
    this.afterCellFocusOut.emit(ev);
  }

  cellButtonClickEvent(item: any) { }

  async onRowSelected(event: any) {
    this.selectedRowClick.emit(event);
  }
  async onRowSelUnSel(event: any) {
    this.ForSumTypeGrid(this.sharecolumns, this._data);
  }
  public displayV3(mydata: [any], key: string, isSelected: boolean = true) {
    setTimeout(() => {
      if (this.options.api) {
        this.options.api.deselectAll();

        if (this.options.api) {
          this.options.api.forEachNode((x: any) => {
            const rowData = x.data;

            var row =
              mydata !== null
                ? mydata.filter((o: any) => o[key] === rowData[key])[0]
                : null;
            if (row) {
              Object.keys(row).map((name) => {
                var ctrl = this.columns.filter(
                  (o: any) => o.field === name && o.allowClear === true
                )[0];
                if (ctrl) {
                  rowData[name] = undefined;
                }

                if (row[name]) {
                  rowData[name] = row[name];
                }

                if (rowData[name] && row[name] && rowData[name] === row[name]) {
                  x.setSelected(isSelected);
                }
              });
            } else {
              Object.keys(rowData).map((name) => {
                var ctrl = this.columns.filter(
                  (o: any) => o.field === name && o.allowClear === true
                )[0];

                if (ctrl) {
                  rowData[name] = undefined;
                }
              });
            }

            x.setData(rowData);

            if (this._data) {
              this._data.splice(x.rowIndex, rowData);
            }
          });
        }
      }
      this.calculateSummaryInternal();
    }, 700);

    this.generateIndex(0);
  }
}


