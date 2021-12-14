import { Pool } from "pg";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "3239",
    database: "DB1",
  });
  pool
    .query('select * from "Posts"')
    .then((poolRes) => {
      res.json(poolRes.rows);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      pool.end();
    });
}
