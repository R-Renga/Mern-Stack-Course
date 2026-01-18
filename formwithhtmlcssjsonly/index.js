console.log("raja, index.js");

const form = document.getElementById("myForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    age: document.getElementById("age").value,
    dob: document.getElementById("dob").value,
    email: document.getElementById("email").value,
    KnownLanguages: [],
    gender: "",
    Dropdown: document.getElementById("Dropdown").value,
    isactive: document.getElementById("isActive").checked,
  };

  //checkbox

  const languages = document.querySelectorAll(
    'input[id="english"]',
    'input[id="tamil"]',
    'input[id="hindi"]'
  );

  languages.forEach((datas) => {
    if (datas.checked) {
      data.KnownLanguages.push(datas.value);
    }
  });

  //radio

  const genderRadios = document.querySelectorAll(
    'input[id="male"], input[id="female"]'
  );
  genderRadios.forEach((radio) => {
    if (radio.checked) {
      data.gender = radio.value;
    }
  });

  //validations

  const errors = [];

  if (!data.name || data.name.trim() === "") {
    errors.push("name is required");
  }

  if (!data.email || data.email.trim() === "") {
    errors.push("Email is required");
  }

  if (data.age && (data.age < 0 || data.age > 150)) {
    errors.push("Age must be between 0 and 150");
  }

  if (data.email && !validateEmail(data.email)) {
    errors.push("Email format is invalid");
  }

  if (errors.length > 0) {
    console.error("Validation Errors:", errors);
    alert("Validation Errors:\n" + errors.join("\n"));
    return;
  }

  //all success
  console.log("Form submitted successfully!");
  console.log("Form Data:", data);

  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Form submitted successfully!");
    console.log("Form Data:", data);
    console.log("Backend Response:", result);
    
    alert("Form submitted successfully!");
    form.reset(); // Clear the form after successful submission

  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form: " + error.message);
  }
});

function validateEmail(data) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(data);
}
