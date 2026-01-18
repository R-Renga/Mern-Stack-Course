const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
});

/* --------------------------------------------------
   INSERT SINGLE RECORD
-------------------------------------------------- */
app.post("/insertRecord", async (req, res) => {
  try {
    const { universityId, universityName, universityDate } = req.body;

    const query = `
      INSERT INTO university (universityId, universityName, universityDate)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const result = await pool.query(query, [
      universityId,
      universityName,
      universityDate,
    ]);

    res.status(201).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Insert failed" });
  }
});

/* --------------------------------------------------
   FETCH BY QUERY PARAM
-------------------------------------------------- */
app.get("/dataByQuery", async (req, res) => {
  try {
    const { universityCode } = req.query;

    const fetchQuery = `
      SELECT *
      FROM university
      WHERE universitycode = $1;
    `;

    const result = await pool.query(fetchQuery, [universityCode]);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fetch failed" });
  }
});

/* --------------------------------------------------
   INSERT MULTIPLE RECORDS (ACID SAFE)
-------------------------------------------------- */
app.post("/insert", async (req, res) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const query = `
      INSERT INTO university (universityId, universityName, universityDate)
      VALUES 
        ($1, $2, $3),
        ($4, $5, $6)
      RETURNING *;
    `;

    const values = [
      1, "Anna University", "2025-01-10",
      2, "Madurai University", "2025-01-12",
    ];

    const result = await client.query(query, values);

    await client.query("COMMIT");

    res.status(201).json(result.rows);
  } catch (error) {
    await client.query("ROLLBACK");
    console.error(error);
    res.status(500).json({ message: "Transaction failed" });
  } finally {
    client.release();
  }
});

/* --------------------------------------------------
   UPDATE RECORD
-------------------------------------------------- */
app.put("/update", async (req, res) => {
  try {
    const { universitycode, universityaddress } = req.body;

    const query = `
      UPDATE university
      SET universityaddress = $2
      WHERE universitycode = $1
      RETURNING *;
    `;

    const result = await pool.query(query, [
      universitycode,
      universityaddress,
    ]);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Update failed" });
  }
});

/* --------------------------------------------------
   SERVER START
-------------------------------------------------- */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
