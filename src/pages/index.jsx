import Input from "@/components/input";
import UserCard from "@/components/user-card";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

let profiles = [
  {
    id: 1,
    firstName: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    phone: "99011090",
    jobTitle: "Software Engineer",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    firstName: "Jane Smith",
    age: 30,
    email: "jane.smith@example.com",
    address: "456 Oak St, Springfield, IL",
    phone: "99011091",
    jobTitle: "Project Manager",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    firstName: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    address: "789 Pine St, Springfield, IL",
    phone: "99011092",
    jobTitle: "UX Designer",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    firstName: "Bob Brown",
    age: 35,
    email: "bob.brown@example.com",
    address: "101 Maple St, Springfield, IL",
    phone: "99011093",
    jobTitle: "Product Owner",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    firstName: "Charlie Davis",
    age: 22,
    email: "charlie.davis@example.com",
    address: "202 Elm St, Springfield, IL",
    phone: "99011094",
    jobTitle: "Marketing Specialist",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John Doe",
      age: 25,
      email: "john.doe@example.com",
      address: "123 Main St, Springfield, IL",
      phone: "99011090",
      jobTitle: "Software Engineer",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      firstName: "Jane Smith",
      age: 30,
      email: "jane.smith@example.com",
      address: "456 Oak St, Springfield, IL",
      phone: "99011091",
      jobTitle: "Project Manager",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      firstName: "Alice Johnson",
      age: 28,
      email: "alice.johnson@example.com",
      address: "789 Pine St, Springfield, IL",
      phone: "99011092",
      jobTitle: "UX Designer",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      firstName: "Bob Brown",
      age: 35,
      email: "bob.brown@example.com",
      address: "101 Maple St, Springfield, IL",
      phone: "99011093",
      jobTitle: "Product Owner",
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      firstName: "Charlie Davis",
      age: 22,
      email: "charlie.davis@example.com",
      address: "202 Elm St, Springfield, IL",
      phone: "99011094",
      jobTitle: "Marketing Specialist",
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ]);
  const handleClick = () => {
    setUsers([]);
  };
  const showClick = () => {
    setUsers(profiles);
  };

  const handleChange = (text) => {
    setSearchValue(text);
    const findUser = profiles.filter((user) =>
      user.firstName.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(findUser);
  };
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl text-slate-500">User Find Application</h1>
      <div className="flex flex-col gap-5 mt-6 ">
        <Input handleChange={handleChange} />
        <div className="flex gap-6 ">
          <button
            className=" border border-cyan-400 rounded-lg px-4"
            onClick={handleClick}
          >
            clear
          </button>
          <button
            className=" border border-cyan-400 rounded-lg px-4"
            onClick={showClick}
          >
            view
          </button>
        </div>

        <p>Search value:{searchValue}</p>
        {users?.map((user) => {
          return (
            <div className="flex gap-5 p-5 items-center border border-gray-500 rounded-lg">
              <UserCard userImg={user.imageUrl} firstName={user.firstName} />
              <button>
                <MdOutlineCancel className="justify-items-end" />
              </button>
            </div>
          );
        })}
        {!users && <p>Хоосон</p>}
      </div>
    </main>
  );
}
