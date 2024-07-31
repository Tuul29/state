import React from "react";

const UserCard = ({ userImg, firstName }) => {
  return (
    <div className="flex gap-5 p-5 items-center border border-gray-500">
      <img className="w-10 h-10 rounded-full " src={userImg} alt="" />
      <div>
        <h1>{firstName}</h1>
        {/* <p>{position}</p> */}
      </div>
    </div>
  );
};

export default UserCard;
