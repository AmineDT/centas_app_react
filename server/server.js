require("dotenv").config();
const cors = require("cors");
const express = require("express");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

//---------------------------Contracts----------------------------------------------------------------------------------//

//get all contracts
app.get("/api/v1/contracts", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM contracts ORDER BY contract_id DESC");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        contracts: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//get a contract
app.get("/api/v1/contracts/:id", async (req, res) => {
  try {
    const results = await db.query(
      "SELECT contract_name, contract_start_date, contract_amount, contract_notification_date, provisional_bond, holdback, contract_description FROM contracts WHERE contract_id = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        contract: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//post a contract
app.post("/api/v1/contracts", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query(
      "INSERT INTO contracts (contract_name, contract_start_date, contract_amount, contract_notification_date, provisional_bond, holdback, contract_description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [req.body.contract_name, req.body.contract_start_date, req.body.contract_amount, req.body.contract_notification_date, req.body.provisional_bond, req.body.holdback, req.body.contract_description]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        contract: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//update a contract
app.put("/api/v1/contracts/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE contracts SET contract_name = $1, contract_start_date = $2, contract_amount = $3, contract_notification_date = $4, provisional_bond = $5, holdback = $6, contract_description = $7  WHERE contract_id = $8 RETURNING *",
      [req.body.contract_name, req.body.contract_start_date, req.body.contract_amount, req.body.contract_notification_date, req.body.provisional_bond, req.body.holdback, req.body.contract_description, req.params.id]
    );
    res.status(201).json({
      status: "success",
      data: {
        contract: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//delete a contract
app.delete("/api/v1/contracts/:id", async (req, res) => {
  try {
    const results = await db.query(
      "DELETE from contracts WHERE contract_id = $1",
      [req.params.id]
    );
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});


//---------------------------Commands----------------------------------------------------------------------------------//

//get all commands
app.get("/api/v1/commands", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM commands ORDER BY command_id DESC");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        commands: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//get a command
app.get("/api/v1/commands/:id", async (req, res) => {
  try {
    const results = await db.query(
      "SELECT command_number, command_start_date, contract_name, command_amount FROM commands WHERE command_id = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        command: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//post a command
app.post("/api/v1/commands", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query(
      "INSERT INTO commands (command_number, command_start_date, contract_name, command_amount) VALUES ($1, $2, $3, $4) RETURNING *",
      [req.body.command_number, req.body.command_start_date, req.body.contract_name, req.body.command_amount]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        command: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//update a command
app.put("/api/v1/commands/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE commands SET command_number = $1, command_start_date = $2, contract_name = $3, command_amount = $4  WHERE command_id = $5 RETURNING *",
      [req.body.command_number, req.body.command_start_date, req.body.contract_name, req.body.command_amount, req.params.id]
    );
    res.status(201).json({
      status: "success",
      data: {
        contract: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//delete a command
app.delete("/api/v1/commands/:id", async (req, res) => {
  try {
    const results = await db.query(
      "DELETE from commands WHERE command_id = $1",
      [req.params.id]
    );
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

















//---------------------------Port config----------------------------------------------------------------------------------//

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`The server is up and listening on ${port}`);
});
