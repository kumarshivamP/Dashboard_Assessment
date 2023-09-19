import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";

const SideNav = () => {
  return (
    <div
      className="relative bg-[#4285F4] w-80 text-white rounded-xl my-6 ml-11 ps-12"
      style={{
        height: "95vh",
        fontFamily: "Montserrat",
      }}
    >
      <div className="font-bold text-4xl top-16 absolute">Board.</div>
      <div className="flex flex-col items-start absolute top-36">
        <span className="font-bold my-5 text-lg">
          <DashboardCustomizeOutlinedIcon className="me-4" />
          Dashboard
        </span>
        <span className="my-5 text-lg">
          <StyleOutlinedIcon className="me-4" />
          Transactions
        </span>
        <span className="my-5 text-lg">
          <CalendarMonthOutlinedIcon className="me-4" />
          Schedules
        </span>
        <span className="my-5 text-lg">
          <AccountCircleOutlinedIcon className="me-4" />
          Users
        </span>
        <span className="my-5 text-lg">
          <SettingsOutlinedIcon className="me-4" />
          Setting
        </span>
      </div>
      <div className="absolute flex flex-col items-start bottom-11">
        <span className="my-1.5 font-sm">Help</span>
        <span className="my-1.5 font-sm">Contact Us</span>
      </div>
    </div>
  );
};

export default SideNav;
