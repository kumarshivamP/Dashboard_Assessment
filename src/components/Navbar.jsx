import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import photo from "../assets/image/img1.jpg";

const Navbar = () => {
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
      const user = localStorage.getItem("user");
      setImg(user);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <nav className="flex justify-between mt-6 h-10 items-center">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <div className="flex justify-between w-1/4 items-center">
        <div className="flex justify-between bg-[#FFFFFF] text-[#858585] rounded-xl w-56 items-center py-1.5 px-3.5">
          <input
            className="bg-transparent outline-none"
            type="text"
            name=""
            placeholder="Search.."
          />
          <SearchOutlinedIcon />
        </div>
        <NotificationsNoneOutlinedIcon className="h-6" />
        <img
          className="rounded-full w-10 h-10"
          src={img === "" ? photo : img}
          alt=".."
          onClick={handleLogout}
        />
      </div>
    </nav>
  );
};

export default Navbar;
