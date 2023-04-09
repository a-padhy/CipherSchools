import React, { useState } from "react";
import axios from "axios";
import Modal from "../Modal";
import { toast } from "react-toastify";
const PasswordModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleSubmit = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      console.log("pw do not match");
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await axios.put("/change-password", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Password Changed");
      closeModal();
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <Modal closeModal={closeModal}>
      <div className="p-5">
        <div className="flex flex-col gap-3">
          <div>
            <div>Current Password</div>
            <div className="flex items-center bg-slate-100">
              <input
                className="py-2.5 px-4 bg-slate-100 w-full"
                type="password"
                name="currentPassword"
                value={formData?.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <div>
            <div>New Password</div>
            <div className="flex items-center bg-slate-100">
              <input
                className="py-2.5 px-4 bg-slate-100 w-full"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                type="password"
                placeholder="New Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <div>
            <div>Confirm Password</div>
            <div className="flex items-center bg-slate-100">
              <input
                className="py-2.5 px-4 bg-slate-100 w-full"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
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
      </div>
    </Modal>
  );
};

export default PasswordModal;
