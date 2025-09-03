import { Home, Users, UserCheck, Calendar, Clipboard, DollarSign, BarChart} from "lucide-react";


const MenuItems = [
{ label: "Dashboard", icon: <Home size={20} />, href: "/" },
{ label: "Branch", icon: <BarChart size={20} /> , href: "/branch" },
{ label: "Employee", icon: <Users size={20} />, href: "/employee", children: [ { label: "Add Employee", icon:<Users size={20} />, href: "/employee/add" } ] },
{ label: "Staffs", icon: <UserCheck size={20} /> , href: "/staffs" },
{ label: "Recruitment", icon: <BarChart size={20} /> , href: "/recruitment" },
{ label: "Task", icon: <BarChart size={20} /> , href: "/task" },
{ label: "Attendance", icon:<Calendar size={20} />, href: "/attendance", children: [ { label: "Punch In/Out", icon:<Calendar size={20} />, href: "/attendance/punch" }, { label: "Daily Log", icon:<Calendar size={20} />, href: "/attendance/daily-log" }, { label: "Attendance Request", icon: <Calendar size={20} />, href: "/attendance/request" } ] },
{ label: "Leave", icon:  <Clipboard size={20} /> , href: "/leave" },
{ label: "Payroll", icon: <DollarSign size={20} />, href: "/payroll", children: [ { label: "Create Payroll", icon:<DollarSign size={20} />, href: "/payroll/create-payroll" }, { label: "Expense", icon:<DollarSign size={20} />, href: "/payroll/expense" } ] },
{ label: "Performance", icon: <BarChart size={20} /> , href: "/performance" },
{ label: "Ticket", icon: <BarChart size={20} /> , href: "/ticket" },
{ label: "Exit", icon: <BarChart size={20} /> , href: "/exit" },
{ label: "Announcement", icon: <BarChart size={20} /> , href: "/announcement" },
{ label: "Finance", icon: <BarChart size={20} /> , href: "/finance" },
{ label: "Reports", icon: <BarChart size={20} /> , href: "/reports" },
{ label: "Rewards", icon: <BarChart size={20} /> , href: "/rewards" },
{ label: "Settings", icon: <BarChart size={20} /> , href: "/settings" },
];


export default MenuItems;









// import { LayoutDashboard, Users, UserPlus, Users2, PiggyBank, FileSpreadsheet, Receipt, CalendarCheck2, Clock4, NotebookPen, ClipboardCheck, CalendarDays, BarChart3 } from "lucide-react";

// const MenuItems = [
// { label: "Dashboard", icon: LayoutDashboard, href: "/" },
// { label: "Employee", icon: Users, href: "/employee", children: [ { label: "Add Employee", icon: UserPlus, href: "/employee/add" } ] },
// { label: "Staffs", icon: Users2, href: "/staffs" },
// { label: "Payroll", icon: PiggyBank, href: "/payroll", children: [ { label: "Create Payroll", icon: FileSpreadsheet, href: "/payroll/create-payroll" }, { label: "Expense", icon: Receipt, href: "/payroll/expense" } ] },
// { label: "Attendance", icon: CalendarCheck2, href: "/attendance", children: [ { label: "Punch In/Out", icon: Clock4, href: "/attendance/punch" }, { label: "Daily Log", icon: NotebookPen, href: "/attendance/daily-log" }, { label: "Attendance Request", icon: ClipboardCheck, href: "/attendance/request" } ] },
// { label: "Leave", icon: CalendarDays, href: "/leave" },
// { label: "Reports", icon: BarChart3, href: "/reports" },
// ];


// export default MenuItems;







// import { Home, Users, UserCheck, Calendar, Clipboard, DollarSign, BarChart } from "lucide-react"

// const MenuItem = [
//   { title: "Dashboard", path: "/dashboard", icon: <Home size={20} /> },
//   { title: "Employee", path: "/employee", icon: <Users size={20} /> },
//   { title: "Staffs", path: "/staff", icon: <UserCheck size={20} /> },
//   { title: "Attendance", path: "/attendance", icon: <Calendar size={20} /> },
//   { title: "Leave", path: "/leave", icon: <Clipboard size={20} /> },
//   { title: "Payroll", path: "/payroll", icon: <DollarSign size={20} /> },
//   { title: "Reports", path: "/reports", icon: <BarChart size={20} /> },
// ]

// export default MenuItem