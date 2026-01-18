const { default: axios } = require("axios");
const express = require("express");

const app = express();

const user = [
  { userId: 1, username: "raja" },
  { userId: 2, username: "pradeep" },
];

app.get("/user", (req, res) => {
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/users/:id/orders", async (req, res) => {
  try {
    const userId = Number(req.params.id);

    const userData = user.find(u => u.userId === userId);
    if (!userData) return res.status(404).json({ error: "User not found" });

    const response = await axios.get(`http://localhost:3001/orders/${userId}`);

    res.status(200).json({
      user: userData,
      orders: response.data
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.listen(3000, () => {
  console.log("user service started");
});
