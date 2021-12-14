import { Pool } from "pg";
import dbConfig from "../../dbConfig.json";

export default async function handler(req, res) {
  const body = req.body;
  const pool = new Pool(dbConfig);
  pool
    .query(
      `
      UPDATE Posts
      SET 
      "user" ='${body.user}',
      "title" = '${body.title}',
      "content" = '${body.content}'
      WHERE id=${body.id};`
    )
    .then((poolRes) => {
      res.json({ post: "updated" });
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      pool.end();
    });
}
