"use client";
import * as React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PeopleIcon from "@mui/icons-material/People";
import GroupIcon from "@mui/icons-material/Group";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import PaymentIcon from "@mui/icons-material/Payment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BarChartIcon from "@mui/icons-material/BarChart";
import CampaignIcon from "@mui/icons-material/Campaign";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function Sidebar() {
  const [open, setOpen] = React.useState({
    recruitment: false,
    task: false,
    staff: false,
    attendance: false,
    leave: false,
    payroll: false,
    report: false,
  });

  const handleToggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#1e293b",
          color: "white",
        },
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <BusinessIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Branch" />
        </ListItemButton>

        <ListItemButton onClick={() => handleToggle("recruitment")}>
          <ListItemIcon>
            <WorkIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Recruitment" />
          {open.recruitment ? <ExpandLess/> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.recruitment} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Jobs"/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Jobs Onboarding"/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Offer Letter"/>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleToggle("task")}>
          <ListItemIcon>
            <AssignmentIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Task" />
          {open.task ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
        <Collapse in={open.task} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Assign Tasks"/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="To Do List"/>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <ConfirmationNumberIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Ticket Management"/>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon sx={{ color: "white" }}/>
          </ListItemIcon>
          <ListItemText primary="Employee"/>
        </ListItemButton>

        <ListItemButton onClick={() => handleToggle("staff")}>
          <ListItemIcon>
            <GroupIcon sx={{ color: "white" }}/>
          </ListItemIcon>
          <ListItemText primary="Staff" />
          {open.staff ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
        <Collapse in={open.staff} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="User"/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Role"/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Employee Profile"/>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleToggle("attendance")}>
          <ListItemIcon>
            <AccessTimeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Attendance"/>
          {open.attendance ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
        <Collapse in={open.attendance} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Punch In / Punch Out"/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Daily Logs"/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Attendance Request"/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Attendance Details"/>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleToggle("leave")}>
          <ListItemIcon>
            <EventIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Leave Management" />
          {open.leave ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.leave} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Leave Status" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Leave Request" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Holiday" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleToggle("payroll")}>
          <ListItemIcon>
            <PaymentIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Payroll Management" />
          {open.payroll ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.payroll} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Payslip List" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Create Payroll" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Expense" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <AssessmentIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Performance" />
        </ListItemButton>

        <ListItemButton onClick={() => handleToggle("report")}>
          <ListItemIcon>
            <BarChartIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Report Analytics" />
          {open.report ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
        <Collapse in={open.report} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Employee Report" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Income Report" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Expense Report" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Staff Report" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <CampaignIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Announcement" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ReceiptIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Expense" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ExitToAppIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <EmojiEventsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Rewards" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Settings"/>
        </ListItemButton>
      </List>
    </Drawer>
  );
}