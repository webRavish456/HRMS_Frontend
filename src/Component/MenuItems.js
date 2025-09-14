const Menuitems=[
    {
        icon:'/icons/dashboard.png',
        label:"Dashboard",
        href:"/dashboard"
    },
    {
        icon:'/icons/branch.png',
        label:"Branch",
        href:"/branch"
    },
    {
        icon:'/icons/recruitment.png',
        label:"Recruitment",
        href:"/recruitment/jobs",
        item:[
            {
                label:'Jobs',
                href:'/recruitment/jobs'
            },
            {
                label:'Job On-Boarding',
                href:'/recruitment/job-onboarding'
            },
            {
                label:'Offer letter',
                href:'/recruitment/offer-letter'
            }
        ]
    },
    {
        icon:'/icons/task.png',
        label:"Task",
        href:"/task/assign-task",
        item:[
            {
                label:"Assign Task",
                href:'/task/assign-task'
            },
            {
                label:"To Do List",
                href:'/task/to-do-list'
            }
        ]
    },
    {
        icon:'/icons/ticket.png',
        label:"Ticket Management",
        href:"/ticket",
    },
    {
        icon:'/icons/employee.png',
        label:"Employee",
        href:"/employee"
    },
    {
        icon:'/icons/staff.png',
        label:"Staff",
        href:"/staff/user",
        item:[
            {
                label:"User",
                href:'/staff/user'
            },
            {
                label:"Role",
                href:'/staff/role'
            },
            {
                label:"Employee Profile",
                href:'/staff/employee-profile'
            }
        ]
    },
    {
        icon:'/icons/attendance.png',
        label:"Attendance",
        href:"/attendance/punch",
        item:[
            {
                label:"PunchIn / PunchOut",
                href:'/attendance/punch'
            },
            {
                label:"Daily Logs",
                href:'/attendance/daily-logs'
            },
            {
                label:"Attendance Request",
                href:'/attendance/attendance-request'
            },
            {
                label:"Attendance Details",
                href:'/attendance/attendance-details'
            }
        ]
    },
    {
        icon:'/icons/leave.png',
        label:"Leave Management",
        href:"/leave/leave-status",
        item:[
            {
                label:"Leave Status",
                href:'/leave/leave-status'
            },
            {
                label:"Leave Request",
                href:'/leave/leave-request'
            },
            {
                label:"Holiday",
                href:'/leave/holiday'
            }
        ]
    },
    {
        icon:'/icons/payroll.png',
        label:"Payroll Management",
        href:"/payroll/payslip-list",
        item:[
            {
                label:"Payslip List",
                href:'/payroll/payslip-list'
            },
            {
                label:"Create Payroll",
                href:'/payroll/create-payroll'
            },
            {
                label:"Expense",
                href:'/payroll/expense'
            }
        ]
    },
    {
        icon:'/icons/performance.png',
        label:"Performance",
        href:"/performance",
    },
    {
        icon:'/icons/report.png',
        label:"Report Analytics",
        href:"/report/employee",
        item:[
            {
               label:"Employee Report",
               href:'/report/employee' 
            },
            {
                label:"Income Report",
                href:'/report/income'
            },
            {
                label:"Expense Report",
                href:'/report/expense'
            },
            {
                label:"Staff Report",
                href:'/report/staff'
            }
        ]
    },
    {
        icon:'/icons/announcement.png',
        label:"Announcement",
        href:"/announcement"
    },
    {
        icon:'/icons/Expense.png',
        label:"Expense Management",
        href:"/expense"
    },
    {
        icon:'/icons/exit.png',
        label:"Exit Management",
        href:"/exit",
    },
    {
        icon:'/icons/reward.png',
        label:"Rewards",
        href:"/reward",
    },
    {
        icon:'/icons/settings.png',
        label:"Settings",
        href:"/settings",
    }
];
export default Menuitems;