const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ============ 공지 POST ============ */
app.post("/notice", async (req, res) => {
  const { title, content, image } = req.body;

  try {
    const [rows] = await db.query(
      "INSERT INTO notice (title, content, image_url) VALUES (?, ?, ?)",
      [title, content, image]
    );
    res.json({ success: true, id: rows.insertId });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

/* ============ 공지 GET ============ */
app.get("/notice", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, title, content, image_url, created_at FROM notice ORDER BY id DESC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "DB 조회 실패" });
  }
});

/* ============ 문의 POST ============ */
app.post("/inquiry", async (req, res) => {
  const { name, message } = req.body;

  try {
    const [rows] = await db.query(
      "INSERT INTO inquiry (name, message) VALUES (?, ?)",
      [name, message]
    );
    res.json({ success: true, id: rows.insertId });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

/* ============ 문의 GET ============ */
app.get("/inquiry", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, name, message, created_at FROM inquiry ORDER BY id DESC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "문의 불러오기 실패" });
  }
});

/* ============ ⭐ 댓글 POST (index.html용) ============ */
app.post("/comment", async (req, res) => {
  const { name, message } = req.body;

  try {
    const [rows] = await db.query(
      "INSERT INTO comment (name, message) VALUES (?, ?)",
      [name, message]
    );

    res.json({ success: true, id: rows.insertId });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

/* ============ ⭐ 댓글 GET (index.html에서 목록 불러오기) ============ */
app.get("/comment", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, name, message, created_at FROM comment ORDER BY id DESC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "댓글 불러오기 실패" });
  }
});

/* ============ 서버 실행 ============ */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// 공지 상세보기 (id 하나만 불러오기)
app.get("/notice/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const [rows] = await db.query(
      "SELECT * FROM notice WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.json({ error: "NOT_FOUND" });
    }

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: "DB 조회 실패" });
  }
});
