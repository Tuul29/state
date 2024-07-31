import React from "react";

const UserCard = ({
  id,
  firstName,
  age,
  email,
  address,
  phone,
  jobTitle,
  imageUrl,
}) => {
  return (
    <div className="flex gap-4 p-5 item-center">
      <p>{id}</p>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>{email}</p>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{jobTitle}</p>
      <img src="{imageUrl}" alt="" />
    </div>
  );
};

export default UserCard;
