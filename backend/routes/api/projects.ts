import { Router } from "express";
import db from "../../db";

const router = Router();
// Projects are saved as two separate tables:
//   - projects (invidual project information)
//   - project_data (components inside of a project)

// Get projects by user_id
// Get single project
router.get("/", async (req, res) => {
  try {
    const user_id = req.query.user_id;
    const id = req.query.id;

    // TODO: requires auth
    if (id) {
      const queryString = [
        `SELECT * FROM components c, project_data pd`,
        `WHERE pd.project_id = ${id} AND c.id = pd.component_id`,
      ].join(" ");

      const projectData = await db.query(queryString);
      const projectDataMap = projectData.rows.map((e: any) => {
        return { [e.id]: e };
      });
      const result = Object.assign({}, ...projectDataMap);

      res.send(result);
      return;
    }

    if (user_id) {
      const queryString = `SELECT * FROM projects WHERE user_id = ${user_id}`;
      const project = await db.query(queryString);
      res.send(project.rows);
      return;
    }
    res.sendStatus(400);
  } catch (err) {
    console.log(err);
  }
});

// Post new project
// Update entire project
// Post element of project
// Update element of project
// Delete element of project

export default router;
