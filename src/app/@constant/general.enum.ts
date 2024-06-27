import { moodConfig } from './config';
export const GenEnum = {
  AddressType: {
    PermanentAddress: 114,
    MailingAddress: 115,
    WorkingAddress: 116,
  },

  ControlType: {
    TextBox: 1,
    TextArea: 2,
    Dropdown: 3,
    DateControl: 4,
    Time: 5,
    Checkbox: 6,
    Radiobutton: 7,
    Number: 8,
  },
  DimensionMode: {
    Default: 1332,
    Dimension: 1333,
  },
  Tax: {
    SalesTax: 1329,
    WithHoliding: 1330,
  },
  DateFormatsDefault: {
    _ddmmyyyy: 'dd-MM-yyyy',
    _ddmmmyyyy: 'dd-MMM-yyyy',
    _yyyymmdd: 'yyyy-MM-dd',
    _yyyymmmdd: 'yyyy-MMM-dd',
    DDMMYYYY: 'dd/MM/yyyy',
    DDMMMYYYY: 'dd/MMM/yyyy',
    YYYYMMDD: 'yyyy/MM/dd',
    YYYYMMMDD: 'yyyy/MMM/dd',
  },

  Sorting: {
    ByID: 1170,
    ByName: 1169,
  },
  ParentUndertakingStatus: {
    Pending: 1402,
    Acknowleged: 1403,
    Rejected: 1404
  },

  SettlementAgainst: {
    challan: 1458,
    challan_Amount: 1459,
    challan_Amount_Date: 1460
  },

  TaxBaseOn: {
    Percentage: 1288,
    Amount: 1289,
  },

  Questioonnaire_ScheduleType: {
    One_Time: 1048,
    Schedule_Type: 1049,
  },
  FeeReferenceType: {
    With_Reference: 1562,
    Without_Reference: 1563,
  },
  Asssignmentstatusid: {
    checkstatusid: 1031,
    uncheckstatusid: 1032,
    submitstatusid: 1037,
    unsubmitstatusid: 1038,
  },
  Dailyhomework: {
    studstudsubmitid: 0,
  },
  Registrationtype_for_Adm: {
    New_Admission: 1413,
    Re_Admission: 1414,
  },
  FILedgerRegister: {
    BankPayment: 301,
  },
  Meeting_Type: {
    Open: 1046,
    CourseTopic: 1047,
    Course: 1061,
  },
  onBehalf: {
    Course: 1046,
    Section: 718,
  },
  Meeting_HostType: {
    Zoom: 1065,
    Jitsi: 1066,
    Zoom_Link: 1176,
  },
  MeetingBase: {
    General: 1058,
    Class: 1059,
  },
  Meeting_Integration_With: {
    Jitsi: 1066,
    ZOOM: 1065,
  },

  ScholarshipApplyon: {
    FirstChild: 1,
    SecondChild: 2,
    ThirdChild: 3,
    FourthChild: 4,

  },

  QuestionBasedOn: {
    Course: 1002,
    Subject: 1003,
  },
  FromFetch: {
    File: 764,
    From_Machine: 765,
    Manual: 157,
    Device: 158,
  },

  Devicetype: {
    Suprema: 652,
    ZK_Attendance: 653,
    BayLan_Attandance: 797,
  },

  ComplainantType: {
    Transporter: 26,
    Driver: 27,
    Guardian: 28,
    Student: 68,
  },

  AccountType: {
    ProfitLoss: 1,
    BalanceSheet: 2,
    Total: 3,
  },

  PublishResult: {
    OnCourse: 1208,
    OnSubject: 1209,
  },

  PostkeyValidate: {
    Optional: 1,
    Mandatory: 2,
    List: 3,
  },

  AccountNature: {
    Asset: 1,
    Liability: 2,
    Equity: 3,
    Revenue: 4,
    Expense: 5,
  },

  ErrorTypes: {
    Info: 1,
    Success: 2,
    Warning: 3,
    Error: 4,
  },

  EmploymentType: {
    Probation: 1,
    Confirmation: 2,
    Resignation: 3,
    Termination: 4,
    Rejoining: 5,
    Retirement: 6,
    Pension: 7,
  },

  EmpType: {
    Probation: 1,
    Confirmation: 125,
    Resignation: 3,
    Termination: 4,
    Rejoining: 5,
    Retirement: 6,
    Pension: 7,
  },

  YearBasedOn: {
    Days360: 1363,
    Days365: 1364,
  },
  EFMGS: {
    Employee: 1233,
    Father: 1234,
    Mother: 1235,
    Guardian: 1236,
    Student: 1237,
  },

  ReportTypes: {
    DevExpressReport: 1093,
    CrystalReport: 1094,
  },

  Payment_Mode: {
    FIFO: 1010,
    LIFO: 1011,
    By_Documnt: 1188
  },

  Post_Status: {
    PARK: 617,
    POST: 618,
    HOLD: 619
  },

  Months: [
    { Id: 1, stxt: "January" },
    { Id: 2, stxt: "February" },
    { Id: 3, stxt: "March" },
    { Id: 4, stxt: "April" },
    { Id: 5, stxt: "May" },
    { Id: 6, stxt: "June" },
    { Id: 7, stxt: "July" },
    { Id: 8, stxt: "August" },
    { Id: 9, stxt: "September" },
    { Id: 10, stxt: "October" },
    { Id: 11, stxt: "November" },
    { Id: 12, stxt: "December" },
  ],

  Image: {
    imageUrl: "Images/Actual/",
  },
  PeriodUnit: {
    Day: 41,
    Month: 42,
    Year: 43,
  },
  PayrollCategory: {
    Non: 490,
    Standard: 491,
    Retirement: 492,
    GeneralLiability: 1453,
    EmployeesCompensation: 1454,
  },
  PayrollImpact: {
    Deduction: 1081,
    DeductionandContrib: 1487
  },
  DeductionBasedOn: {
    GrossSalary: 1336,
    BasicSalary: 1337,
  },
  FeeFor: {
    School: 92,
    Student: 93,
    Course: 94,
    Registration: 296,
    Region: 1463
  },
  TripCategory: {
    Up: 8,
    Down: 9,
  },
  CheckList: [
    { Id: true, stxt: "Yes" },
    { Id: false, stxt: "No" },
  ],
  Country: [{ Id: 166, stxt: "Pakistan" }],

  MemberShipType: {
    Student: 190,
    Staff: 191,
    Regular: 1552,
  },
  ScheduleFor: {
    Entity: 270,
    Department: 271,
    Employee: 272,
  },


  HifzSequence: {
    dec: 1525,
    acd: 1526,
  },

  AccrualUnit: {
    Yearly: 257,
    Accrual: 258,
  },

  SendTo: {
    Parents: 306,
    Students: 307,
    Teacher: 308,
    Driver: 309,
  },

  SendBy: {
    Group: 207,
    Individual: 208,
    Class: 209,
    Department: 1218,
    Employee_Category: 1219
  },

  MessageType: {
    Circular: 203,
    Message: 204,
    ParentConsent: 205,
    Invitation: 206,
    Notification: 365,
    Defaulter: 827,
  },

  ResponseType: {
    ApproveReject: 1150,
    AcceptDecline: 1151,
  },

  MessageTemplate: {
    Defaulter: "040408",
  },

  TemplateType: {
    StudentRegistration: 1,
    FeeChallan: 2,
    FeeReceipt: 3,
    Complaint: 4,
    PTM: 5,
    Present: 6,
    Absent: 7,
    Leave: 8,
    Custom: 9,
  },

  Postal_Type: {
    Dispatch: 226,
    Receive: 227,
  },

  EmployeeCategory: {
    Mangement: 267,
    Admin: 268,
    Teacher: 269,
    Staff: 571,
    Parent: 1447,
    Student: 1546,
  },

  RateBasis: {
    FlatAmount: 415,
    PerDay_BasicSalary: 416,
    PerHour_BasicSalary: 417,
    Percentag_of_Earning: 418,
  },

  EditorType: {
    Default: 0,
    Advance: 1,
    Basic: 2,
    View: 3,
  },

  PostKey: {
    BankAccount: 7
  },
  SourceCat: {
    Social: 1384,
    Sibling: 1385,
    Employee: 1386,
    Print: 1387,
    Broadcast: 1388,
  },

  //#region User Management

  ApplicationType: {
    Main: 1,
    Sub: 2,
  },

  UserType: {
    AdminUser: 1082,
    SuperAdmin: 1083,
    EndUser: 1084,
    TenentUser: 1085,
  },

  ObjectCategory: {
    Screen: 1103,
    Report: 1104,
  },

  UserCategory: {
    Admin: 1088,
    Employee: 1089,
    Parent: 1090,
    Student: 1091,
    Driver: 1092,
  },

  UserStatus: {
    Active: 1086,
    InActive: 1087,
  },
  Aquisitionmethod: {
    Purchase: 662,
    Opening: 663,
  },

  calculateBy: {
    Amount: 1440,
    Quantity: 1441,
  },
  //UserManagement GenEnum end

  PrincipalApproval: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Approval",
      moodIcon: "fa fa-check",
      MoodGroup: "",
    },
  ],
  parent_undetaking: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Parent's Undertaking",
      moodIcon: "fa fa-check",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Parent's Undertaking Report",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Report",
    },
  ],
  Admission_Assessment: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Test Marks",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  Leave_Approval: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Leave Approval",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Student Leave Request",
      moodIcon: "fa fa-file-text",
      MoodGroup: "Report",
    },
  ],

  HRMenu: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Additional Information",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Action",
    },
  ],
  Fomenu: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Follow Up",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Admission Enquiry",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Report",
    },
  ],
  bookdetail: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Admission Planning",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Admission Book",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Report",
    },
  ],

  Clear: <moodConfig[]>[
    { moodId: 1, moodValue: "Clear", moodIcon: "fa fa-remove", MoodGroup: "" },
  ],
  Extra_Notification: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Additional",
      moodIcon: "fa fa-remove",
      MoodGroup: "",
    },
  ],

  CourseSection: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Course Detail",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  GenerateTimetable: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Generate Timetable",
      moodIcon: "fa fa-save",
      MoodGroup: "",
    },
  ],
  GenerateTemplate: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Update Template",
      moodIcon: "fa fa-save",
      MoodGroup: "",
    },
  ],

  Courses: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Courses",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],
  Subjects: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Subjects",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],
  Entity: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Entity",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],
  Discontinuous: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Stop Financial Aid",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  Postkey: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Post Key",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  LeaveRequest: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "History",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Leave Request",
      moodIcon: "fa fa-file-text",
      MoodGroup: "Report",
    },
  ],

  Gatepass: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Approval",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Gate Pass",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Report",
    },

  ],
  DocType: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Sub Type",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  History: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "History",
      moodIcon: "fa fa-history",
      MoodGroup: "",
    },
  ],

  Merge: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Merge Result",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Leave Policy",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  TopicReport: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Lesson Report",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  TopicAttachment: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Attachments",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],
  FeeCollectionHistory: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Fee History",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  MeetingReport: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "MeetingReport",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  TopicDetail: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Published",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Lesson Report",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],


  GatePass: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "User",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Status",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  Published: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Published",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  SubjectExtend: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Subject Extend",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Assessment Policy",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  AssessmentArea: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Assessment Area",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  ItemSubGroup: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Item Sub Group",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],
  ItemGroup: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Item Group",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],
  Model: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Model",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  Holidays: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Add Holidays",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  Policy: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Policy",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  Attachment: <moodConfig[]>[
    { moodId: 1, moodValue: "Download", moodIcon: "fa fa-edit", MoodGroup: "" },
    { moodId: 2, moodValue: "Delete", moodIcon: "fa fa-trash", MoodGroup: "" },
  ],

  PaySlip: <moodConfig[]>[
    { moodId: 1, moodValue: "Pay-Slip", moodIcon: "fa fa-edit", MoodGroup: "" },
  ],

  Meeting: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Start Meeting",
      moodIcon: "fa fa-edit",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Join Meeting",
      moodIcon: "fa fa-edit",
      MoodGroup: "",
    },
  ],
  COA: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Chart of Account",
      moodIcon: "fa fa-columns",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Account Chart",
      moodIcon: "fa fa-columns",
      MoodGroup: "Report",
    },
  ],
  WHT: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Tax",
      moodIcon: "fa fa-columns",
      MoodGroup: "",
    },

  ],

  CaseRegister: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Case Register",
      moodIcon: "fa fa-columns",
      MoodGroup: "Report",
    },
  ],

  MeetingRegister: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Meeting Register",
      moodIcon: "fa fa-columns",
      MoodGroup: "Report",
    },
  ],
  ExpenseRegister: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Expense Voucher",
      moodIcon: "fa fa-columns",
      MoodGroup: "Report",
    },
  ],


  LedgerRegister: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Ledger Register",
      moodIcon: "fa fa-columns",
      MoodGroup: "Report",
    },
  ],

  AssignmentMarks: <moodConfig[]>[
    { moodId: 1, moodValue: "Marks", moodIcon: "fa fa-edit", MoodGroup: "" },
    {
      moodId: 2,
      moodValue: "Test Syllabus",
      moodIcon: "fa fa-edit",
      MoodGroup: "",
    },
  ],

  AssignmentListMarks: <moodConfig[]>[
    { moodId: 1, moodValue: "Marks", moodIcon: "fa fa-edit", MoodGroup: "" },
    { moodId: 2, moodValue: "Submit", moodIcon: "fa fa-edit", MoodGroup: "" },
  ],

  TestMarks: <moodConfig[]>[
    { moodId: 1, moodValue: "Marks", moodIcon: "fa fa-edit", MoodGroup: "" },
  ],

  HRAdditionalInfo: <any>[
    {
      id: 0,
      Value: "Back",
      icon: "fa fa-arrow-left",
      visible: true,
      class: "btn-back",
    },
    {
      id: 1,
      Value: "Employment",
      icon: "fa fa-users",
      visible: true,
      class: "",
    },
    {
      id: 2,
      Value: "Position Assignment",
      icon: "fa fa-tags",
      visible: true,
      class: "",
    },
    {
      id: 3,
      Value: "Employee Roaster",
      icon: "fa fa-user-md",
      visible: true,
      class: "",
    },
    { id: 4, Value: "Payroll", icon: "fa fa-money", visible: true, class: "" },
    {
      id: 5,
      Value: "Bank Account",
      icon: "fa fa-university",
      visible: true,
      class: "",
    },
    { id: 6, Value: "Address", icon: "fa fa-home", visible: true, class: "" },
    {
      id: 7,
      Value: "Education",
      icon: "fa fa-graduation-cap",
      visible: true,
      class: "",
    },
    {
      id: 8,
      Value: "Contact Information",
      icon: "fa fa-phone",
      visible: true,
      class: "",
    },
    { id: 9, Value: "Skill", icon: "fa fa-signal", visible: true, class: "" },
    {
      id: 10,
      Value: "Subject Rating",
      icon: "fa fa-book",
      visible: true,
      class: "",
    },
    {
      id: 11,
      Value: "Experience",
      icon: "glyphicon glyphicon-asterisk",
      visible: true,
      class: "",
    },
    {
      id: 12,
      Value: "Cards Detail",
      icon: "fa fa-credit-card",
      visible: true,
      class: "",
    },
    {
      id: 13,
      Value: "Diseases",
      icon: "fa fa-user-md",
      visible: true,
      class: "",
    },
    {
      id: 14,
      Value: "Attendance",
      icon: "fa fa-clock-o",
      visible: true,
      class: "",
    },

    // { id: 2, Value: "Employement", icon: 'fa fa-cog', visible: false, class: "" },
    // { id: 3, Value: "Education", icon: 'fa fa-graduation-cap', visible: true, class: "" },
  ],

  StdMenu: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Additional Information",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Apply Scholarship",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  MsgLog: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Message Statistics",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  certificateissuance: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Certificate Issuance",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  StuList: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Student List",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  StdAdditionalInfo: <any>[
    {
      id: 0,
      Value: "Back",
      icon: "fa fa-arrow-left",
      visible: true,
      class: "btn-back",
    },
    { id: 1, Value: "Personal", icon: "fa fa-book", visible: true, class: "" },
    {
      id: 2,
      Value: "Academic History",
      icon: "fa fa-book",
      visible: true,
      class: "",
    },
    { id: 4, Value: "Guardian", icon: "fa fa-user", visible: true, class: "" },
    {
      id: 5,
      Value: "Sibling",
      icon: "fa fa-mortar-board",
      visible: true,
      class: "",
    },
    { id: 8, Value: "Subject", icon: "fa fa-book", visible: true, class: "" },
    {
      id: 21,
      Value: "Optional Subjects ",
      icon: "fa fa-credit-card",
      visible: true,
      class: "",
    },
    {
      id: 11,
      Value: "Assignment/Homework",
      icon: "fa fa-columns",
      visible: true,
      class: "",
    },
    {
      id: 12,
      Value: "Assessment",
      icon: "fa fa-sticky-note",
      visible: true,
      class: "",
    },
    {
      id: 23,
      Value: "Student Portfolio",
      icon: "fa fa-graduation-cap",
      visible: true,
      class: "",
    },
    {
      id: 9,
      Value: "Attendance",
      icon: "fa fa-hand-stop-o",
      visible: true,
      class: "",
    },
    {
      id: 16,
      Value: "Fee Payments",
      icon: "fa fa-credit-card",
      visible: true,
      class: "",
    },
    {
      id: 15,
      Value: "Scholarship",
      icon: "fa fa-user",
      visible: true,
      class: "",
    },
    {
      id: 14,
      Value: "Fee Structure",
      icon: "fa fa-user",
      visible: true,
      class: "",
    },
    { id: 10, Value: "PTM", icon: "fa fa-users", visible: true, class: "" },
    { id: 6, Value: "Disease", icon: "fa fa-user", visible: true, class: "" },
    {
      id: 7,
      Value: "Transport",
      icon: "fa fa-subway",
      visible: true,
      class: "",
    },
    { id: 17, Value: "Library", icon: "fa fa-book", visible: true, class: "" },
    {
      id: 18,
      Value: "Complaint",
      icon: "fa fa-creative-commons",
      visible: true,
      class: "",
    },
    {
      id: 19,
      Value: "Communication",
      icon: "fa fa-book",
      visible: true,
      class: "",
    },
    {
      id: 20,
      Value: "Blocked History",
      icon: "fa fa-credit-card",
      visible: true,
      class: "",
    },
    { id: 3, Value: "Document", icon: "fa fa-book", visible: true, class: "" },
    {
      id: 22,
      Value: "Co-Curriculum Fee",
      icon: "fa fa-graduation-cap",
      visible: true,
      class: "",
    },
  ],

  Schoolsetup: <any>[
    {
      id: 1,
      Value: "Entity",
      icon: "fa fa-file-text-o",
      visible: true,
      class: "",
    },
    {
      id: 2,
      Value: "Course",
      icon: "fa fa-file-text-o",
      visible: true,
      class: "",
    },
    {
      id: 3,
      Value: "Section",
      icon: "fa fa-file-text-o",
      visible: true,
      class: "",
    },
    {
      id: 4,
      Value: "Subject Type",
      icon: "fa fa-file-text-o",
      visible: true,
      class: "",
    },
    {
      id: 5,
      Value: "Subject",
      icon: "fa fa-file-text-o",
      visible: true,
      class: "",
    },
    { id: 6, Value: "Books", icon: "fa fa-book", visible: true, class: "" },
    {
      id: 7,
      Value: "Employee Profile",
      icon: "fa fa-user",
      visible: true,
      class: "",
    },
    //{ id: 7, Value: "Subject Allocation", icon: 'fa fa-file-text-o', visible: true, class: "" },
    {
      id: 8,
      Value: "Student Information",
      icon: "fa fa-user",
      visible: true,
      class: "",
    },
  ],

  ApplicationMenu: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Additional Information",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  SubjectRating: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Subject Rating",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  AdmissionEnquiry: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Subject",
      moodIcon: "fa fa-file-text-o",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Admission Test Slip",
      moodIcon: "fa fa-file-text-o",
      MoodGroup: "Report",
    },
  ],

  AppplicationInfo: <moodConfig[]>[
    {
      moodId: 9,
      moodValue: "Challan",
      moodIcon: "fa fa-user",
      MoodGroup: "Registration Transaction",
    },
    {
      moodId: 10,
      moodValue: "Collection",
      moodIcon: "fa fa-user",
      MoodGroup: "Registration Transaction",
    },
    {
      moodId: 11,
      moodValue: "Challan",
      moodIcon: "fa fa-user",
      MoodGroup: "Admission Transaction",
    },
    {
      moodId: 12,
      moodValue: "Collection",
      moodIcon: "fa fa-user",
      MoodGroup: "Admission Transaction",
    },
    {
      moodId: 2,
      moodValue: "Interview & Test Schedule",
      moodIcon: "fa fa-user",
      MoodGroup: "Transaction",
    },
    {
      moodId: 6,
      moodValue: "Convert to Admission",
      moodIcon: "fa fa-graduation-cap",
      MoodGroup: "Transaction",
    },
    {
      moodId: 3,
      moodValue: "Print Syllabus",
      moodIcon: "fa fa-newspaper-o",
      MoodGroup: "Report",
    },
    {
      moodId: 5,
      moodValue: "Registration Form",
      moodIcon: "fa fa-newspaper-o",
      MoodGroup: "Report",
    },
    {
      moodId: 7,
      moodValue: "Admission Test & Interview",
      moodIcon: "fa fa-newspaper-o",
      MoodGroup: "Report",
    },
    {
      moodId: 4,
      moodValue: "Print Admission Order",
      moodIcon: "fa fa-newspaper-o",
      MoodGroup: "Report",
    },
    {
      moodId: 8,
      moodValue: "Undertaking",
      moodIcon: "fa fa-newspaper-o",
      MoodGroup: "Report",
    },
    {
      moodId: 13,
      moodValue: "Registration Slip",
      moodIcon: "fa fa-newspaper-o",
      MoodGroup: "Report",
    },
  ],

  SubjectResult: <moodConfig[]>[
    {
      moodId: 0,
      moodValue: "Status",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Update",
    },
    {
      moodId: 6,
      moodValue: "Pass",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Update",
    },
    {
      moodId: 7,
      moodValue: "Fail",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Update",
    },
    {
      moodId: 8,
      moodValue: "Attendance",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Update",
    },
    {
      moodId: 1,
      moodValue: "Assessment(s)",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Grace Mark(s)",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 3,
      moodValue: "Academic",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 4,
      moodValue: "Formative",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 5,
      moodValue: "Remarks",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  Remarks: <moodConfig[]>[
    {
      moodId: 5,
      moodValue: "Remarks",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  Absent: <moodConfig[]>[
    // { moodId: 1, moodValue: "Clear", moodIcon: 'fa fa-adjust', MoodGroup: "" },
    //{ moodId: 2, moodValue: "Absent", moodIcon: "fa fa-adjust", MoodGroup: "" },
    { moodId: 4, moodValue: "Absent", moodIcon: "fa fa-adjust", MoodGroup: "" },
    { moodId: 5, moodValue: "Leave", moodIcon: "fa fa-adjust", MoodGroup: "" },
    { moodId: 3, moodValue: "Delete", moodIcon: "fa fa-adjust", MoodGroup: "" },
  ],
  loanissuance: <moodConfig[]>[
    { moodId: 1, moodValue: "Loan history detail", moodIcon: "fa fa-history", MoodGroup: "" },
  ],

  loanapproval: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Loan Approval",
      moodIcon: "fa fa-check",
      MoodGroup: "Loan Approval"
    },
    {
      moodId: 2,
      moodValue: "Loan Approval Report",
      moodIcon: "fa fa-check",
      MoodGroup: "Report"
    },
  ],


  questionaireaddi: <moodConfig[]>[
    // { moodId: 1, moodValue: "Clear", moodIcon: 'fa fa-adjust', MoodGroup: "" },
    { moodId: 1, moodValue: "Conduct", moodIcon: "fa fa-adjust", MoodGroup: "" },
  ],
  SubjectAssessments: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Subject Assessment Marks",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  Answerdetails: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Answer Detail(s)",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  ChpaterTopics: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Topic(s)",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  EmployeeComponent: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Edit Attendance",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  QuestionnaireGridStart: <moodConfig[]>[
    { moodId: 1, moodValue: "Conduct", moodIcon: "fa fa-adjust", MoodGroup: "" },
  ],
  Complainant_Type: {
    Transporter: 26,
    Driver: 27,
    Guardian: 28,
    Student: 68,
  },
  ComplainerType: {
    Parent: 170,
    Student: 171,
    Driver: 172,
    Staff: 173,
    Teacher: 295,
    Admin: 651,
    Employee: 1125,
  },

  Return_Media: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Return",
      moodIcon: "fa fa-check",
      MoodGroup: "Actions",
    },
    {
      moodId: 2,
      moodValue: "Cancel",
      moodIcon: "fa fa-remove (alias)",
      MoodGroup: "Actions",
    },
  ],

  FEE_Nature: {
    School: 60,
    Transport: 61,
    Hostel: 62,
  },

  QuesViewOn: {
    Wizard: 329,
    Grid: 330,
    Paper: 475,
  },

  Reason_Type: {
    Due_Fee: 51,
    Attendance: 52,
    Complaint: 53,
  },

  QuesSequence: {
    Sequential: 327,
    Random: 328,
  },

  QuestionnaireStatus: {
    Draft: 397,
    Published: 398,
    Closed: 399,
  },

  AdmissionStatus: {
    Draft: 397,
    Published: 398,
    Closed: 399,
  },

  RegisterType: {
    Normal: 573,
    Quota: 574,
  },

  Language: {
    English: 1,
    Urdu: 2,
    Panjabi: 3,
    Sindhi: 4,
    Pashtu: 5,
  },

  Student_Status: {
    Continue: 357,
    Leave: 358,
    PassedOut: 1246,
    Transfer: 510,
    Promoted: 1254,
    Not_Promoted: 1255,
  },

  Respose_Type: {
    In_Process: 162,
    Hold: 163,
    Intrested: 164,
    Not_Intrested: 165,
    Registered: 1412,
  },

  Complaint_Status: {
    Pending: 77,
    InProcess: 78,
    Closed: 79,
  },

  FeeProfileCategory: {
    ForNewStudent: 1415,
    ForExistingStudent: 1416,
  },

  Complaint_Status_Stxt: {
    Publish: "Published",
    Draft: "Draft",
    Closed: "Closed",
  },

  ApplicationStatus: {
    Pending: 80,
    Accepted: 81,
    Rejected: 82,
  },

  Complaint_Status_stxt: {
    Pending: "Pending",
    InProcess: "In Process",
    Closed: "Closed",
  },

  Session_Status: {
    Continue: "Continue",
    Leave: "Leave",
  },

  Status: {
    Open: 160,
    Closed: 161,
  },

  BASON: {
    Amount: 273,
    Percentage: 274,
  },

  BankType: {
    Finance: 360,
    HR: 361,
  },

  MeetTo: {
    ClassTeacher: 265,
    SubjectTeacher: 266,
  },

  Result: {
    Pass: 297,
    Failed: 298,
    Not_Promoted: 299,
  },
  Result_Status: {
    Pass: "Pass",
    Failed: "Failed",
  },
  ResultStatus: {
    Pass: "Pass",
    Failed: "Fail",
  },

  User_Category: {
    Admin: 1088,
    Employee: 1089,
    Parent: 1090,
    Student: 1091,
    Driver: 1092,
  },

  QuestionBaseOn: {
    QuestionnaireTime: 331,
    QuestionTime: 332,
    NoTimeLimit: 333,
  },
  QuessStatus: {
    Draft: 1489,
    InReview: 1490,
    Publish: 1491
  },
  LoanInterest: {
    InterestFree: 426,
    InterestApply: 427,
  },

  LoanAvail: {
    Morethanone: 424,
    OneTime: 425,
  },

  DeductionType: {
    MonthlyInstallment: 439,
  },

  LoanType: {
    Loan: 449,
    MergeLoan: 450,
  },

  LoanNature: {
    Advance: 428,
    Loan: 429,
    Security: 1207,
  },

  LoanLimit: {
    NoLimit: 419,
    Limit: 420,
    SalaryPercentage: 421,
    BaseonGratuity: 422,
    BaseonPF: 423,
  },

  Period_Status: {
    Free: 366,
    Reserved: 367,
    Booked: 381,
  },

  Fee_Status: {
    Unpaid: "Unpaid",
    Paid: "Paid",
    Exempt: "Exempt",
    Partial_Paid: "Partial Paid",
  },
  loanissuancestxt: {
    Advance: "Advance",
    Loan: "Loan",
  },

  // PTM_Status: {
  //   Pending: "Pending",
  //   Attend: "Attend",
  //   Absent: "Absent",
  // },
  PTM_Status: {
    Start: "Start",
    Finish: "Finish",
  },

  SMAtnActivity: {
    Present: 1,
    Absent: 2,
    Late: 3,
    Alternate_Off: 4,
    Leave: 5,
    Holiday: 6,
    StudyLeave: 7,
    NMarked: 9,

  },

  SMAtnActivitystxt: {
    Present: "Present",
    Absent: "Absent",
    Late: "Tardy",
    Alternate_Off: "Alternate Off",
    Leave: "Leave",
    Holiday: "Holiday",
    NMarked: "N.Marked",
  },

  QuestionnaireFor: {
    Teacher: "1013",
    Parent: "1014",
    Student: "1015",
  },

  WeekDay: [
    { Id: 99, stxt: "Sunday", JSid: 0 },
    { Id: 100, stxt: "Monday", JSid: 1 },
    { Id: 101, stxt: "Tuesday", JSid: 2 },
    { Id: 102, stxt: "Wednesday", JSid: 3 },
    { Id: 103, stxt: "Thursday", JSid: 4 },
    { Id: 104, stxt: "Friday", JSid: 5 },
    { Id: 105, stxt: "Saturday", JSid: 6 },
  ],

  weekDays: {
    Sunday: 99,
    Monday: 100,
    Tuesday: 101,
    Wednesday: 102,
    Thursday: 103,
    Friday: 104,
    Saturday: 105,
  },
  ChallanStatus: {
    ChallanGenerate: 220,
    ChallanNotGenerate: 221,
  },

  Detail: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Detail(s)",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  SimpleDetail: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Planning",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  Document_Types: {
    Word_Document: 148,
    Excel_Document: 149,
    JPEG_Document: 150,
    GIF_Document: 151,
    Audio_File: 291,
    Video_File: 292,
    PDF_Document: 293,
    External_Link: 294,
    PPT_Document: 1064,
  },
  FromType: {
    Library: 353,
    Academic: 354,
  },
  BinLocaltion: {
    Rack: 1559,
    Shelf: 1560,
    Bin: 1561
  },
  CertWithReq: {
    With_Request: 1270,
    Without_Request: 1271,
  },

  Certreqissu: {
    Valid: 1272,
    Void: 1273,
  },

  QualificationType: {
    HumanResource: 368,
    Insitute: 369,
  },
  Letterfor: {
    Employee: 1201,
    Department: 1202,
    Entity: 1203,
  },
  Letter_Template_Fields: {
    Employee: 1,
    Department: 2,
    Company: 3,
  },

  Periods: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Periods",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Copy Day",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  MeetingManager: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Edit",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Delete",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  StudentAdditionalInfoHifz: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Edit",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    }
  ],

  Reservation: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Reservation",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  AccountStatus: {
    ActiveForAllTrans: 362,
    InActiveForNewTrans: 363,
    InActiveForAllTrans: 364,
  },
  StudentStatus: {
    Continue: 357,
    Leave: 358,
  },
  ApprovalsSubtypeCode: {
    principal_approval: '040704',
    age_approval: '040707',
    defaulter_approval: '040708',
  },

  Menucategory: {
    Screens: 1103,
    Reports: 1104,
    Dashboard: 1114,
    WorkBench: 1376,
  },

  Activity_Status_Id: {
    Active: 192,
    In_Active: 193,
    Close: 405,
  },

  Status_Type: {
    InActive: 406,
    Active: 407,
    Close: 408,
  },

  ScholarshipType: {
    Scholarship: 1072,
    Discount: 1073,
    Adjustment: 1077,
    Donor:1571
  },

  Type: {
    New_Scholarship: 1365,
    Renew_Scholarship: 1366,
  },

  Activity_Status_Stxt: {
    Active: "Active",
    In_Active: "In Active",
  },

  gridSizeSP: {
    Size: "22",
  },

  PayMethod: {
    Cash: 117,
    Cheque: 118,
    Transfer: 119,
    BankDeposit: 304,
    PaymentGateway: 572,
  },

  Period_Type: {
    Period: 339,
    Break: 340,
    Free_Period: 341,
  },

  AdjustmentType: {
    DocumentAdjustAgainstAmount: 390,
    AmountAdjustAgainstDocument: 391,
  },
  ApplyYearlyHoliday: {
    Students: 106,
    TeachingStaff: 107,
    AdminStaff: 108,
    All: 409,
  },
  Shift_Type: {
    Time_Based: 302,
    Hourly_Base: 303,
  },
  Admission_status: {
    Recommend: 1389,
    Not_Recommend: 1390,
  },

  ListDays: [
    { id: 99, stxt: "sunday" },
    { id: 100, stxt: "monday" },
    { id: 101, stxt: "tuesday" },
    { id: 102, stxt: "wednesday" },
    { id: 103, stxt: "thursday" },
    { id: 104, stxt: "friday" },
    { id: 105, stxt: "saturday" },
  ],
  ListDaysseq: [
    { id: 1, stxt: "monday" },
    { id: 2, stxt: "tuesday" },
    { id: 3, stxt: "wednesday" },
    { id: 4, stxt: "thursday" },
    { id: 5, stxt: "friday" },
    { id: 6, stxt: "saturday" },
    { id: 7, stxt: "sunday" },
  ],
  ActualDAys: [
    { id: 99, nid: 0, stxt: "sunday" },
    { id: 100, nid: 1, stxt: "monday" },
    { id: 101, nid: 2, stxt: "tuesday" },
    { id: 102, nid: 3, stxt: "wednesday" },
    { id: 103, nid: 4, stxt: "thursday" },
    { id: 104, nid: 5, stxt: "friday" },
    { id: 105, nid: 6, stxt: "saturday" },
  ],

  Dates: {
    Min: "1900-12-31",
    Max: "9998-12-31",
  },

  AssignmentsTest: {
    Test: 400,
    Assignment: 401,
    Homework: 505,
    Vacationwork: 1016,
  },

  PolicyType: {
    LateArrivalPolicy: 244,
    EarlyDeparturePolicy: 245,
    OvertimePolicy: 246,
    AbsentPolicy: 247,
  },
  calculalteon: {
    ActualMin: 1480,
    DurationBase: 1481,
  },
  DtlPolicyType: {
    Excuse: 248,
    Count: 249,
    HalfDay: 250,
    Absent: 251,
  },

  Attendance_Type: {
    Work: 430,
    Lunch: 431,
    Leave: 432,
    Out_Door: 433,
  },

  Attendance_Activity: {
    Check_In: 1,
    Check_Out: 2,
    Both: 3
  },
  AssignmentStatus: {
    Draft: 397,
    Published: 398,
    Closed: 399,
  },

  MarksApplicable: {
    Applicable: 388,
    Not_Applicable: 389,
  },
  CourseStatus: {
    Starting_Course: 1351,
    Middle_Course: 1352,
    Ending_Course: 1353,
  },

  AssignmentType: {
    Combine: 386,
    Subject: 387,
  },
  TransactionType: {
    // FeeCollection: 451,
    // AdvanceCollection: 452,
    // AdvanceAdjustment: 453,
    // Admission: 523,
    // Registration: 524,
    FeeCollection: 5501,
    AdvanceCollection: 5502,
    AdvanceAdjustment: 5503,
    Admission: 5504,
    Registration: 5505,
    FeeExempt: 5506,
    AdvanceAgainstDiscount: 5601,
    AdjustmentAgainstArrears: 5602,
  },
  Accrual_Unit: {
    Daily: 259,
    Weekly: 260,
    Monthly: 261,
    Quarterly: 262,
    Half_Yearly: 263,
    Yearly: 264,
    Fortnightly: 460,
  },
  RenewOn: {
    Afterayearofresumeduty: 455,
  },
  Assessments_Type: {
    Writter: 440,
    Oral: 441,
    Theory: 442,
    Practical: 443,
    Assignment: 444,
    Test: 445,
    Dictation: 446,
    Quraan: 447,
    Geometry: 448,
  },

  ReferenceType: {
    Assigment: 287,
    PostalDispatch: 288,
    PostalReceive: 289,
    EmployeeAttachment: 290,
    Test: 476,
    Homework: 508,
    TopicAttachment: 509,
    PublishDocument: 546,
    Syllabus_Attachment: 615,
    Message: 669,
    Document_Type: 756,
    Student_Document: 826,
    Student_Portfolio: 836,
    Vacationwork: 1023,
    OnlineAssessment: 1078,
    Case_Register: 1129,
    Book: 1168,
    Media: 1247,
    Import_Template: 1349,
    Student_Left_Attachment: 1464,
    Task: 1572,
  },

  QuestionnaireCategory: {
    Learning: 334,
    Assessment: 335,
    Quiz: 336,
    Feedback: 461,
    Interview: 462,
    Admission: 522,
  },

  AnswerGroup: {
    Selection: 463,
    Custom: 464,
  },

  InputType: {
    Number: 322,
    CheckBox: 323,
    Combo: 324,
    RadioButton: 325,
    TextArea: 326,
  },

  Assignment_Status: {
    Draft: 397,
    Published: 398,
    Closed: 399,
  },
  NodeType: {
    Chapter: 499,
    Topics: 500,
  },

  AccountLevel: {
    ChartofAccount: 497,
    Entity: 498,
  },
  LeaveUnit: {
    Days: 255,
    Hours: 256,
  },

  Link_Activity: {
    NON: 493,
    Assignment: 494,
    Test: 495,
    Quiz: 496,
    Attachment: 501,
    External_Link: 502,
    Question: 798,
    HomeWork: 828,
    SLO: 1375,
    Feedback: 1380,
  },
  ScheduleType: {
    Schedule_PTM: 312,
    Parent_Request: 313,
  },
  AppStatus: {
    Pending: 80,
    Approved: 81,
    Rejected: 82,
    ReRequest: 1001,
  },
  SyllabusBasedOn: {
    Curriculum: 516,
    Custom: 517,
    Attachment: 616,
  },
  ActiveBasedOn: {
    timebase: 786,
    nontimebase: 785,
  },

  SyllabusType: {
    Examination: 518,
    Admission_Test: 519,
  },

  SyllabusShared: {
    Entity: 520,
    Region: 521,
    CampusLevel: 558,
  },

  TopicStatus: {
    Client: 520,
    Entity: 521,
  },

  rspymthead_sharewith: {
    Client: 600,
    Entity: 520,
  },

  ForPayroll: {
    Client: 1501,
    Entity: 1502,
  },

  Syllabus: {
    Cambridge: 1,
    Matric: 2,
    Medical: 3,
    Inter: 4,
    PrePrimary_Primary: 5,
  },
  SyllabusTopicStaus: {
    All: 5,
    Pending: 77,
    InProcess: 78,
    Closed: 79,
  },
  stdviolationperiod: {
    On_Academicyear: 1279,
    On_Period: 1280,
  },

  Errors: {
    NegativeField: "This field cannot be negative.",
    Empty: " Cannot be Empty.",
    CannotbeDelete: " Cannot be delete.",
    DeleteSuccess: " Record deleted successfully",
  },

  CourseReport: <moodConfig[]>[
    {
      moodId: 2,
      moodValue: "Print Questionnaire",
      moodIcon: "fa fa-edit",
      MoodGroup: "",
    },
  ],

  Activity_Shared: {
    Client: 528,
    Entity: 529,
    Region: 530,
    CourseCategroy: 531,
    Course: 532,
  },

  ExamSyllabus_Status: {
    Draft: 397,
    Published: 398,
    Closed: 399,
  },

  AssessPolicyType: {
    Misconduct: 1527,
    Tarbiyah: 1528,
  },

  AssessConductBy: {
    Parent: 1220,
    Staff: 1221,
  },

  ApprovalStatus: {
    Approved: 547,
    Rejected: 548,
    CondRecom: 549,
    Re_Test: 575,
    Pending: 77
  },
  NatureType: {
    Campus: 1397,
    Franchise: 1398,
  },
  AdmissionSectionWise: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Section Seat(s)",
      moodIcon: "fa fa-file-archive-o",
      MoodGroup: "",
    },
  ],

  RegistrationStatus: {
    Pending_for_Registration_Challan: 538,
    Registration_Challan_Unpaid: 539,
    Schedule_for_TestandInterview: 540,
    Pending_for_TestandInterview: 541,
    Principal_Approval: 542,
    Pending_for_Admission_Challan: 543,
    Admission_Challan_Unpaid: 544,
    Pending_for_enrollment: 545,
    Enrolled: 550,
    Parent_undertaking: 1401,
    All: 0,
  },

  System_Policies: ([] = [
    { id: 0, Value: "General", icon: "fa fa-book", visible: true, class: "" },
    {
      id: 1,
      Value: "Fee Management",
      icon: "fa fa-money",
      visible: false,
      class: "",
    },
    {
      id: 2,
      Value: "Attendance",
      icon: "fa fa-check",
      visible: false,
      class: "",
    },
    //  { id: 3, Value: "SMS Configuration", icon: 'fa fa-envelope', visible: true, class: "" },
    {
      id: 4,
      Value: "Notifications",
      icon: "fa fa-bell",
      visible: true,
      class: "",
    },
    // { id: 5, Value: "Email Configuration", icon: 'fa fa-at', visible: true, class: "" },
    {
      id: 6,
      Value: "Academic",
      icon: "fa fa-graduation-cap",
      visible: true,
      class: "",
    },
    {
      id: 7,
      Value: "Attachement",
      icon: "fa fa-paperclip",
      visible: true,
      class: "",
    },
    {
      id: 8,
      Value: "Default Reports",
      icon: "fa fa-newspaper-o",
      visible: true,
      class: "",
    },
    {
      id: 9,
      Value: "External Drives",
      icon: "fa fa-upload",
      visible: true,
      class: "",
    },
    {
      id: 10,
      Value: "Student Management",
      icon: "fa fa-graduation-cap",
      visible: false,
      class: "",
    },
    {
      id: 11,
      Value: "Finance Management",
      icon: "fa fa-money",
      visible: true,
      class: "",
    },
    {
      id: 12,
      Value: "Communication",
      icon: "fa fa-paper-plane",
      visible: true,
      class: "",
    },
    {
      id: 14,
      Value: "Human Resource",
      icon: "fa fa-users",
      visible: true,
      class: "",
    },
    {
      id: 13,
      Value: "Time Table",
      icon: "fa fa-clock-o",
      visible: false,
      class: "",
    },
    {
      id: 15,
      Value: "Supply Chain",
      icon: "fa fa-users",
      visible: true,
      class: "",
    },
    {
      id: 16,
      Value: "PTM",
      icon: "fa fa-users",
      visible: true,
      class: "",
    },
  ]),
  CampusType: {
    HeadOffice: 503,
    Campuse: 504,
  },

  InstituteStatus: {
    Operational: 561,
    Under_Establish: 562,
    Suspend: 563,
  },

  FineType: {
    Fixed: 275,
    Incremental: 276,
    Custom: 566,
  },

  SharedWith: {
    Entity: 520,
    Region: 521,
    Campus_Level: 558,
    Client: 600,
    Course: 564,
    Course_Category: 565,
  },

  doccat: {
    Agreement: 1370,
    Admission_Policy: 1371,
    Memo: 1372,
    calender: 1373,
    lesson_Plan: 1374,
  },

  doccatstxt: {
    Agreement: "Agreement",
    Admission_Policy: "Policy",
    Memo: "Memo",
    calender: "Calendar",
  },

  DocumentCategory: {
    LessonPlanning: 559,
    Document: 560,
  },
  IncrementType: {
    Monthly: 277,
    Daily: 278,
  },

  ReportType: {
    Admission_Order: 567,
    Fee_Challan: 568,
    Marks_Sheet: 569,
  },

  LeaveStatus: {
    Pending: 1167,
    Approved: 582,
    Rejected: 583,
    All: 0,
  },

  ApplyOn: {
    Department: 584,
    EmployeeType: 585,
    EmployeeCategory: 1508
  },

  FeeOccurance: {
    Annual: 55,
    Monthly: 56,
    Quarterly: 57,
    Daily: 58,
    Custom: 59,
  },

  LeavePolicy: {
    Fixed: 457,
    Percentage: 458,
    Actual: 459,
    Monthly: 705
  },
  ReferenceTypeEmpPay: {
    Allownce: 1,
  },
  LeaveTransType: {
    Quota: 1,
    Adjustment: 3,
  },
  LeaveTransSubType: {
    LeaveAdjustment: 9,
    leaveEncashment: 8,
  },
  ApplicableOn: {
    Employee_Category: 1475,
    Designation: 1476,
    Department: 1477,
    EmployeeGrade: 1484
  },
  FeeCategory: {
    NonRefundable: 53,
    Refundable: 54,
  },
  FineBase: {
    DueDate: 598,
    ChallanDate: 599,
  },

  FiscalyearReportMenu: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Fiscal Year",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
  ],

  CashRequestReportMenu: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Cash Request",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
  ],

  CurrencyValidate: {
    Optional: 1,
    Mandatory: 2,
    List: 3,
  },
  CourseRegister: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Exam Schedule",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  CheckPointRegister: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Check Point Schedule",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  Shared_dWith: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Shared With",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  SubjectRegister: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Subject Assessments",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  AssessmentTypes: {
    Formative: 592,
    Summative: 593,
    Both: 594,
  },
  Communication_Type: {
    Communication: 645,
    Other: 646,
  },
  UnitClass: {
    InterClass: 649,
    IntraClass: 650,
  },

  ItemShared: {
    Entity: 520,
  },
  Compulsory: {
    Yes: 654,
    No: 655,
  },


  AssessmentType: {
    Formative: 592,
    Summative: 593,
    Both: 594,
    None: 656,
  },
  ComplaintShared: {
    Admin: 525,
    Parents: 526,
    Teachers: 527,
  },
  ExamSyllabus: {
    All: 0,
    Pending: 77,
    InProcess: 78,
    Closed: 79,
  },
  ItemNature: {
    Goods: 647,
    Service: 648,
  },
  ItemType: {
    DimensionItem: 661,
    GeneralItem: 660,
  },

  Grace_Mark_Apply: {
    Overall: 640,
    Subject: 641,
  },
  DimensionType: {
    Color: 27,
    Size: 28,
    Style: 29,
  },
  ExamType: {
    CheckPoint: 589,
    Term: 590,
    Final: 591,
  },
  PeriodFrequency: {
    Monthly: 611,
    Quarterly: 612,
    HalfYearly: 613,
    Yearly: 614,
  },
  DepreciationConvention: {
    FirstRun: 630,
    LastRun: 631,
    General: 632,
  },

  CertificateFor: {
    Certificate: 601,
    Document: 602
  },

  Fiscal_Period: {
    InActive: 480,
    Active: 481,
    Posted: 482,
    Closed: 483
  },

  Assignment_Home: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Homework",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Assignment",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  GraceMarks: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Promote",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  PostKeyGroup: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Post Key Groups",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  SubjectWise: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Subject Wise",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  CourseCateg: {
    PrePrimary: 370,
    Primary: 371,
    Secondary: 372,
  },

  ExamTerm: {
    CheckPoint: 589,
    Term: 590,
  },

  bloodgroup: {
    ONegative: 29,
    OPositive: 30,
    ANegative: 31,
    APositive: 32,
    BNegative: 33,
    BPositve: 34,
    ABNegative: 35,
    ABPositive: 36,
    Unknown: 91,
  },
  gender: {
    Boy: 337,
    Girl: 338,
  },
  sectiontype: {
    Boy: 96,
    Girl: 97,
    Both: 98
  },
  maingender: {
    male: 44,
    female: 45,
  },

  Authority: {
    School: 143,
    Government: 144,
    Private: 145,
  },
  SearchStdPolicy: {
    GRNo: 1,
    Challan: 2,
    Studentno: 3,
    Guardian: 4
  },
  RateB: {
    Hourly: 704,
    Monthly: 705,
    PayPeriod: 706,
    Annually: 707,
    PercentageOfEarning: 708,
    Fixed: 1471,
    Perc_of_Basic_Salary: 1472,
  },
  AppSourceType: {
    Staff : 704,
    
  },
  Paymenttype: {
    Primary: 410,
    //Additional: 411,
    Monthly: 1468,
    Annually: 1469,
    Additional: 1470,
    PrimaryandAdditional: 412,
  },
  // PayrollCategory: {
  //     Non: 490,
  //     Standard: 491,
  //     Retirement: 492,
  //     GeneralLiability: 1453,
  //     EmployeesCompensation: 1454,
  //   },
  //     EmployeesCompensation: 1454,
  //   },

  Approval: {
    Result_Approval: 700,
  },
  PayPeriodReportMenu: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Payroll Period",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
  ],

  LoanRequest: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Loan Request",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
  ],

  LetterRequest: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Letter Request",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
  ],
  
  ItemRequest: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Item Request",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
  ],
  PurchaseRequisition: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Purchase Requisition",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
  ],
  
  Academiccal: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Calender Report",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
  ],
  AdditionalSubjectResult: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Assessment(s)",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Mark's Register",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
    {
      moodId: 3,
      moodValue: "Mark Sheet",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
  ],

  FeeStatus: {
    Unpaid: 83,
    Paid: 84,
    Exempt: 85,
    Partial_Paid: 305,
  },

  FeePay: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Fee Challan",
      moodIcon: "fa fa-adjust",
      MoodGroup: "Reports",
    },
  ],

  StuAttachment: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Attachment",
      moodIcon: "fa fa-edit",
      MoodGroup: "",
    },
    { moodId: 2, moodValue: "Activity", moodIcon: "fa fa-edit", MoodGroup: "" },
  ],
  // StuPortfolio: <moodConfig[]>[
  //     { moodId: 1, moodValue: "Activity", moodIcon: 'fa fa-adjust', MoodGroup: "Reports" },

  // ],
  MsgStatus: {
    Read: 392,
    UnRead: 393,
    Sent: 395,
    Pending: 396,
  },

  Event: {
    DocTypeID: 713,
  },
  Account_Type: {
    Download: 710,
    Upload: 709,
  },

  Account_Category: {
    BANK_AC: 3,
  },

  AttachmentandDelete: <moodConfig[]>[
    { moodId: 1, moodValue: "Download", moodIcon: "fa fa-edit", MoodGroup: "" },
    { moodId: 2, moodValue: "Delete", moodIcon: "fa fa-trash", MoodGroup: "" },
  ],

  Coverage: <moodConfig[]>[
    {
      moodId: 359,
      moodValue: "Revert",
      moodIcon: "fa fa-check",
      MoodGroup: "Action",
    },
    {
      moodId: 86,
      moodValue: "Start",
      moodIcon: "fa fa-check",
      MoodGroup: "Status",
    },
    {
      moodId: 87,
      moodValue: "End",
      moodIcon: "fa fa-check",
      MoodGroup: "Status",
    },
    {
      moodId: 351,
      moodValue: "Play",
      moodIcon: "fa fa-check",
      MoodGroup: "Status",
    },
    {
      moodId: 88,
      moodValue: "Pause",
      moodIcon: "fa fa-check",
      MoodGroup: "Status",
    },
  ],

  Revert: {
    Revert: 359,
  },
  GNOperator: {
    Is_Equal: 1,
    Greater_than: 2,
    Greater_than_or_Equal_to: 3,
    Less_than: 4,
    Less_than_or_Equal_to: 5,
    Not_Equal_to: 6,
  },

  EntityType: {
    Company: 722,
    EducationalInstitute: 723,
  },
  PriorityType: {
    Low: 727,
    Medium: 728,
    High: 729,
  },
  RequestType: {
    Advance: 724,
    ClearandReimburse: 725,
    Clear: 726,
  },

  Subject_Admission: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Subject",
      moodIcon: "fa fa-check",
      MoodGroup: "Options",
    },
  ],

  InstituteType: {
    School: 730,
    College: 731,
    University: 732,
    Coaching: 807,
  },
  LeaveAdjustment: {
    AttendancePolicy: 738,
    LeaveType: 739,
  },

  policyTypeId: {
    late: 244,
    lateArrival: 245
  },

  FeetypeBaseOn: {
    Course: 740,
    Subject: 741,
  },
  InvoiceType: {
    FreeTextInvoice: 742,
    RoyaltyInvoice: 743,
  },
  ResourceCategory: {
    Worker: 746,
    Machine: 747,
  },

  FrontOffice: {
    StudentManagement: 748,
    FrontOffice: 749,
  },
  CertificateTemplateFields: {
    Student: 1252,
    Employee: 1253,
  },
  LetterTemplateFields: {
    Employee: 1201,
    Department: 1202,
    Company: 1203
  },
  CertificateRequest: {
    Student: 146,
    Employee: 147,
  },

  UTUserType: {
    AdminUser: 1082,
    SuperAdmin: 1083,
    EndUser: 1084,
    TenentUser: 1085,
  },
  StorageType: {
    Internal: 533,
    External: 534,
    Default: 535,
  },
  Requester: {
    Student: 195,
    Guardian: 196,
    Staff: 197,
    Driver: 201,
  },
  TransferType: {
    In_School: 752,
    Out_School: 753,
    Student: 1274,
  },
  ItemLevel: {
    Item_Chart: 782,
    Entity: 781,
  },
  RefrenceType: {
    Employee: 787,
    Department: 788,
    Equipment: 795,
    Project: 796,
  },
  RelationType: {
    Father: 1,
    Mother: 2,
    Uncle: 3,
    Aunty: 4,
    Van_Driver: 5,
    Brother: 6,
    Sister: 7,
  },
  Approved: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Approved",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  TransferRequestStatus: {
    All: 0,
    Pending: 759,
    Approved: 760,
    Rejected: 761,
  },
  PlainBasedon: {
    MonthWise: 1549,
    WeekWise: 1550,
    Daywise: 1551,
  },
  ChallanType: {
    RegistrationChallan: 1,
    AdmissionChallan: 2,
  },
  PayOnStatus: {
    Percentage: 822,
    Amount: 823,
  },
  Handoverto: {
    Student: 1158,
    Guardian: 1159,
    Others: 1160,
  },

  StdDocument: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Attachment",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],
  AssigneTeacher: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Assign Teacher",
      moodIcon: "fa fa-adjust",
      MoodGroup: "",
    },
  ],

  AdjustField: {
    Select: "S",
    Amount: "A",
  },
  FieldType: {
    Discount: "D",
    Fine: "F",
  },
  File_Types: {
    Text_File: 766,
    Excel_File: 767,
    CSV_File: 768,
  },

  QuotaType: {
    Opening: 1,
    New_Quota: 2,
    Adjustment: 3,
    Leave: 4,
  },

  DocumentStatus: {
    Complete: 824,
    InComplete: 825,
  },
  Employementtype: {
    Probation: 1,
    Resignation: 3,
    Termination: 4,
    Rejoining: 5,
    Retirement: 6,
    Pension: 7,
    Confirmation: 125,
  },

  FIDocumentType: {
    InventoryReceipt: 101,
    InventoryIssuance: 102,
    CashReceipt: 103,
    CashPayment: 104,
    BankReceipt: 105,
    BankPayment: 106,
    VendorInvoice: 107,
    VendorPayment: 108,
    VendorAdvance: 109,
    VendorAdjustment: 110,
    CustomerInvoice: 111,
    CustomerCollection: 112,
    CustomerAdvance: 113,
    CustomerAdjustment: 114,
    GeneralJournal: 115,
    DebitNote: 116,
    CreditNote: 117,
    FixedAssetsTransaction: 118,
    ProjectIncome: 119,
    ProjectExpense: 120,
    Expense: 121,
    Payroll: 122,
    PayrollDisbursement: 123,
    GeneralTax: 124,
    Reversal: 125,
    CustomerPayment: 126,
  },

  FIIndicator: {
    Debit: 1,
    Credit: 2,
  },

  Finalresult: {
    Normal: 834,
    Aggregate: 835,
  },

  ShareCategory: {
    BasedOn: 1019,
    QuestionnaireFor: 1020,
  },
  InstallmentBase: {
    ChallanWise: 1021,
    FeeTypeWise: 1022,
  },
  EmployeeAttendance: {
    checkIn: 1,
    checkOut: 2,
  },
  ValueApplyOn: {
    GrossAmount: 1029,
    NetAmount: 1030,
  },

  HomeworkType: {
    Daily_Homework: 1005,
    Vacation_Homework: 1006,
  },

  ExamBaseOn: {
    Exam: 1035,
    Without_Exam: 1036,
  },
  AdditionalInformation: {
    Employee: 1041,
    Student: 1039,
    Parent: 1040,
    Customer: 1177,
  },

  Messagebase: {
    Entity: 520,
    Client: 600,
  },
  Guestype: {
    Parent: 1040,
    Staff: 1041,
    Student: 1039,
    Customer: 1177
  },
  SMSendTo: {
    Group: 1042,
    Individual: 1043,
    Course: 1044,
    Designation: 1045,
    Department: 1055,
  },
  Messagetype: {
    CourseTopic: 1047,
  },

  Participant_Status: {
    Join: 1057,
    Left: 1056,
  },

  subjecctclass: {
    CoreSubject: 576,
    NonCoreSubject: 577,
  },
  subjecctcats: {
    Academic: 578,
    NonAcademic: 579,
  },

  LessonTopicStatus: {
    Start: 86,
    End: 87,
    Pause: 88,
    Continue: 351,
    Rivert: 359,
  },
  SubmitAttachment: {
    Homework: 1034,
  },
  submitStatus: {
    submitid: 1037,
    unsubmitid: 1038,
  },

  Cash_Request: {
    Pending: 1161,
    Cleared: 1162,
    NotCleared: 1163,
  },
  status_reasonleave: {
    Student: 580,
    Staff: 581,
    StudentLeave: 1166,
    StudentTransfer: 1224,
    StudentLeft: 1461,
    QuranFeedback: 1588,
  },

  ScholarshipCategory: {
    Fixed: 1171,
    Custom: 1172
  },

  ApplicableFor: {
    General: 1173,
    Sibling: 1174,
    Staff: 1175
  },

  BaseOnType: {
    General: 1181,
    Client: 1182,
  },

  ClientNature: {
    Own_Campus: 1397,
    Franchise: 1398,
  },
  Dedectionandcontribution: {
    Deduction: 1455,
    DeductionandContribution: 1457,
  },

  numericformatter: {
    number: "no",
    currency: "currency",
  },
  calculationtype: {
    sum: "sum",
    subtract: "sub",
    multiply: "mul",
    average: "avg",
    divide: "div",
  },
  LessonPlan: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Topic Delivery",
      moodIcon: "fa fa-file-text",
      MoodGroup: " ",
    },
  ],

  Unblockactivity: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Commitment History",
      moodIcon: "fa fa-check",
      MoodGroup: "",
    },
  ],

  TransType: {
    FreeTextInvoice: 742,
    RoyaltyInvoice: 743,
    Customer_Collection: 1004,
    Customer_Payment: 1074,
  },

  Atnpolicytab: <any>[
    { id: 1, Value: "Policy", icon: "fa fa-warning", visible: true, class: "" },
    {
      id: 2,
      Value: "Absent Policy",
      icon: "fa fa-calendar-times-o",
      visible: true,
      class: "",
    },
  ],
  GrdUserBasedOn: <any>[
    {
      Id: 1222,
      stxt: "CNIC",
    },
    {
      Id: 1223,
      stxt: "Contact No",
    },
  ],

  driveUrllink: {
    drivebaseurl: "https://drive.google.com/file/d/",
    PPTdriveurl: "https://docs.google.com/presentation/d/",
    drivdocurl: "https://docs.google.com/document/d/",
    replacedriveurl: "https://drive.google.com/uc?id=",
  },

  Formatter: ["currency", "sum"],

  MenuType: {
    Report: 1104,
    Screen: 1103,
    Dashboard: 1114,
    WorkBench: 1376,
  },
  TimeStatus: {
    FirstEntry: 1263,
    LastTime: 1265,
    Minimum: 1264,
    Maximum: 1266,
  },

  FileType: {
    Excel: 1,
    CSV: 2,
  },

  StudentAttendanceBasedOn: {
    Student_ID: 1197,
    GR_No: 1198,
    Machine_Code: 1199,
  },
  EmployeeAttendanceBasedOn: {
    Employee_ID: 1299,
    Machine_Code: 1300,
    Short_Code: 1301,
  },

  PageLines: {
    13: 1513,
    15: 1514,
    16: 1515,
  },

  Advance_Collection_From_Scholarship: {
    Advance_Against_Scholarship: 1217
  },

  Business_Type: {
    Holding_Entity: 1244,
    Subsidiary_Entity: 1245
  },

  ActivitiesPolicy: {
    Defaulter: 1438,
    Suspend: 1439
  },

  GetScreenType: {
    Item_Management: 1544,
    Transport: 1545
  },


  Import_Message_BasedOn: {
    Student_No: 100,
    GR_No: 101,
    Contact_No: 102,
  },

  GetActivityHifzDiary: {
    Sabaq: 1564,
    Sabaqi: 1565,
    Manzil: 1566,
    Naya_Sabaq: 1567
  },

  GetQuranicStudy: {
    Qaida: 1568,
    Nazra: 1531,
    Hifz: 1532,
    Girdan: 1533
  },

  GetQuranType: {
    Qaida: 1569,
    Quran_Pak: 1570,
  },
  Processapproval: {
    Pending_for_Registration_Challan: 538,
    Registration_Challan_Unpaid: 539,
    Schedule_for_TestandInterview: 540,
    Pending_for_TestandInterview: 541,
    Principal_Approval: 542,
    Pending_for_Admission_Challan: 543,
    Admission_Challan_Unpaid: 544,
    Pending_for_enrollment: 545,
    Enrolled: 550,
    Age_Approval: 1399,
    Defaulter_Approval: 1400,
    Parent_undertaking: 1401,
  },

  Data_Period: {
    Closed: 1,
    Current: 2,
    Upcomming:3
  },

  PublishAttachment: <moodConfig[]>[
    { moodId: 1, moodValue: "Download", moodIcon: "fa fa-edit", MoodGroup: "" },
  ],
  UpdateDates: {
    Due_Date: 1519,
    Challan_Date: 1520,
    Validity_Date: 1521
  },
  RelationshipType: {
    Single: 186,
    Married: 187,
    Divorced: 188,
    Widowed: 189,
  },

  Subject_Mont: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Subject Monitoring",
      moodIcon: "fa fa-edit",
      MoodGroup: "",
    },
  ],

  WeekListDays: [
    { dayid: 99, stxt: "Sunday" },
    { dayid: 100, stxt: "Monday" },
    { dayid: 101, stxt: "Tuesday" },
    { dayid: 102, stxt: "Wednesday" },
    { dayid: 103, stxt: "Thursday" },
    { dayid: 104, stxt: "Friday" },
    { dayid: 105, stxt: "Saturday" },
  ],

  Sizefont: [
    { sizeid: 1312, stxt: "Small", value: 11 },
    { sizeid: 1313, stxt: "Medium", value: 14 },
    { sizeid: 1314, stxt: "Large", value: 16 },
  ],

  JournalCategory: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Journal Category",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  Import_Message_Participants_BasedOn: [
    { Id: 100, stxt: "Student No" },
    { Id: 101, stxt: "GR No" },
    //{ Id: 102, stxt: "Contact No" }
  ]
};

export const MoodMenus = {
  CopyFeeProfile: <moodConfig[]>[
    { moodId: 1, moodValue: "Copy", moodIcon: "fa fa-check", MoodGroup: "" },
  ],

  FeeChallan: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Print",
      moodIcon: "fa fa-check",
      MoodGroup: "Report",
    },
  ],
  GeneralEntry: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Voucher View",
      moodIcon: "fa fa-check",
      MoodGroup: "Report",
    },
  ],
  SectionSubject: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Section Subject",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],
  Result_Process: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Result Process",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Revert Process",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  Chequebook: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Swap Cheque",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
    {
      moodId: 2,
      moodValue: "Change Cheque",
      moodIcon: "fa fa-file-text",
      MoodGroup: "",
    },
  ],

  Employee_Attendance_Status: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "P",
      moodIcon: "fa fa-arrow-left",
      MoodGroup: "Activity",
    },
    {
      moodId: 2,
      moodValue: "A",
      moodIcon: "fa fa-book",
      MoodGroup: "Activity",
    },
    {
      moodId: 3,
      moodValue: "H",
      moodIcon: "fa fa-book",
      MoodGroup: "Activity",
    },
    {
      moodId: 760,
      moodValue: "L",
      moodIcon: "fa fa-user",
      MoodGroup: "Activity",
    },
    {
      moodId: 5,
      moodValue: "SE",
      moodIcon: "fa fa-mortar-board",
      MoodGroup: "Activity",
    },
    {
      moodId: 6,
      moodValue: "PE ",
      moodIcon: "fa fa-credit-card",
      MoodGroup: "Activity",
    },
    {
      moodId: 7,
      moodValue: "Check In ",
      moodIcon: "fa fa-credit-card",
      MoodGroup: "Attendance",
    },
    {
      moodId: 8,
      moodValue: "Check Out ",
      moodIcon: "fa fa-credit-card",
      MoodGroup: "Attendance",
    },

  ],

  TimeTable: <moodConfig[]>[
    { moodId: 1, moodValue: "Assign Period", moodIcon: "fa fa-edit", MoodGroup: "" },
    { moodId: 2, moodValue: "Clear Period", moodIcon: "fa fa-edit", MoodGroup: "" },
    { moodId: 3, moodValue: "Replicate Day", moodIcon: "fa fa-edit", MoodGroup: "" },
    { moodId: 4, moodValue: "Replicate Period", moodIcon: "fa fa-edit", MoodGroup: "" },
    { moodId: 5, moodValue: "Clear Day", moodIcon: "fa fa-clear", MoodGroup: "" },
  ],

  Feecolhis: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Fee Collection",
      moodIcon: "fa fa-check",
      MoodGroup: "",
    },
  ],

  Royalty: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Agreement Validity",
      moodIcon: "fa fa-check",
      MoodGroup: "",
    },
  ],

  SubjectMarksReverse: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Update Marks",
      moodIcon: "fa fa-check",
      MoodGroup: "",
    },
  ],

  Attachment: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Attachment",
      moodIcon: "fa fa-check",
      MoodGroup: "",
    },
  ],

  Aggreement_Detalis: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Agreement Detail(s)",
      moodIcon: "fa fa-info",
      MoodGroup: "",
    },
  ],

  ImportData: <moodConfig[]>[
    {
      moodId: 1,
      moodValue: "Uploaded Data",
      moodIcon: "fa fa-check",
      MoodGroup: "",
    },
  ],
};
