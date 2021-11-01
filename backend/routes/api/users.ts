import { Router } from "express";
import db from "../../db";

const router = Router();

// Get User
router.get("/", async (req, res) => {
  try {
    const id = req.query.id;
    const user = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    console.log(user);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});
// Create User

export default router;
