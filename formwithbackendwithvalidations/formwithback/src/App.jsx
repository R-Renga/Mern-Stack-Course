import { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: "",
    email: "",
    dob: "",
    knownlanguages: [],
    gender: "",
    dropdown: "",
    isActive: false,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
  
    if (name === "isActive") {
      setFormData((prev) => ({
        ...prev,
        isActive: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        knownlanguages: checked
          ? [...prev.knownlanguages, value]
          : prev.knownlanguages.filter((lang) => lang !== value),
      }));
    }
  };
  

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:3000/users",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log("Backend Response:", result.data);

      alert("Form submitted successfully!");

      // RESET form
      setFormData({
        name: "",
        address: "",
        age: "",
        email: "",
        dob: "",
        knownlanguages: [],
        gender: "",
        dropdown: "",
        isActive: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed: " + error.message);
    }
  };

  return (
    <div>
      <h1>Form Handling</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>name :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>address :</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>age :</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>dob :</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>known languages:</label>

          <div>
            <input
              type="checkbox"
              name="knownlanguages"
              value="english"
              checked={formData.knownlanguages.includes("english")}
              onChange={handleCheckboxChange}
            />
            <label>English</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="knownlanguages"
              value="hindi"
              checked={formData.knownlanguages.includes("hindi")}
              onChange={handleCheckboxChange}
            />
            <label>Hindi</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="knownlanguages"
              value="tamil"
              checked={formData.knownlanguages.includes("tamil")}
              onChange={handleCheckboxChange}
            />
            <label>Tamil</label>
          </div>
        </div>

        <div>
          <label>gender :</label>

          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleRadioChange}
            />
            <label>male</label>
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleRadioChange}
            />
            <label>female</label>
          </div>
        </div>

        <div>
          <label>Dropdown: </label>
          <select
            name="dropdown"
            value={formData.dropdown}
            onChange={(e)=>handleChange(e)}
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>

        <div>
          <label>isActive:</label>
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleCheckboxChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
