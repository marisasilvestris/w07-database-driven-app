import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get(`/`, (req, res) => {
  res.status(200).send(`GET requested to / successfully`);
});

app.get(`/posts`, async (req, res) => {
  try {
    const posts = (
      await db.query(`select * from posts order by date desc, time desc`)
    ).rows;
    res.json(posts);
  } catch (e) {
    res.send(`connection error!`, { error: e.message });
  }
});

// Individual posts page
// GET to /posts/<posts id> to get only those items
app.get(`/posts/:id`, async (req, res) => {
  try {
    const postsData = (
      await db.query(`select  * from posts where id = $1`, [req.params.id])
    ).rows;
    res.status(200).json(postsData);
    console.log(`individual post request: ${req.params.id}`);
  } catch (e) {
    res.send(`connection error!`, { error: e.message });
  }
});

app.delete(`/posts/:id`, async (req, res) => {
  const submissionData = req.body;
  try {
    const dbQuery = await db.query(`delete from posts where id = $1`, [
      submissionData.id,
    ]);

    res.send(`DELETE requested to /posts successfully:<br/>${submissionData}`);
  } catch (e) {
    res.send(`connection error!`, { error: e.message });
  }
});

app.post(`/posts`, async (req, res) => {
  const submissionData = req.body;
  try {
    const dbQuery = await db.query(
      `insert into posts (title, body, colour, date, time) values ($1, $2, $3, current_date, current_time)`,
      [submissionData.title, submissionData.body, submissionData.colour],
    );

    res.send(`POST requested to /posts successfully:<br/>${submissionData}`);
  } catch (e) {
    res.send(`connection error!`, { error: e.message });
  }
});

app.get(`/refresh`, async (req, res) => {
  try {
    const posts = await db.query(`
        create table if not exists posts (
  id int primary key generated always as identity,
  title text,
  body text,
  date date,
  time time,
  tags text,
  colour text
  );`);
    res.send(`done!`);
  } catch (e) {
    res.send(`connection error!`, { error: e.message });
  }
});

// open port 9k1
app.listen(9001, (req, res) => {
  console.log(`listening successfully on 9001!`);
});
