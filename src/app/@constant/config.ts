import { Component, Input } from "@angular/core";

export interface MapConfiguration {
  field: string;
  mapField: string;
}

export const LovConfigsDeduction = {
  lister: <LookupConfiguration[]>[
    {
      name: 'code',
      caption: 'Code',
      width: '120px'
    },
    {
      name: 'stxt',
      caption: 'Deduction Type',
      width: '120px',
      type: 'date'
    },
  ]
};


export const Enum = {
  Mode: {
    Default: 0,
    New: 1,
    Display: 2,
    Edit: 3,
    None: 4,
  },

  modalSize: {
    Large: "lg",
    Mediam: "md",
    Small: "sm",
  },
  modalType: {
    Normal: 1,
    Custom: 2,
  },
  ExportTypes: {
    Import: 1,
    Export: 2,
  },
};

export const GridType = {
  inputGrid: 0,
  readOnlyGrid: 1,
  selectionGrid: 2,
  actionsGrid: 3,
  lookup: 4,
  exportGrid: 5,
};
export interface modalArgs {
  cancel: boolean;
  modal: any;
  rowData: any;
}

export interface moodConfig {
  MoodGroup: string;
  moodId: any;
  moodValue: any;
  moodIcon: string;
}

export const addRow = {
  top: "top",
  current: "current",
  bottom: "bottom",
};
export const inputType = {
  text: "text",
  mobile: "mobile",
  phone: "phone",
  cnic: "cnic",
  license: "license",
  time: "time",
};

export interface customButton {
  name: string;
  caption: string;
  icon?: string;
  type?: CustomButtonType;
  valueMember?: string;
  displayMember?: string;
  dropDownData?: any;
  customButtons?: customButton[];
  value?: any;
  hideCaption?: boolean;
  placeHolder?: string;
  modal?: any;
  disabled?: boolean;
  oldValue?: any;
  config?: any;
  customButtonClass?: any;
}

export interface customButtonList {
  grpname?: string;
  name: string;
  caption: string;
  icon?: string;
}

export interface moodcustomList {
  grpname?: string;
  name: string;
  caption: string;
  icon?: string;
}

export interface titleConfig {
  fieldname: string;
  Caption: string;
  Image: string;
  Class: string;
  maxValue: string;
  percentvalue: string;
}

export const CustomButtonType = {
  Button: 0,
  Dropdown: 1,
  TextBox: 2,
  Number: 3,
  Checkbox: 4,
  Hide: 5,
  Date: 6,
  Time: 7,
};

export interface CustomButtonType { }

export const errorDisplayMode = {
  Modal: 1,
  Toaster: 2,
};

export interface CustomButtonType { }

export interface customGridMenu {
  grpname?: string;
  name: string;
  caption: string;
  icon?: string;
}

export interface Operator { }

export const Operator = {
  None: 0,
  Sum: 1,
  Percent: 2,
  Formula: 3,
  Count: 4,
};

export interface Condition { }

export const Condition = {
  Equal: 1,
  GreaterThen: 2,
  GreaterThenEqual: 3,
  LessThen: 4,
  LessThenEqual: 5,
};

export interface summaryConfig {
  field: string;
  caption: string;
  type: Operator;
  value?: any;
  filterBy?: filterBy;
  AddFields?: filterBy[];
  SubFields?: filterBy[];
  percentBaseField?: string;
  percentValueField?: string;
  group?: string;
  editable?: boolean;
  summaryFieldName?: string;
  controltype?: number;
}

export interface filterBy {
  field: string;
  value: any;
  Condition: Condition;
}

@Component({
  template: "",
})
export abstract class ControlBase {
  private _index: number = -1;
  @Input()
  get index(): any {
    return this._index;
  }

  set index(v: any) {
    this._index = v;
  }
}

export interface StepModel {
  stepIndex: number | any;
  isComplete: boolean | any;
}

export const PatternConstants = {
  pattern: {
    cnic: [
      /[0-9]/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
    ],
    phone: [
      /[0-9]/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
    mobile: [
      /[0-9]/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
    license: [
      /[0-9]/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      "#",
      /\d/,
      /\d/,
      /\d/,
    ],
    //email: '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$',
    email: "([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+",
    url: "/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9].[a-zA-Z]{2,}$/",
    floatno: "[0-9]{2}.[0-9]{2}",
    time: [/[0-9]/, /\d/, ":", /\d/, /\d/, ":", /\d/, /\d/],
  },
};

export interface ErrorConfig {
//   messages: string | ErrorObject[];
  type?: number;
  title?: string;
  displaymode: number;
}

export interface errorArgs {
  Id: string;
  value: number;
  type: number;
}

export interface LookupConfiguration {
  name: string;
  caption: string;
  type: string;
  width?: string;
  format?: string;
}

export interface LookupResult {
  lookupId: string;
  data: any;
}

export const LovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    },
  ],
};
export const LovConfigsAssessmentRemarks = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Type",
      width: "180px",
    },
  ],
};

export const AuthorTypeConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Author Type",
      width: "180px",
    },
  ],
};

export const SMSyllabusConfig = {
  lister: <LookupConfiguration[]>[

    {
      name: 'Id',
      caption: 'ID',
      width: '110px'
    },

    {
      name: 'stxt',
      caption: 'Syllabus',
      width: '220px'
    },

  ]
}

export const caseGroupConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "casegroup",
      caption: "Case Group",
      width: "180px",
    },
    {
      name: "descrptionltxt",
      caption: "Description",
      width: "180px",
    },
  ],
};
export const GenderLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    },
  ],
};

export const approvStatusConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    },
  ],
};

export const StuLovStatus = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    },
  ],
};

export const RoomConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Room Type",
      width: "180px",
    },
  ],
};

export const admTestStatusConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: 'code',
      caption: 'Code',
      width: '110px'
    },
    {
      name: 'stxt',
      caption: 'Status',
      width: '150px'
    },
  ]
};
export const AdmTestStatusConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: 'Id',
      caption: 'Code',
      width: '110px'
    },
    {
      name: 'stxt',
      caption: 'Status',
      width: '150px'
    },
  ]
};

export const LovConfigsss = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    },
  ],
};
export const ApplicableovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Applicable On",
      width: "180px",
    },
  ],
};
export const ActiveInactive = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    },
  ],
};
export const CategoryLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Category",
      width: "180px",
    },
  ],
};
export const policytypeConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    },
  ],
};

export const UserClientConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Shared",
      width: "180px",
    },
  ],
};
export const CourseStatusConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Course Status",
      width: "180px",
    },
  ],
};
export const ExamLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Exam Type",
      width: "180px",
    },
  ],
};
export const ConfigureLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Configure On",
      width: "180px",
    },
  ],
};
export const PercentPolicyList = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Policy",
      width: "180px",
    },
  ],
};
export const PostingTypeLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Posting Type",
      width: "180px",
    },
  ],
};
export const PlanConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "Id",
      caption: "Id",
      width: "110px",
    },
    {
      name: "periodstxt",
      caption: "Period",
      width: "180px",
    },
  ],
};
export const termConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "Id",
      caption: "Id",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Term",
      width: "180px",
    },
  ],
};
export const WeekConfigs = {
  lister: <LookupConfiguration[]>[
    // {
    //   name: "Id",
    //   caption: "Id",
    //   width: "110px",
    // },
    {
      name: "weekstxt",
      caption: "Week",
      width: "180px",
    },
  ],
};
export const PeriodConfigs = {
  lister: <LookupConfiguration[]>[
    // {
    //   name: "Id",
    //   caption: "Id",
    //   width: "110px",
    // },
    {
      name: "periodstxt",
      caption: "Academic Period",
      width: "180px",
    },
  ],
};

export const DateFormats = {
  lister: <LookupConfiguration[]>[
    {
      name: "Id",
      caption: "Id",
      width: "90px",
    },
    {
      name: "stxt",
      caption: "Date Format",
      width: "140px",
    },
  ],
};
export const DocumentCategory = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Document Category",
      width: "180px",
    },
  ],
};
export const ShareWith = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Shared With",
      width: "180px",
    },
  ],
};
export const StageTemplpate = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Stages Template",
      width: "180px",
    },
  ],
};
export const TaskGroup = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Project",
      width: "180px",
    },
  ],
};
export const CheckList = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "tempname",
      caption: "Checklist Template",
      width: "200px",
    },
  ],
};
export const typeLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Type",
      width: "180px",
    },
  ],
};
export const baseLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Base On",
      width: "180px",
    },
  ],
};

export const PDCLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "PDC",
      width: "180px",
    },
  ],
};
export const AdjustmentTypeLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Adjustment Type",
      width: "180px",
    },
  ],
};
export const SettlementTypeLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Settlement Type",
      width: "180px",
    },
  ],
};
export const PayrollTypeLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Payroll Type",
      width: "180px",
    },
  ],
};
export const StatusLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    }, ,
  ],
};
export const acdyearConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Academic Year",
      width: "180px",
    }, ,
  ],
};
export const admbookConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Academic Book",
      width: "180px",
    }, ,
  ],
};
export const LoanNatureLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Loan Nature",
      width: "180px",
    }, ,
  ],
};
export const LoanLimitLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Loan Limit",
      width: "180px",
    }, ,
  ],
};
export const LoanAvailLovConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Loan Avail",
      width: "180px",
    }, ,
  ],
};
export const RateBasisConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "ratebasisstxt",
      caption: "Rate Basis",
      width: "180px",
    }, ,
  ],
};
export const ratebasiosiconfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "ratebasisstxt",
      caption: "Rate Basis",
      width: "180px",
    }, ,
  ],
};
export const calconConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "calconstxt",
      caption: "Calculate On",
      width: "180px",
    }, ,
  ],
};
export const limitperConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "limitperstxt",
      caption: "Limit Period",
      width: "180px",
    }, ,
  ],
};
export const UnitofMeasure = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Unit of Measure",
      width: "180px",
    },
  ],
};
export const PaymentRunType = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Payment Run Type",
      width: "180px",
    },
  ],
};
export const TaxMethod = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Tax Method",
      width: "180px",
    },
  ],
};
export const RateBasis = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Rate Basis",
      width: "180px",
    },
  ],
};
export const PayImpact = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Rate Basis",
      width: "180px",
    },
  ],
};

export const sharedwithconfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Shared With",
      width: "180px",
    },
  ],
};

export const devicefor = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Device For",
      width: "180px",
    },
  ],
};

export const feecategoryconfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Fee Category",
      width: "180px",
    },
  ],
};

export const bookrConfig = {
  lister: <LookupConfiguration[]>[
    // {
    //   name: "Id",
    //   caption: "Code",
    //   width: "110px",
    // },
    {
      name: "stxt",
      caption: "Book",
      width: "180px",
    },

  ],
};
export const baseonconfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Base On",
      width: "180px",
    },
  ],
};
export const DeviceFor = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Device For",
      width: "180px",
    },
  ],
};
export const inputoptions = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Input Options",
      width: "180px",
    },
  ],
};

export const group = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Group",
      width: "180px",
    },
  ],
};
export const taxableconfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Taxable",
      width: "180px",
    },
  ],
};

export const Refandcategory = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Category",
      width: "180px",
    },
  ],
};
export const statusconfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    },
  ],
};
export const AreaTypeConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Area Type",
      width: "180px",
    },
  ],
};
export const CertificateForConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Certificate For",
      width: "180px",
    },

  ],
};

export const QuestionnairecategoryConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Questionnaire Category",
      width: "180px",
    },

  ],
};

export const questionsequence = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Question Sequence",
      width: "180px",
    },

  ],
};

export const scheduletype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Schedule Type",
      width: "180px",
    },

  ],
};

export const subjectcat = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Subject Category",
      width: "180px",
    },

  ],
};

export const subjectclass = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Subject Class",
      width: "180px",
    },

  ],
};

export const compulsory = {
  lister: <LookupConfiguration[]>[
    // {
    //   name: "code",
    //   caption: "Code",
    //   width: "110px",
    // },
    {
      name: "stxt",
      caption: "Compulsory",
      width: "180px",
    },

  ],
};

export const timeinterval = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Time Interval",
      width: "180px",
    },

  ],
};
export const Yesno = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Yes/No",
      width: "180px",
    },

  ],
};
export const DisplayOrder = {
  lister: <LookupConfiguration[]>[
    {
      name: "Id",
      caption: "Display Order",
      width: "110px",
    },

  ],
};
export const rule = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Rule",
      width: "180px",
    },

  ],
};

export const assessmenttype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Assessment Type",
      width: "180px",
    },

  ],
};

export const examtype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Exam Type",
      width: "180px",
    },

  ],
};

export const gracemarks = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Grace Marks Apply",
      width: "180px",
    },

  ],
};

export const policytype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Policy Type",
      width: "180px",
    },

  ],
};
export const syllabustype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Syllabus Type",
      width: "180px",
    },

  ],
};
export const syllabus = {
  lister: <LookupConfiguration[]>[
    {
      name: "sequence",
      caption: "Sequence",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Syllabus",
      width: "180px",
    },

  ],
};

export const type = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Type",
      width: "180px",
    },

  ],
};
export const periodperday = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Periods Per Day",
      width: "180px",
    },

  ],
};

export const resontype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Reason Type",
      width: "180px",
    },

  ],
};

export const priorityConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Priority",
      width: "180px",
    },

  ],
};
export const eremploymenttype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Employment Type",
      width: "180px",
    },

  ],
};

export const periodunitConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "100px",
    },
    {
      name: "stxt",
      caption: "Period Unit",
      width: "150px",
    },

  ],
};

export const positiontype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "100px",
    },
    {
      name: "stxt",
      caption: "Position Type",
      width: "150px",
    },

  ],
};

export const employeetype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "100px",
    },
    {
      name: "stxt",
      caption: "Employee Type",
      width: "150px",
    },

  ],
};
export const employeecategory = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "100px",
    },
    {
      name: "stxt",
      caption: "Employee Category",
      width: "150px",
    },

  ],
};

export const teachercategory = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "100px",
    },
    {
      name: "stxt",
      caption: "Teacher Category",
      width: "150px",
    },

  ],
};


export const bloodgroup = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "100px",
    },
    {
      name: "stxt",
      caption: "Blood Group",
      width: "150px",
    },

  ],
};

export const prType = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "100px",
    },
    {
      name: "stxt",
      caption: "PR Type",
      width: "150px",
    },

  ],
};

export const purchaseOrg = {
  lister: <LookupConfiguration[]>[
    {
      name: "purorgid",
      caption: "Purchase Org",
      width: "150px",
    },

  ],
};

export const purchaseGrp = {
  lister: <LookupConfiguration[]>[
    {
      name: "purgrpid",
      caption: "Purchase Org",
      width: "150px",
    },

  ],
};
export const businessConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "100px",
    },
    {
      name: "stxt",
      caption: "Business Nature",
      width: "150px",
    },

  ],
};


export const cardtypeConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "100px",
    },
    {
      name: "stxt",
      caption: "Card Type",
      width: "150px",
    },

  ],
};

export const authorityConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "100px",
    },
    {
      name: "stxt",
      caption: "Authority",
      width: "150px",
    },

  ],
};

export const categoryConfig = {
  lister: <LookupConfiguration[]>[

    {
      name: "stxt",
      caption: "Category",
      width: "150px",
    },

  ],
};

export const typeConfig = {
  lister: <LookupConfiguration[]>[

    {
      name: "stxt",
      caption: "Type",
      width: "150px",
    },

  ],
};

export const addresstype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Address Type",
      width: "180px",
    },

  ],
};

export const renewonConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Renew On",
      width: "180px",
    },

  ],
};


export const leaveunitConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Leave Unit",
      width: "180px",
    },

  ],
};

export const maxavailunitConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Max Avail Unit",
      width: "180px",
    },

  ],
};

export const maritalstatusConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Marital Status",
      width: "180px",
    },

  ],
};

export const grduserbasedonConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "Id",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "User Based On",
      width: "180px",
    },

  ],
};
export const yearbaseon = {
  lister: <LookupConfiguration[]>[
    {
      name: "Id",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Year Based On",
      width: "180px",
    },

  ],
};

export const genderConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Gender",
      width: "180px",
    },

  ],
};

export const requesttype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Request Type",
      width: "180px",
    },

  ],
};

export const entitleConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Entitle On",
      width: "180px",
    },

  ],
};

export const accrualunitConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Accural Unit",
      width: "180px",
    },

  ],
};
export const AccountLevelConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Account Level",
      width: "180px",
    },

  ],
};

export const AccountStatusConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Account Status",
      width: "180px",
    },

  ],
};

export const requestConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Request Unit",
      width: "180px",
    },

  ],
};

export const carryFarwordConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Carry Forward On",
      width: "180px",
    },

  ],
};

export const encashmentConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Encashment On",
      width: "180px",
    },

  ],
};


export const gender = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Gender",
      width: "180px",
    },
    // Not Required  {
    //   name: "ltxt",
    //   caption: "Description",
    //   width: "250px",
    // },
  ],
};

export const status = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    },
  ],
};
export const preferredCommunication = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Preferred Communication",
      width: "180px",
    },
  ],
};


export const respose = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Response",
      width: "180px",
    },
  ],
};
export const entityconfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Entity Type",
      width: "180px",
    },
  ],
};

export const contacttypeconfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Contact Type",
      width: "180px",
    },
  ],
};

export const institutetype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Institution Type",
      width: "180px",
    },
  ],
};

export const institutestructure = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Institutional Structure",
      width: "180px",
    },
  ],
};

export const typeconfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Type",
      width: "180px",
    },
  ],
};

export const payconfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Pay Method",
      width: "180px",
    },
  ],
};


export const LinkActivityConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Link Activity",
      width: "180px",
    },

  ],
};

export const BasedOnConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Based On",
      width: "180px",
    },

  ],
};
export const feeschedulestatus = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Status",
      width: "180px",
    },
    // Not Required  {
    //   name: "ltxt",
    //   caption: "Description",
    //   width: "250px",
    // },
  ],
};
export const Groupslab = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Group Slab",
      width: "180px",
    },
  ],
};

export const Grouptype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Group Type",
      width: "180px",
    },
  ],
};

export const Transactiontype = {
  lister: <LookupConfiguration[]>[
    {
      name: "docsubtypecode",
      caption: "Code",
      width: "110px",
    },
    {
      name: "docsubtypedesc",
      caption: "Transaction Type",
      width: "180px",
    },
  ],
};
export const TransferType = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Transfer Type",
      width: "180px",
    },
  ],
};


export const Validatepaymode = {
  lister: <LookupConfiguration[]>[
    {
      name: "stxt",
      caption: "Validate Pay Mode",
      width: "180px",
    },
  ],
};

export const Paymode = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Pay Mood",
      width: "180px",
    },
  ],
};

export const ApplyOn = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Apply On",
      width: "180px",
    },
  ],
};

export const feediscountbaseon = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Base On",
      width: "180px",
    },
  ],
};

export const Categoryconfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Category",
      width: "180px",
    },
  ],
};

export const resulttbaseon = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Result Base On",
      width: "180px",
    },
  ],
};

export const feediscountapplyon = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Apply On",
      width: "180px",
    },
  ],
};

export const feediscounttype = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Type",
      width: "180px",
    },
  ],
};

export const MeetingMediumConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Medium",
      width: "180px",
    },
    // Not Required  {
    //   name: "ltxt",
    //   caption: "Description",
    //   width: "250px",
    // },
  ],
};

export const MeetingbasedonConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Meeting Based On",
      width: "180px",
    },
  ],
};

export const MeetingtypeConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Type",
      width: "180px",
    },
    // Not Required  {
    //   name: "ltxt",
    //   caption: "Description",
    //   width: "250px",
    // },
  ],
};

export const SendtoConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Participants",
      width: "180px",
    },
  ],
};

export const SectionConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Section",
      width: "180px",
    },
  ],
};

export const MessagetypeConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Message Type",
      width: "180px",
    },
  ],
};

export const MessageforConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Message For",
      width: "180px",
    },
  ],
};

export const MessagesendtoConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Send To",
      width: "180px",
    },
  ],
};
export const LinkEntityConfig = {
  lister: <LookupConfiguration[]>[
    {
      name: 'code',
      caption: 'Code',
      width: "70px",
    },
    {
      name: 'stxt',
      caption: 'Entity Name',
      width: "200px"
    },
    {
      name: 'region',
      caption: 'Region',
      width: "120px",
    },
    {
      name: 'city',
      caption: 'City',
      width: "120px",
    },
    {
      name: 'state',
      caption: 'State',
      width: "120px",
    },
    {
      name: 'country',
      caption: 'Country',
      width: "120px",
    },
    {
      name: 'coursestxts',
      caption: 'Course Range',
      width: "120px",
    },
  ],
};

export interface moodSummaryGroup {
  key: string;
  value: string;
}

export interface moodSummaryConfig {
  title: string;
  group1: [moodSummaryGroup];
  group2: [moodSummaryGroup];
  MoodGroup: string;
  moodId: any;
  moodValue: any;
  moodIcon: string;
}

export const relationtypes = {
  lister: <LookupConfiguration[]>[
    {
      name: "Id",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Relation",
      width: "180px",
    },
  ],
};

export const ApplicableConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "Id",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Applicable",
      width: "180px",
    },
  ],
};

// 08-Nov-2023
// Amir Moavia
// Principle Approval List (Stage Config)
// Start
export const StageConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Stage",
      width: "180px",
    },
  ],
};
export const areaClass = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },    
    {
      name: "stxt",
      caption: "Area Class",
      width: "180px",
    },
  
  ],
};

// End
export const TermsConfigs = {
  lister: <LookupConfiguration[]>[
    {
      name: "code",
      caption: "Code",
      width: "110px",
    },
    {
      name: "stxt",
      caption: "Terms",
      width: "180px",
    },
  ],
};