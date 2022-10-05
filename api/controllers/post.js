import db from "../db.js";

export const newpost = (req, res) => {
  const q =
    "INSERT INTO posts(`id`, `title`, `creator`, `image`, `likecount`, `viewcount`, `category`) VALUES(?)";
  const values = [
    req.body.id,
    req.body.title,
    req.body.creator,
    req.body.image,
    0,
    0,
    req.body.category,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Value inserted Successfully!");
  });
};

export const getposts = (req, res) => {
  const q = "SELECT * FROM posts";

  db.query(q, (err, data) => {
    if (err) res.status(500).json(err);
    res.status(200).json(data);
  });
};

export const likePost = (req, res) => {
  try {
    const q = "UPDATE posts SET likecount = likecount + 1 WHERE id = ?";

    db.query(q, [req.body.id], (err, data) => {
      if (err) res.status(500).json(err);
      res.status(200).json("Post Liked Successfully!");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const unlikePost = (req, res) => {
  try {
    const q = "UPDATE posts SET likecount = likecount - 1 WHERE id = ?";

    db.query(q, [req.body.id], (err, data) => {
      if (err) res.status(500).json(err);
      res.status(200).json("Post Unliked Successfully!");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const viewPost = (req, res) => {
  try {
    const q = "UPDATE posts SET viewcount = viewcount + 1 WHERE id = ?";

    db.query(q, [req.body.id], (err, data) => {
      if (err) res.status(500).json(err);
      res.status(200).json("Post Viewed Successfully!");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getPostCount = (req, res) => {
  try {
    const q = "SELECT count(*) FROM posts;";
    db.query(q, (err, data) => {
      if (err) res.status(500).json(err);
      res.status(200).json({ count: data[0]["count(*)"] });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
