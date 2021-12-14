import { Pool } from "pg";
import dbConfig from "../../dbConfig.json";

export default async function handler(req, res) {
  const body = req.body;
  const pool = new Pool(dbConfig);
  pool
    .query(`DELETE FROM "Posts" WHERE id=${body.id};`)
    .then((poolRes) => {
      res.json({ post: "deleted" });
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      pool.end();
    });
}
