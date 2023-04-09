import React, { useContext, useState } from "react";
import Modal from "../Modal";
import { toast } from "react-toastify";
import { UserContext } from "../../UserContext";
import axios from "axios";

const ProfileModal = ({ closeModal }) => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: (user && `${user.firstName}`) || "John",
    lastName: (user && `${user.lastName}`) || "Doe",
    email: (user && `${user.email}`) || "admin@gmail.com",
    phoneNo: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async () => {
    try {
      await axios.put("/change-profile", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Profile Updated!");
      console.log("updated");
      closeModal();
    } catch (error) {
      toast.error("Could not update profile");
      console.log(error);
    }
  };
  return (
    <Modal closeModal={closeModal}>
      <div className="p-5">
        <div className="flex justify-between">
          <span className="text-bold">Profile Update</span>
          <span onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="h-36 w-36">
              <img
                src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-3">
              <div>
                <div>First Name</div>
                <input
                  className="py-2.5 px-4 bg-slate-100 w-full"
                  type="text"
                  name="firstName"
                  value={formData?.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div>Last Name</div>
                <input
                  className="py-2.5 px-4 bg-slate-100 w-full"
                  type="text"
                  name="lastName"
                  value={formData?.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div>Email Address</div>
                <input
                  className="py-2.5 px-4 bg-slate-100 w-full"
                  type="text"
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div>Mobile Number</div>
                <input
                  className="py-2.5 px-4 bg-slate-100 w-full"
                  type="tel"
                  name="phoneNo"
                  placeholder="Mobile Number"
                  value={formData.phoneNo}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 mt-3">
          <button
            onClick={closeModal}
            className="cursor-pointer px-8 py-2 bg-gray-500 text-white text-base rounded-3xl hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            className="cursor-pointer px-8 py-2 bg-orange-500 text-white text-base rounded-3xl hover:bg-orange-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;
