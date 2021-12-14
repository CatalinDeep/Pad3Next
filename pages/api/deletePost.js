import { Pool } from "pg";

export default async function handler(req, res) {
  const body = req.body;
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "3239",
    database: "DB1",
  });
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
