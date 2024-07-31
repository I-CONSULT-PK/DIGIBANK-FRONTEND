import { Injector } from "@angular/core";

export const AppConstants = {
  urls: {
    SITE: "http://192.168.0.196:8080",
    IE: "http://192.168.0.91:8080",
    ProdE: "http://192.168.0.156:8080",
  },
  settings: {
    dateFormatforString: "DD-MMM-YYYY",
    timeFormatforString: "hh:mm:ss A",
    dateformat: "dd-MMM-yyyy",
    timeFormat: "HH:mm:ss",
    dateAndTime: "YYYY-MM-DDTHH:mm",
    dateFormat: "dd-MMM-yyyy",
    monthDateYear: "MM/DD/YYYY",
    timeFormatTile: "hh:mm A",
    date: "MMM d, y",
    appCode: "SB",
    instanceid: 1,
    instancecode: "UT001",
    clientid: 154,
    ApiVersion: 'v1'
  },
  policy: {
    dateFormat: "",
    timeFormat: "",
    gridpagging: "15",
    defaultcityid: 0,
    defaultctryid: 0,
    defaultstateid: 0,
  },
  injector: <Injector>{},
};