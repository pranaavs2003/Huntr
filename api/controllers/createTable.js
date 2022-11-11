import db from "../db.js";

export const createTableUserdata = (req, res) => {
  const q =
    "CREATE TABLE userdata(userid int, username varchar(50) NOT NULL, followers int, following int, appreciations int, projectviews int, jobrole varchar(50) NOT NULL, country varchar(50) NOT NULL, about varchar(255) NOT NULL, instagramlink varchar(255) DEFAULT '', pinterestlink varchar(255) DEFAULT '', behencelink varchar(255) DEFAULT '', type int NOT NULL, price varchar(255) DEFAULT '');";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Table Created Successfully!");
  });
};

export const createTableSaved = (req, res) => {
  const q =
    "CREATE TABLE saved(savedid int AUTO_INCREMENT PRIMARY KEY, userid int NOT NULL, postid int NOT NULL);";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Table Created Successfully!");
  });
};

export const createTableFollow = (req, res) => {
  const q =
    "CREATE TABLE follow(followid int AUTO_INCREMENT PRIMARY KEY, followerid int NOT NULL, followingid int NOT NULL);";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Table Created Successfully!");
  });
};

export const createTableRequest = (req, res) => {
  const q =
    "CREATE TABLE request(requestid int AUTO_INCREMENT PRIMARY KEY, userid int NOT NULL, title varchar(50) NOT NULL, description varchar(255) NOT NULL, refimage varchar(255) NOT NULL, status int);";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Table Created Successfully!");
  });
};

export const createUserdata = (req, res) => {
  const q =
    "INSERT INTO userdata(`userid`, `username`, `followers`, `following`, `appreciations`,  `projectviews`, `jobrole`, `country`, `about`, `instagramlink`, `pinterestlink`, `behencelink`, `type`, `price`) VALUES(?);";
  const data = [
    req.body.userid,
    req.body.username,
    0,
    0,
    0,
    0,
    req.body.jobrole,
    req.body.country,
    req.body.about,
    req.body.instagramlink,
    req.body.pinterestlink,
    req.body.behencelink,
    req.body.type,
    req.body.price,
  ];
  db.query(q, [data], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Follow Saved Successfully!");
  });
};

export const follow = (req, res) => {
  const q = "INSERT INTO follow(`followerid`, `followingid`) VALUES(?);";
  const data = [req.body.followerid, req.body.followingid];
  db.query(q, [data], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Follow Saved Successfully!");
  });
};

export const savePost = (req, res) => {
  const q = "INSERT INTO saved(`userid`, `postid`) VALUES(?);";
  const data = [req.body.userid, req.body.postid];
  db.query(q, [data], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Post Saved Successfully!");
  });
};

export const createRequest = (req, res) => {
  const q =
    "INSERT INTO request(`userid`, `title`, `description`, `refimage`, `status`) VALUES(?);";
  const data = [
    req.body.userid,
    req.body.title,
    req.body.description,
    req.body.refimage,
    0,
  ];
  db.query(q, [data], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Request Created Successfully!");
  });
};
