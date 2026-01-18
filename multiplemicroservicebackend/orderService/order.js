const { default: axios } = require("axios");
const express = require("express");

const app = express();

const orders = [
  { id: 101, userId: 1, product: "Laptop" },
  { id: 102, userId: 2, product: "Mouse" },
  { id: 103, userId: 1, product: "Keyboard" }
];

app.get("/orders/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const userOrders = orders.filter(o => o.userId === userId);
  res.json(userOrders);
});

app.get("/orders/:userId/user-info", async (req, res) => {
  const userId = Number(req.params.userId);

  try {
    const response = await axios.get(`http://localhost:3000/user`);
    const user = response.data.find(u => u.userId === userId);

    const userOrders = orders.filter(o => o.userId === userId);

    res.json({ user, orders: userOrders });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user info" });
  }
});

app.listen(3001, () => {
  console.log("order service started");
});
