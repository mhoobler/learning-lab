import { Router } from "express";
import db from "../../db";

const router = Router();
// Get components
// Get more details of single component
// Add component
// Update component

router.get("/", async (req, res) => {
  try {
    const id = req.query.id;
    const component = await db.query("SELECT * FROM components WHERE id = $1", [
      id,
    ]);
    console.log(component);
    res.send(component);
  } catch (err) {
    console.log(err);
  }
});

export default router;
