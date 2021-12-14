import { Pool } from "pg";
import dbConfig from "../../dbConfig.json";

export default async function handler(req, res) {
  const body = req.body;
  const time = new Date().getTime();
  const pool = new Pool(dbConfig);
  pool
    .query(
      `INSERT INTO "Posts"("user","title","content", "id")
          VALUES ('${body.user}','${body.title}','${body.content}', ${time});`
    )
    .then((poolRes) => {
      res.json({ post: "added" });
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      pool.end();
    });
}
