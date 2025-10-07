'use client';

import React, { useState } from 'react';
import { Person, Settings } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

const Header = () => {

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname=usePathname();

  const router=useRouter();

  const headerTitle=()=>{
    if(pathname==='/dashboard'){
      return 'Dashboard';
    }
    else if(pathname==='/branch/branch-list'){
      return 'Branch';
    }
    else if(pathname==='/recruitment/job-posting'){
      return 'Job Posting';
    }
    else if(pathname==='/recruitment/job-onboarding'){
      return 'Job Onboarding';
    }
    else if(pathname==='/recruitment/offer-letter'){
      return 'Offer Letter';
    }
    else if(pathname==='/task/assign-task'){
      return 'Assign Task';
    }
    else if(pathname==='/task/to-do-task'){
      return 'To Do Task';
    }
    else if(pathname==='/ticket/allTickets'){
      return 'All Tickets';
    }
    else if(pathname==='/employee'){
      return 'Employee';
    }
      else if(pathname==='/employee/create'){
        return 'Create Employee';
      }
      else if(pathname.startsWith('/employee/edit/')){
        return 'Edit Employee';
      }
      else if(pathname.startsWith('/employee/view/')){
        return 'View Employee';
      }
    else if(pathname==='/exit'){
      return 'Exit';
    }
    else if(pathname==='/staff'){
      return 'Staff';
    }
    else if(pathname==='/staff/create'){
      return 'Create Staff';
    }
    else if(pathname.startsWith('/staff/edit/')){
      return 'Edit Staff';
    }
    else if(pathname.startsWith('/staff/view/')){
      return 'View Staff';
    }
    else if(pathname==='/attendance/punch'){
      return 'Punch In/Punch Out';
    }
    else if(pathname==='/attendance/daily-logs'){
      return 'Daily Logs';
    }
    else if(pathname==='/attendance/attendance-request'){
      return 'Attendance Request';
    }
    else if(pathname==='/attendance/attendance-details'){
      return 'Attendance Details';
    }
    else if(pathname==='/attendance/summary'){
      return 'Summary';
    }
    else if(pathname==='/leave-management/leave-status'){
      return 'Leave Status';
    }
    else if(pathname==='/leave-management/leave-request'){
      return 'Leave Request';
    }
    else if(pathname==='/payroll/payslip-list'){
      return 'Payslip List';
    }
    else if(pathname==='/payroll/create-payroll'){
      return 'Create Payroll';
    }
    else if(pathname==='/payroll/expense'){
      return 'Expense';
    }
    else if(pathname==='/performance'){
      return 'Performance';
    }
    else if(pathname==='/report/employee'){
      return 'Employee Report';
    }
    else if(pathname==='/report/income'){
      return 'Income Report';
    }
    else if(pathname==='/report/expense'){
      return 'Expense Report';
    }
    else if(pathname==='/report/staff'){
      return 'Staff Report';
    }
    else if(pathname==='/finance/income'){
      return 'Income';
    }
    else if(pathname==='/finance/expense'){
      return 'Expense';
    }
    else if(pathname==='/rewards'){
      return 'Rewards';
    }
   }

   const handleLogout=()=>{
     router.push('/login');
   }

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title">{headerTitle()}</h1>
      </div>

      <div className="header-right">
        <div
          className="avatar"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <Person sx={{ fontSize: 18 }} />
          {isProfileOpen && (
            <div className="avatar-dropdown">
              <Button onClick={handleLogout} className="dropdown-item danger">Logout</Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
