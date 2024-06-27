import { Injector } from "@angular/core";

export const AppConstants = {
  urls: {
    ut: "http://192.168.0.196:9094/v1/",
    api: "http://192.168.0.196:9094/v1/",
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