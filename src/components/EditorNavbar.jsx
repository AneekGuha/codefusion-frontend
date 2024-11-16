import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaFileDownload } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const EditorNavbar = ({ item, userData }) => {
  const [title, setTitle] = useState("Untitled");
  const [username, setUsername] = useState("");
  const location = useLocation();
  console.log(location)

  return (
    <>
      <div className="EditorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <img className="w-[150px] cursor-pointer" src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-4">
          <p className="text-white">
            Hi, {username} 👋
          </p>
          <p>
            file/ <span className="text-[grey]">{location?.state?.title}</span>
          </p>
        </div>
        <i className="p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]">
          <FaFileDownload />
        </i>
      </div>
    </>
  );
};

export default EditorNavbar;
