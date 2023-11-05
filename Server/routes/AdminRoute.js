import express from "express"
import con from "../utils/db.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";



const router = express.Router()

router.post("/adminlogin", (req, res) => {
    const sql = "SELECT * from admin Where email = ? and password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
       if (err) return res.json({ loginStatus: false, Error: "Query error" });
      if (result.length > 0) {
        const email = result[0].email;
        const token = jwt.sign(
          { role: "admin", email: email, id: result[0].id },
          "jwt_secret_key",
          { expiresIn: "1d" }
        );
        res.cookie('token', token)
        return res.json({ loginStatus: true });
      } else {
          return res.json({ loginStatus: false, Error:"wrong email or password" });
      }
    });
  });


  router.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})


  
router.post('/add_category', (req, res) => {
  const sql = "INSERT INTO category (`category_name`) VALUES (?)"
  con.query(sql, [req.body.category], (err,result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true})
  })
})


//upload image 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'Public/Images')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({
  storage: storage
})
// end of image upload

router.post('/add_employee', upload.single('image'), (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.json({ Status: false, Error: "Password hashing error" });
    }

    const sql = `INSERT INTO employee (name, email, password, address, salary, image, category_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.address,
      req.body.salary,
      req.file.filename,
      req.body.category_id
    ];

    con.query(sql, values, (err, result) => {
      if (err) {
        return res.json({ Status: false, Error: err });
      }
      return res.json({ Status: true });
    });
  });
});

router.get('/employee', (req, res) => {
  const sql = "SELECT * FROM employee";
  con.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
})
router.get('/employee/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM employee WHERE employee_id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ Status: false, Error: "Database query error" });
    }

    console.log("Query result:", result);

    if (result.length === 0) {
      console.error("Employee not found");
      return res.status(404).json({ Status: false, Error: "Employee not found" });
    }

    return res.status(200).json({ Status: true, Result: result[0] });
  });
});


export {router as adminRouter}