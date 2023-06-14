import express from "express";
import { inputdata, updateName } from "../DBSchema/task-model.js";

const router = express.Router();

router.get("/:name/:age", (req, res) => {
  const { name, age } = req.params;

  res.send(req.params);
});

router.post("/", async (req, res) => {
  const inputData = await inputdata(req.body);
  res.json({
    status: "success",
    message: "data is stored in DB",
    returnData: inputData,
  });
});

router.patch("/", async (req, res) => {
  try {
    const { id, name } = req.body;
    const resultUpdate = await updateName(id, { name });
    console.log(resultUpdate);
    res.json({
      status: "Success",
      message: "Data of name has been updated",
      data: resultUpdate,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
