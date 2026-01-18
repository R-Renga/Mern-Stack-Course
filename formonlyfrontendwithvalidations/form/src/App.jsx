import { useState } from "react";

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
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlecheckboxChange = (e) => {
    const { name, checked, value } = e.target;

    if (name === "isActive") {
      setFormData((prev) => ({
        ...prev,
        isActive: checked,
      }));
    } else {
      setFormData((prev) => {
        const languages = checked
          ? [...prev.knownlanguages, value]
          : prev.knownlanguages.filter((lang) => lang !== value);
        return {
          ...prev,
          knownlanguages: languages,
        };
      });
    }
  };
  const handleradiochange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    const validationErrors = [];

    if (!formData.name || formData.name.trim() === "") {
      validationErrors.push("name is required");
    }

    if (!formData.email || formData.email.trim() === "") {
      validationErrors.push("Email is required");
    }

    if (formData.age && (formData.age < 0 || formData.age > 150)) {
      validationErrors.push("Age must be between 0 and 150");
    }

    if (formData.email && !validateEmail(formData.email)) {
      validationErrors.push("Email format is invalid");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      alert("Validation Errors:\n" + validationErrors.join("\n"));
      return;
    }

    try {
      // const result = await fetch('http://localhost:3000/users', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      const result = await axios.post("http://localhost:3000/users", formData);
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      const data = await result.json();
      console.log("Form submitted successfully!");
      console.log("Form Data:", formData);
      console.log("Backend Response:", data);

      alert("Form submitted successfully!");

      setFormData({
        name: "",
        address: "",
        age: "",
        dob: "",
        email: "",
        KnownLanguages: [],
        gender: "",
        Dropdown: "",
        isactive: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form: " + error.message);
    }

    console.log("Form submitted successfully!");
    console.log("Form Data:", formData);
  }

  return (
    <div>
      <h1>Form Handling</h1>
      <div>
        <div>
          <label htmlFor="name">name :</label>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="address">address :</label>
          <input
            type="textarea"
            value={formData.address}
            name="address"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="age">age :</label>
          <input
            type="number"
            value={formData.number}
            name="age"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="email">email :</label>
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="dob">dob :</label>
          <input
            type="date"
            value={formData.dob}
            name="dob"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="name">knownlanguages :</label>
          <div>
            <input
              type="checkbox"
              value="English"
              name="English"
              checked={formData.knownlanguages.includes("English")}
              onChange={(e) => handlecheckboxChange(e)}
            />
            <label>English :</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="hindi"
              name="hindi"
              checked={formData.knownlanguages.includes("hindi")}
              onChange={(e) => handlecheckboxChange(e)}
            />
            <label>hindi :</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="tamil"
              name="tamil"
              checked={formData.knownlanguages.includes("tamil")}
              onChange={(e) => handlecheckboxChange(e)}
            />
            <label>tamil :</label>
          </div>
        </div>
        <div>
          <label htmlFor="gender">gender :</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => handleradiochange(e)}
            />
            <label htmlFor="male">male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => handleradiochange(e)}
            />
            <label htmlFor="male">male</label>
          </div>
        </div>
        <div>
          <label>Dropdown: </label>
          <select
            name="Dropdown"
            value={formData.dropdown}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="isActive">isActive: </label>
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isactive}
            onChange={(e) => handlecheckboxChange(e)}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default App;
