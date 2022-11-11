import db from "../db.js";

export const getuserbyid = (req, res) => {
  const q = `SELECT * FROM user WHERE id=${req.params.id}`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getuserbyusername = (req, res) => {
  const q = `SELECT * FROM user WHERE username='${req.params.username}'`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getdesignerdetails = (req, res) => {
  const q = `SELECT * FROM user INNER JOIN userdata ON user.username = userdata.username;`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getuserdatabyusername = (req, res) => {
  const q = `SELECT * FROM userdata WHERE username='${req.params.username}'`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getuserdata = (req, res) => {
  const q = `SELECT * FROM userdata WHERE userid='${req.params.userid}'`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getfollowers = (req, res) => {
  const q = `SELECT * FROM user WHERE id IN (SELECT followingid FROM follow WHERE followerid='${req.params.userid}')`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getrequests = (req, res) => {
  const q = `SELECT * FROM request WHERE userid='${req.params.userid}'`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const isFollowing = (req, res) => {
  const q = `SELECT * FROM follow WHERE followerid=${req.body.followerid} AND followingid=${req.body.followingid}`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const follow = (req, res) => {
  const q = "INSERT INTO follow(`followerid`, `followingid`) VALUES(?);";
  const q1 = `UPDATE userdata SET following = following + 1 WHERE userid = ${req.body.followerid}`;
  const q2 = `UPDATE userdata SET followers = followers + 1 WHERE userid = ${req.body.followingid}`;
  const values = [req.body.followerid, req.body.followingid];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    else {
      db.query(q1, (err1, data1) => {
        if (err1) return res.status(500).json(err1);
        else {
          db.query(q2, (err2, data2) => {
            if (err2) return res.status(500).json(err2);
            else {
              return res.status(200).json("Followed Successfully!");
            }
          });
        }
      });
    }
  });
};

export const unfollow = (req, res) => {
  const q = `DELETE FROM follow WHERE followerid=${req.body.followerid} and followingid=${req.body.followingid};`;
  const q1 = `UPDATE userdata SET following = following - 1 WHERE userid = ${req.body.followerid}`;
  const q2 = `UPDATE userdata SET followers = followers - 1 WHERE userid = ${req.body.followingid}`;
  const values = [req.body.followerid, req.body.followingid];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    else {
      db.query(q1, (err1, data1) => {
        if (err1) return res.status(500).json(err1);
        else {
          db.query(q2, (err2, data2) => {
            if (err2) return res.status(500).json(err2);
            else {
              return res.status(200).json("Unfollowed Successfully!");
            }
          });
        }
      });
    }
  });
};
