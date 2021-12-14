import { Pool } from "pg";
import dbConfig from "../../dbConfig.json";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const pool = new Pool(dbConfig);
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
