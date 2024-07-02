import { Dropdown, Avatar, Navbar } from "flowbite-react";
import { HiChevronDown, HiOutlineBell } from "react-icons/hi";
import profilePicture from "../assets/profile.jpg"
import { Link } from "react-router-dom";

export function UserDropdown() {
  return (
    <div className="flex items-center md:order-2 space-x-4">
      {/* Notification Bell Icon */}
      <button className="text-slate-600 hover:text-slate-800">
        <HiOutlineBell size={24} />
      </button>
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <div className="flex items-center space-x-2 cursor-pointer">
            <Avatar
              alt="User settings"
              img={profilePicture}
              rounded
            // className="border border-cyan-600"
            />
            <span className="text-sm font-medium text-slate-600">Ngademin</span>
            <HiChevronDown className="text-slate-600" />
          </div>
        }>
        <Link to="/profile">
          <Dropdown.Item>Profile</Dropdown.Item>
        </Link>
        <Dropdown.Divider />
        <Link to="/login">
          <Dropdown.Item>Log out</Dropdown.Item>
        </Link>
      </Dropdown>
      {/* <Navbar.Toggle /> */}
    </div>
  );
}
