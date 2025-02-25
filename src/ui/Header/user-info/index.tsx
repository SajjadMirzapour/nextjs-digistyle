"use client";

import { useState } from "react";
import UserWelcome from "./user-welcome";
import UserDashboard from "./user-dashboard";

function UserInfo({ session }) {
  const [showInfo, setShowInfo] = useState(false);
  const handleShowUserInfo = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <div className="relative text-sm font-light">
      <UserWelcome session={session} handleShowUserInfo={handleShowUserInfo} />
      <UserDashboard showInfo={showInfo} />
    </div>
  );
}

export default UserInfo;
