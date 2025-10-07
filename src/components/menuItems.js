// const Menuitems = [
//   {
//     icon: '/icons/Dashboard.png',
//     label: "Dashboard",
//     href: "/dashboard",
//   },
//   {
//     icon: '/icons/location.png',
//     label: "Branch",
//     href: "/Branch/branch-list",
//      item: [
//       {
//         label: "Branch List",
//         href: "/Branch/branch-list"
//       }
      
//     ]
//   },
//   {
//     icon: "/icons/recruitment.png",
//     label: "Recruitment",
//     href: "/recruitment/job-posting",
//     item: [
//       {
//         label: "Job Posting",
//         href: "recruitment/job-posting"
//       },
//       {
//         label: "Job Onboarding",
//         href: 'recruitment/job-onboarding'
//       },
//       {
//         label: "Offer Letter",
//         href: '/recruitment/offer-letter'
//       }
//     ]
//   },
//   {
//     icon: "/icons/task.png",
//     label: "Task",
//     href: "/task/assign-task",
//     item: [
//       {
//         label: "Assign Task",
//         href: "/task/assign-task"
//       },
     
//       {
//         label: "to do task",
//         href: "/task/to-do-task"
//       }
//     ]
//   },
//   {
//     icon: "/icons/ticket.png",
//     label: "Ticket Management",
//     href: "/ticket-Management/all-ticket", 
//     item: [
//       {
//         label: "All Ticket",
//         href: "/ticket-Management/all-ticket"
//       }
//     ]
//   },
  
//   {
//     icon: "/icons/employee.png",
//     label: "Employee Management",
//     href: "/employee-management/employee-list",
//     item: [
//       {
//         label: "Employee List",
//         href: "/employee-management/employee-list"
//       },
//       {
//         label: "Add Employee",
//         href: '/employee-management/add-employee'
//       },
      
//     ]
//   },
//   {
//     icon: "/icons/staff.png",
//     label: "Staff",
//     href: "/staff/user",
//     item: [
//       {
//         label: "user",
//         href: "/staff/user"
//       },
//       {
//         label: "Role",
//         href: '/staff/role'
//       },
//       {
//         label: "Employee Profile",
//         href: '/staff/employee-profile'
//       },
//     ]
//   },
//   {
//     icon: "/icons/attendance.png",
//     label: "Attendance",
//     href: "/attendance/punchIn/punchOut",
//     item: [
//       {
//         label: "PunchIn/ PunchOut",
//         href: "/attendance/punchIn/punchOut"
//       },
//       {
//         label: "Daily Logs",
//         href: "/attendance/daily-logs"
//       },
//       {
//         label: "Attendance Request",
//         href: "/attendance/attendance-request"
//       },
//       {
//         label: "Attendance Details",
//         href: "/attendance/attendance-details"
//       },
      
//       {
//         label: " Summary",
//         href: "/attendance/summary"
//       },
//      ]
//   },
//  {
//     icon: "/icons/leave.png",
//     label: " Leave Management",
//     href: "/leave-management/leave-status",
//     item: [
//       {
//         label: "Leave Status",
//         href: "/leave-management/leave-status"
//       },
//       {
//         label: "Leave Request",
//         href: "/leave-management/leave-status"
//       },
//       {
//         label: "Holiday",
//         href: "/leave-management/holiday"
//       },
     
//      ]
//   },
//   {
//     icon: "/icons/payroll.png",
//     label: "Payroll Management",
//     href: "/payroll-management/payslip-list",
//     item: [
//       {
//         label: "Payslip List",
//         href: "/payroll-management/payslip-list"
//       },
//       {
//         label: "Create Payroll",
//         href: "/payroll-management/create-payroll"
//       },
//       {
//         label: "Expense",
//         href: "/payroll-management/expense"
//       },
     
//      ]
//   },
//   {
//     icon: "/icons/performance.png",
//     label: "Performance",
//     href: "/performance",
  
//   },
//   {
//     icon: "/icons/report-analytics.png",
//     label: "Report Analytics",
//     href: "/report-analytics/employee-report",
//     item: [
//       {
//         label: "Employee Report",
//         href: "/report-analytics/employee-report"
//       },
//       {
//         label: "Income Report",
//         href: "/report-analytics/income-report"
//       },
//       {
//         label: "Expense Report",
//         href: "/report-analytics/employee-report"
//       },
//       {
//         label: "Staff Report",
//         href: "/report-analytics/staff-report"
//       },
//      ]
//   },
//   {
//     icon: "/icons/announcement.png",
//     label: "Announcement",
//     href: "/announcement",
  
//   },
// {
//     icon: "/icons/expense-management.png",
//     label: "Expense Management",
//     href: "/expense-management/expense",
//     item: [
//       {
//         label: "Expense",
//         href: "/expense-management/expense"
//       },
      
//      ]
//   },
//    {
//     icon: "/icons/exit.png",
//     label: "Exit Management",
//     href: "/exit-management",
  
//   },
//    {
//     icon: "/icons/rewards.png",
//     label: "Rewards",
//     href: "/rewards",
  
//   },
//   {
//     icon: "/icons/setting.png",
//     label: "Setting",
//     href: "/setting/email-setting",
//     item: [
//       {
//         label: "Email Setting",
//         href: "/setting/email-setting"
//       },
      
//      ]
//   },
// ];

// export default Menuitems;


















import {
  DashboardOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
  AssignmentOutlined,
  ConfirmationNumberOutlined,
  PeopleOutlined,
  BadgeOutlined,
  AccessTimeOutlined,
  EventNoteOutlined,
  AccountBalanceWalletOutlined,
  TrendingUpOutlined,
  AssessmentOutlined,
  AttachMoneyOutlined,
  ExitToAppOutlined,
  CardGiftcardOutlined
} from '@mui/icons-material';

const Menuitems = [
  {
    icon: DashboardOutlined,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: LocationOnOutlined,
    label: "Branch",
    href: "/branch"
  },
  {
    icon: WorkOutlineOutlined,
    label: "Recruitment",
    href: "/recruitment/job-posting",
    item: [
      {
        label: "Job Posting",
        href: "/recruitment/job-posting"
      },
      {
        label: "Job Onboarding",
        href: '/recruitment/job-onboarding'
      },
      {
        label: "Offer Letter",
        href: '/recruitment/offer-letter'
      }
    ]
  },
  {
    icon: AssignmentOutlined,
    label: "Task",
    href: "/task/assign-task",
    item: [
      {
        label: "Assign Task",
        href: "/task/assign-task"
      },
      {
        label: "To Do List",
        href: "/task/to-do-task"
      }
    ]
  },
  {
    icon: ConfirmationNumberOutlined,
    label: "Ticket Management",
    href: "/ticket/allTickets", 
    item: [
      {
        label: "All Tickets",
        href: "/ticket/allTickets"
      }
    ]
  },
  
  {
    icon: PeopleOutlined,
    label: "Employee",
    href: "/employee"
  },
  {
    icon: BadgeOutlined,
    label: "Staff",
    href: "/staff"
  },
  {
    icon: AccessTimeOutlined,
    label: "Attendance",
    href: "/attendance/punch",
    item: [
      {
        label: "PunchIn/PunchOut",
        href: "/attendance/punch"
      },
      {
        label: "Daily Logs",
        href: "/attendance/daily-logs"
      },
      {
        label: "Attendance Request",
        href: "/attendance/attendance-request"
      },
      {
        label: "Attendance Details",
        href: "/attendance/details"
      },
      {
        label: "Summary",
        href: "/attendance/summary"
      }
     ]
  },
 {
    icon: EventNoteOutlined,
    label: "Leave Management",
    href: "/leave/leave-status",
    item: [
      {
        label: "Leave Status",
        href: "/leave/leave-status"
      },
      {
        label: "Leave Request",
        href: "/leave/leave-request"
      },
      {
        label: "Holiday",
        href: "/leave/holiday"
      }
     ]
  },
  {
    icon: AccountBalanceWalletOutlined,
    label: "Payroll Management",
    href: "/payroll/payslip-list",
    item: [
      {
        label: "Payslip List",
        href: "/payroll/payslip-list"
      },
      {
        label: "Create Payroll",
        href: "/payroll/create-payroll"
      },
      {
        label: "Expense",
        href: "/payroll/expense"
      }
     ]
  },
  {
    icon: TrendingUpOutlined,
    label: "Performance",
    href: "/performance"
  },
  {
    icon: AssessmentOutlined,
    label: "Report Analytics",
    href: "/report/employee",
    item: [
      {
        label: "Employee Report",
        href: "/report/employee"
      },
      {
        label: "Income Report",
        href: "/report/income"
      },
      {
        label: "Expense Report",
        href: "/report/expense"
      },
      {
        label: "Staff Report",
        href: "/report/staff"
      }
     ]
  },
  {
    icon: AttachMoneyOutlined,
    label: "Finance",
    href: "/finance",
    item: [
      {
        label: "Income",
        href: "/finance/income"
      },
      {
        label: "Expense",
        href: "/finance/expense"
      }
     ]
  },
  {
    icon: ExitToAppOutlined,
    label: "Exit Management",
    href: "/exit"
  },
  {
    icon: CardGiftcardOutlined,
    label: "Rewards",
    href: "/rewards"
  },
];

export default Menuitems;