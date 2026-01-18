const data = [
  {
    sno: 1,
    name: "raja",
    age: 27,
    place: "Thanjavur",
  },
  {
    sno: 2,
    name: "vidhya",
    age: 29,
    place: "madurai",
  },
  {
    sno: 3,
    name: "ramamoorthy",
    age: 50,
    place: "mannargudi",
  },
];

const tbody = document.getElementById("tbody");

data.forEach((value) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${value.sno}</td>
    <td>${value.name}</td>
    <td>${value.age}</td>
    <td>${value.place}</td>
    `;

  tbody.appendChild(tr);
});
