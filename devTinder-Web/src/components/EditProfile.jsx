import { useState } from "react";
import { Baseurl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ user = {} }) => {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateProfile = async () => {
    try {
      const res = await axios.patch(
        `${Baseurl}/profile/edit`,
        { firstName, lastName },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-500 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>
          <div>
            <div className="mb-4">
              <label className="label" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="input input-bordered w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="label" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="input input-bordered w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={updateProfile}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
